# Invoice Generator API

A RESTful API server for generating and managing invoices with customizable templates.

## 🚀 Live Server

**Base URL:** `https://invoice-generator-server.vercel.app`

## 📋 API Endpoints

### Default Template Routes

Base path: `/api/template`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/template` | Get all templates |
| GET | `/api/template/:id` | Get a single template by ID |
| POST | `/api/template` | Create a new default template |

#### Example Requests

**Get All Templates**
```bash
GET https://invoice-generator-server.vercel.app/api/template
```

**Get Single Template**
```bash
GET https://invoice-generator-server.vercel.app/api/template/{template-id}
```

**Create Template**
```bash
POST https://invoice-generator-server.vercel.app/api/template
Content-Type: application/json

{
  
  "name": "Modern",
  "type": "template1",
  "previewUrl": "https://example.com/previews/modern-template.png",
  "layout": {
    "header": {
      "logo": "https://example.com/logo.png",
      "companyName": "ABC Corporation"
    },
    "body": {
      "sections": [
        {
          "title": "Invoice Details",
          "fields": ["Invoice Number", "Date", "Due Date"]
        },
        {
          "title": "Items",
          "columns": ["Description", "Quantity", "Price", "Total"]
        }
      ]
    },
    "footer": {
      "note": "Thank you for your business!"
    }
  }

}

```

### Invoice Generate Routes

Base path: `/api/invoice`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/invoice/generate` | Get all generated invoices |
| GET | `/api/invoice/generate/:id` | Get a single generated invoice by ID |
| POST | `/api/invoice/generate` | Create/generate a new invoice |
| DELETE | `/api/invoice/generate/:id` | Delete a generated invoice |

#### Example Requests

**Get All Generated Invoices**
```bash
GET https://invoice-generator-server.vercel.app/api/invoice/generate
```

**Get Single Generated Invoice**
```bash
GET https://invoice-generator-server.vercel.app/api/invoice/generate/{invoice-id}
```

**Generate New Invoice**
```bash
POST https://invoice-generator-server.vercel.app/api/invoice/generate
Content-Type: application/json

{
  "title": "Website Development",
  "invoiceNumber":"inv-11",
  "date": "2025-10-15",
  "from": {
    "companyName": "DevStudio Ltd.",
    "address": "Dhaka, Bangladesh",
    "email": "info@devstudio.com",
    "phone": "+8801700000000"
  },
  "to": {
    "clientName": "fff Tech",
    "address": "Dhaka, Bangladesh",
    "email": "xyztech@mail.com",
    "phone": "+8801900000000"
  },
  "items": [
    { "name": "UI Design", "quantity": 2, "unitPrice": 5000 },
    { "name": "Frontend Development", "quantity": 2, "unitPrice": 10000 },
    { "name": "Backend API", "quantity": 2, "unitPrice": 8000 }
  ],
  "taxRate": 10,
  "notes": "Please pay within 7 days.",
  "signatureUrl": "https://example.com/signature.png",
  "templateId": "68ee4248ed512ffacc9509c5"
}

```

**Delete Invoice**
```bash
DELETE https://invoice-generator-server.vercel.app/api/invoice/generate/id
```

## 🛠️ Technology Stack

- **Runtime:** Node.js with Express.js
- **Language:** TypeScript
- **Deployment:** Vercel
- **API Style:** RESTful

## 📦 Installation (Local Development)

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd invoice-generator-server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
DATABASE_URL=your_database_url
NODE_ENV=development
```

## 📝 Response Format

All API responses follow this structure:

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "message": "Operation failed"
}
```

## 🔒 CORS

CORS is enabled for all origins in production. Configure as needed for your use case.

## 📄 License

[Your License Here]

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact [your-email@example.com]

---

**Made with ❤️ for simplified invoice management**
