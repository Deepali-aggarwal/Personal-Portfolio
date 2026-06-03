# Portfolio Backend API

This is a clean, production-ready REST API built with Node.js, Express, and TypeScript. It handles contact form submissions, validates payloads, manages structured JSON data exchange, and implements global error handling.

## Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Validation**: express-validator
- **Development Tooling**: ts-node-dev

---

## API Endpoints

### 1. Health Check
Checks if the backend service is up and running.

* **URL**: `/api/health`
* **Method**: `GET`
* **Response**: `200 OK`
  ```json
  {
    "success": true,
    "status": "UP",
    "timestamp": "2026-06-02T17:46:17.000Z",
    "service": "portfolio-backend-api"
  }
  ```

---

### 2. Submit Contact Message
Saves a message sent from the portfolio contact form.

* **URL**: `/api/contact`
* **Method**: `POST`
* **Headers**: `Content-Type: application/json`
* **Request Body Schema**:
  ```json
  {
    "name": "John Doe",          // Required, string, 2-100 characters
    "email": "john@example.com", // Required, valid email string
    "subject": "Collaboration",  // Optional, string, max 200 characters
    "message": "Hi Deepali..."   // Required, string, 10-2000 characters
  }
  ```

* **Success Response**: `201 Created`
  ```json
  {
    "success": true,
    "message": "Thank you! Your message has been received successfully.",
    "data": {
      "id": "e83kd92",
      "createdAt": "2026-06-02T17:46:17.000Z"
    }
  }
  ```

* **Error Responses**:
  * **400 Bad Request** (Validation Error):
    ```json
    {
      "success": false,
      "status": 400,
      "message": "Validation failed",
      "errors": [
        {
          "type": "field",
          "value": "",
          "msg": "Name is required",
          "path": "name",
          "location": "body"
        }
      ]
    }
    ```

---

### 3. Get Submissions (Admin)
Retrieves all submitted messages.

* **URL**: `/api/contact`
* **Method**: `GET`
* **Response**: `200 OK`
  ```json
  {
    "success": true,
    "count": 1,
    "data": [
      {
        "id": "e83kd92",
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Collaboration",
        "message": "Hi Deepali...",
        "createdAt": "2026-06-02T17:46:17.000Z"
      }
    ]
  }
  ```

---

## Getting Started

### Installation
Run npm install in this folder to install dependencies:
```bash
npm install
```

### Run in Development Mode
Starts the server with hot-reloading at http://localhost:5000:
```bash
npm run dev
```

### Build for Production
Compiles TypeScript to raw JavaScript in the `dist` directory:
```bash
npm run build
```

### Start Production Server
Runs the compiled JS code:
```bash
npm run start
```
