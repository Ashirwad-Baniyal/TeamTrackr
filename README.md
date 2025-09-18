# 🚀 TeamTrackr 

A **role-based task management application** built with React.  
- 👨‍💼 **Admin** → Create and manage tasks for employees.  
- 👨‍💻 **Employee** → Log in to view, track, and manage assigned tasks.  

---

## ✨ Features
- 🔑 Role-based Authentication (Admin / Employee)  
- 📌 Persistent login using LocalStorage  
- 🖥️ Separate Dashboards for Admin & Employee  
- 📋 Task creation, assignment, and tracking  
- 📊 Employee task statistics overview  
- 🎨 Minimal, modern UI with Tailwind CSS  

---

## 📂 Project Structure
src/
│── App.jsx
│
├── components/
│ ├── auth/
│ │ └── Login.jsx
│ │
│ ├── Dashboard/
│ │ ├── AdminDashboard.jsx
│ │ └── EmployeeDashboard.jsx
│ │
│ ├── other/
│ │ ├── AllTask.jsx
│ │ ├── CreateTask.jsx
│ │ ├── Header.jsx
│ │ └── TLNum.jsx
│ │
│ └── TaskList/
│ ├── AcceptTask.jsx
│ ├── CompleteTask.jsx
│ ├── FailedTask.jsx
│ ├── NewTask.jsx
│ └── TaskList.jsx
│
├── context/
│ └── AuthProvider.jsx
│
├── pages/ # (future page routes if needed)
│
└── utils/
└── localStorage.js # LocalStorage helpers

## 🔑 Default Login Credentials

### Admin Account
- **Email:** admin@me.com  
- **Password:** 123  

### Employee Accounts
- Preloaded into `localStorage` (can be customized in `AuthProvider.jsx`).  

## 🖥️ Usage Workflow
1. 🔐 Login as **Admin** or **Employee**.  
2. 👨‍💼 **Admin Dashboard** → Create & assign tasks.  
3. 👨‍💻 **Employee Dashboard** → View tasks, stats, and progress.  
4. 🚪 Logout securely when done.  

## 📸 Screenshots
<img width="502" height="439" alt="Login" src="https://github.com/user-attachments/assets/6741a2bf-c4c5-440a-a17b-f9c511153b2a" />
<img width="941" height="324" alt="admin1" src="https://github.com/user-attachments/assets/dd43635a-9b8e-4652-ac1c-a6c09c8dde13" />
<img width="923" height="439" alt="user" src="https://github.com/user-attachments/assets/921e4d19-fd6b-4ac2-b6c1-677fa88543f6" />


## 📌 Future Enhancements
- ✅ Backend integration with Node.js / Express  
- ✅ JWT-based authentication system  
- ✅ Database support (MongoDB / PostgreSQL)  
- ✅ Real-time task updates via WebSockets  
- ✅ Mobile responsive design  
