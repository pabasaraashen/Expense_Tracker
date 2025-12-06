# Expense Tracker

A full-stack web application for managing personal finances with real-time expense and income tracking, interactive visualizations, and cloud-based data persistence.

## 🌟 Features

- **Dashboard**: Real-time overview with income/expense charts, recent transaction history, and balance calculation
- **Transaction Management**: Add, view, and delete income and expense transactions
- **Category-Based Tracking**: Organize transactions by custom categories
- **Interactive Charts**: Doughnut chart visualization using Chart.js
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Real-Time Updates**: Instant data synchronization across all pages
- **Cloud Database**: MongoDB Atlas for secure data storage
- **RESTful API**: Clean API architecture with proper error handling

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.6** - Build tool
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client
- **React Router v6** - Client-side routing
- **Chart.js & react-chartjs-2** - Data visualization

### Backend
- **Node.js v22** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose v9** - ODM library
- **dotenv** - Environment configuration
- **nodemon** - Development tool

## 📋 Prerequisites

- Node.js v22 or higher
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Git

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/pabasaraashen/Expense_Tracker.git
cd Expense_Tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/expense_tracker
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173` (or next available port)

## 📚 API Endpoints

### Income
- `GET /api/v1/get-incomes` - Fetch all incomes
- `POST /api/v1/add-income` - Create new income
- `DELETE /api/v1/delete-income/:id` - Delete income by ID

### Expense
- `GET /api/v1/get-expenses` - Fetch all expenses
- `POST /api/v1/add-expense` - Create new expense
- `DELETE /api/v1/delete-expense/:id` - Delete expense by ID

### Request/Response Format

**Add Income/Expense:**
```json
POST /api/v1/add-income
{
  "title": "Salary",
  "amount": 5000,
  "date": "2025-12-06",
  "category": "Work",
  "description": "Monthly salary"
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Salary",
  "amount": 5000,
  "date": "2025-12-06",
  "category": "Work",
  "description": "Monthly salary",
  "createdAt": "2025-12-06T10:30:00Z"
}
```

## 📁 Project Structure

```
Expense_Tracker/
├── backend/
│   ├── app.js                 # Express app setup
│   ├── package.json
│   ├── .env                   # Environment variables
│   ├── db/
│   │   └── db.js             # MongoDB connection
│   ├── controllers/
│   │   ├── income.js         # Income controller
│   │   └── expense.js        # Expense controller
│   ├── models/
│   │   ├── incomeModel.js    # Income schema
│   │   └── ExpenseModel.js   # Expense schema
│   └── routes/
│       └── transactions.js   # Transaction routes
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx
│   │   ├── index.css         # Global styles
│   │   ├── api.js            # Axios API client
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── IncomeForm.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── TransactionsList.jsx
│   │   │   └── DashboardChart.jsx
│   │   └── pages/
│   │       ├── DashboardPage.jsx
│   │       ├── IncomesPage.jsx
│   │       ├── ExpensesPage.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🎨 Pages

1. **Dashboard** - Overview with recent transactions, balance, and charts
2. **Incomes** - Add and manage income transactions
3. **Expenses** - Add and manage expense transactions
4. **Transactions** - View all transactions in one place

## 🔐 Validation

- All transaction fields are required: `title`, `amount`, `date`, `category`, `description`
- Amount must be a valid number
- Date must be in valid date format
- Category and description cannot be empty

## 📱 Responsive Breakpoints

- Mobile: < 600px
- Tablet: 600px - 900px
- Desktop: > 900px

## 🎯 Key Features Explained

### Real-Time Dashboard
- Displays total income, total expense, and balance
- Shows recent 10 transactions merged from both income and expenses
- Interactive doughnut chart showing income vs expense ratio

### Transaction Management
- Dedicated pages for income and expenses
- Form validation with required fields
- Delete functionality with immediate UI update
- Transaction list with date, amount, and delete options

### Data Persistence
- All data stored in MongoDB Atlas cloud database
- Automatic data synchronization across all pages
- Persistent storage across browser sessions

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist folder
```

### Backend (Heroku/Railway/Render)
```bash
# Set environment variables in deployment platform
# Deploy the backend directory
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Pabasara Ashen**
- GitHub: [@pabasaraashen](https://github.com/pabasaraashen)

## 🙌 Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

## 📧 Contact

For questions or suggestions, feel free to reach out or open an issue on the repository.

---

**Happy Expense Tracking! 💰**


