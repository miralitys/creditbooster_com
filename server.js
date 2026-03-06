const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL || "";
const MAX_BODY_SIZE = 1024 * 1024; // 1MB

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".txt": "text/plain; charset=utf-8",
};

const safePath = (requestPath) => {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return path.join(ROOT, normalized);
};

const sendFile = (res, filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
};

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
};

const parseJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > MAX_BODY_SIZE) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", (err) => reject(err));
  });

const normalizeLead = (lead) => ({
  firstName: String(lead.firstName || "").trim(),
  lastName: String(lead.lastName || "").trim(),
  phone: String(lead.phone || "").trim(),
  email: String(lead.email || "").trim(),
  language: String(lead.language || "").trim(),
  pageUrl: String(lead.pageUrl || "").trim(),
  source: String(lead.source || "creditbooster.com website").trim(),
});

const PHONE_REGEX = /^\+1\(\d{3}\)\d{3}-\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasRequiredLeadFields = (lead) => lead.firstName && lead.lastName && lead.phone && lead.email;
const isValidPhone = (phone) => PHONE_REGEX.test(String(phone || "").trim());
const isValidEmail = (email) => EMAIL_REGEX.test(String(email || "").trim());

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/lead") {
    parseJsonBody(req)
      .then(async (body) => {
        const lead = normalizeLead(body || {});

        if (!hasRequiredLeadFields(lead)) {
          sendJson(res, 400, { ok: false, message: "Missing required fields" });
          return;
        }

        if (!isValidPhone(lead.phone)) {
          sendJson(res, 400, { ok: false, message: "Phone must match +1(XXX)XXX-XXXX" });
          return;
        }

        if (!isValidEmail(lead.email)) {
          sendJson(res, 400, { ok: false, message: "Email must be valid and include @" });
          return;
        }

        if (!GHL_WEBHOOK_URL) {
          sendJson(res, 500, {
            ok: false,
            message: "GHL webhook is not configured. Set GHL_WEBHOOK_URL in environment.",
          });
          return;
        }

        const payload = {
          ...lead,
          fullName: `${lead.firstName} ${lead.lastName}`.trim(),
          submittedAt: new Date().toISOString(),
        };

        const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!ghlResponse.ok) {
          const errorText = await ghlResponse.text();
          console.error("GHL webhook error:", ghlResponse.status, errorText);
          sendJson(res, 502, {
            ok: false,
            message: "Failed to deliver lead to CRM",
            status: ghlResponse.status,
          });
          return;
        }

        sendJson(res, 200, { ok: true });
      })
      .catch((err) => {
        const statusCode = err.message === "Payload too large" ? 413 : 400;
        sendJson(res, statusCode, { ok: false, message: err.message });
      });

    return;
  }

  const requestedPath = req.url === "/" ? "/index.html" : req.url;
  let filePath = safePath(requestedPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    if (err) {
      const fallback = path.join(ROOT, "index.html");
      sendFile(res, fallback);
      return;
    }

    sendFile(res, filePath);
  });
});

server.listen(PORT, () => {
  console.log(`CreditBooster server running on port ${PORT}`);
});
