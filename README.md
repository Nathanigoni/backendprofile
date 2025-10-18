# Backend Wizards Stage 0 — Dynamic Profile API 🧙‍♂️🐱

## Overview
This project implements a RESTful endpoint `/me` that returns my profile data and a random cat fact fetched dynamically from the Cat Facts API.

---

## 🔗 Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "usnow02@gmail.com",
    "name": "Nathan Igey Igoni",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T21:10:34.123Z",
  "fact": "Cats sleep for 70% of their lives."
}
```
🧠 Technologies

Node.js

Express.js

Axios

CORS