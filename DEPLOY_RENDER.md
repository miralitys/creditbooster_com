# Deploy to Render

## 1) Push project to GitHub

```bash
cd /Users/ramisyaparov/Desktop/Creditbooster.com
git init
git add .
git commit -m "Initial CreditBooster site"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## 2) Create service in Render

1. Open Render Dashboard.
2. Click `New` -> `Blueprint`.
3. Connect your GitHub repo with this project.
4. Render will detect `render.yaml` and create `creditbooster-site`.
5. Click `Apply` / `Create`.

After deploy, Render gives a public URL like `https://creditbooster-site.onrender.com`.
