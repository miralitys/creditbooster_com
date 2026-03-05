# Render + GoHighLevel Setup

## 1) Push code to GitHub

```bash
cd /Users/ramisyaparov/Desktop/Creditbooster.com
git add .
git commit -m "Integrate lead form with GoHighLevel webhook"
git push origin main
```

## 2) Создайте webhook в GoHighLevel

1. В GoHighLevel откройте `Automation` -> `Workflows`.
2. Создайте workflow с триггером `Inbound Webhook`.
3. Скопируйте webhook URL (пример: `https://services.leadconnectorhq.com/hooks/...`).
4. Добавьте действия в workflow (например `Create/Update Contact`, `Send Internal Notification` и т.д.).

Сайт отправляет JSON поля:
- `firstName`
- `lastName`
- `phone`
- `email`
- `language`
- `pageUrl`
- `source`
- `fullName`
- `submittedAt`

## 3) Настройте Render

1. В Render откройте сервис `creditbooster_com`.
2. `Environment` -> добавьте переменную:
   - `GHL_WEBHOOK_URL` = ваш URL из шага 2.
3. Нажмите `Save Changes`.
4. Запустите `Manual Deploy` -> `Deploy latest commit`.

## 4) Проверка

1. На сайте нажмите `Start for $1` или `Book a strategy call`.
2. Отправьте тестовую форму.
3. Убедитесь, что контакт/событие появилось в GoHighLevel workflow.
