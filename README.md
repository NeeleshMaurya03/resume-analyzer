# **AI Resume Analyzer** 🚀  
**Developed by Neelesh Maurya**  

---

## **📌 About the Project**
A web-based **AI Resume Analyzer** that extracts **key information** from resumes using **Natural Language Processing (NLP)**. It clusters skills into different job sectors and provides **recommendations, predictions, and analytics** to help applicants improve their resumes.  

### **🎯 Scope of the Project**
✅ Converts resumes into **structured tabular format** for organizations.  
✅ Provides **resume feedback, skill recommendations, and job role predictions**.  
✅ Helps colleges analyze students' resumes **before placements**.  
✅ Generates **analytics on job trends** based on uploaded resumes.  
✅ Collects **user feedback** to continuously improve the tool.  

---

## **🛠 Tech Stack**
### **Frontend (React)**
- React.js  
- Tailwind CSS (via Play CDN)  
- Chart.js (for analytics & graphs)  
- Axios (for API communication)  

### **Backend (Node.js & Express)**
- Express.js (REST API)  
- JSON Web Token (JWT) Authentication  
- Multer (for file uploads)  
- pdf-parse (for extracting text from resumes)  
- NLP Libraries (`natural`, `compromise`)  

### **Database (MySQL)**
- MySQL Database  
- MySQL2 (for database connectivity)  

---

## **💡 Features**
### **🧑‍💻 Client (User Side)**
✔ Fetch **location & miscellaneous** data from resume.  
✔ Extracts **Basic Info, Skills, Keywords** using **NLP**.  
✔ Provides recommendations on:  
   - **Skills to add**  
   - **Predicted job role**  
   - **Courses & certificates to pursue**  
   - **Resume improvement tips**  
✔ Assigns an **Overall Resume Score**.  
✔ Shows **Interview & Resume Tip Videos**.  

### **👨‍💼 Admin Dashboard**
✔ View **all applicants' data in a structured table**.  
✔ **Download user data as CSV**.  
✔ Manage uploaded **resumes (PDFs stored in a folder)**.  
✔ Collect & analyze **user feedback and ratings**.  
✔ **Visual Analytics (Pie Charts) on**:  
   - Ratings Distribution  
   - Predicted Job Roles  
   - Experience Levels  
   - Resume Scores  
   - User Count by **City, State, and Country**  

### **📝 Feedback System**
✔ **User rating (1 – 5)**.  
✔ **Feedback form** submission.  
✔ **Overall ratings (pie chart visualization)**.  
✔ **View past user comments**.  

---

## **🔐 Authentication for Admin**
-## 🔑 Setup Admin User

### 1️⃣ Copy the hashed password printed in the terminal.

### 2️⃣ Insert Admin User into MySQL
```sql
INSERT INTO admins (username, password) VALUES ("admin", "paste_your_hashed_password_here");
```
🔹 Replace `paste_your_hashed_password_here` with the actual hashed password.

---

## ⚠ Known Issues & Fixes

### 1️⃣ Error: "No routes matched location /"
✅ Fix: Ensure `App.js` has a default route:

```jsx
<Routes>
  <Route path="/" element={<Navigate to="/admin-login" />} />
</Routes>
```

### 2️⃣ MySQL Authentication Error (ER_NOT_SUPPORTED_AUTH_MODE)
✅ Fix: Run the following in MySQL:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
FLUSH PRIVILEGES;
```

---

## 🛣 Roadmap

### 🚀 Future Enhancements:
- 🔹 Predict User Experience Level
- 🔹 Improve Resume Scoring Algorithm
- 🔹 Expand Recommendations for More Roles (Web, Android, iOS, Data Science, etc.)
- 🔹 Allow Viewing of Individual User Resumes

---

## 🤝 Contributing
Pull requests are welcome! If you want to improve this project, feel free to contribute.

For major changes, open an issue first to discuss the changes.

---

## 📩 Contact & Support
For support, issues, or collaboration, feel free to reach out:

📧 **Email:** neeleshmaurya@example.com  
💻 **GitHub:** [Neelesh Maurya](https://github.com/NeeleshMaurya03)

---

🎉 **Thank You for Using AI Resume Analyzer! 🚀**
