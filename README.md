# 📊 Census Data Management & Trend Analysis 

A full-stack web application for collecting census information, storing it in a MySQL database, and generating meaningful visual analytics using modern web technologies.

Built using **React (Vite)**, **Material UI**, **Chart.js**, **Node.js**, **Express**, **Prisma ORM**, and **MySQL (XAMPP)**.

---

## 🚀 Features

### ✔ Add Census Entry
Users can submit: 
- Name  
- Gender 
- Date of Birth  
- Vaccination Status  

The entry is stored in MySQL through a Prisma-powered backend.

---

### ✔ View All Entries
A live **Material UI Table** displays all stored census entries using:

```

GET /data

```
---

### ✔ Line Chart — Vaccination Trend by Age
Visualizes:
- Vaccinated count  
- Unvaccinated count  
grouped by age.

APIs used:

```
GET /counts?is_vaccinated=true
GET /counts?is_vaccinated=false

```
---

### ✔ Bar Chart — Gender Distribution
Shows:
- Male  
- Female  
- Other  
counts per age group.

API used:

```

GET /results

---

## 🧱 Technology Stack

### **Frontend**
- React + Vite  
- Material UI (MUI)  
- Axios  
- Chart.js + react-chartjs-2  

### **Backend**
- Node.js  
- Express.js  
- Prisma ORM  
- MySQL (XAMPP)

---


---

# ⚙ Backend API Endpoints

### 1️⃣ **Test API**
```
GET /
---

### 2️⃣ **Insert Census Entry**
```
POST /vote

````
**Request Body (JSON):**
```json
{
  "name": "Akshay",
  "gender": "male",
  "birthdate": "2000-05-10",
  "is_vaccinated": true
}
````
---

### 3️⃣ **Read All Entries**

```
GET /data
```
---

### 4️⃣ **Vaccination Count (Line Chart)**

```
GET /counts?is_vaccinated=true
GET /counts?is_vaccinated=false
```
---

### 5️⃣ **Gender Distribution (Bar Chart)**

```
GET /results
```
---

## 🛠 How to Run the Project Locally

### **Backend Setup**

```
cd backend
npm install
npx prisma migrate dev
node src/index.js
```

---

### **Frontend Setup**

```
cd frontend
npm install
npm run dev
```

Visit the app at:

```
http://localhost:5173/
```

---

## 📈 Output Summary

* Census data is collected through a clean UI form
* Entries stored in MySQL via Prisma ORM
* Table displays the full dataset
* Line chart visualizes vaccination trends by age
* Bar chart visualizes gender distribution
* Fully interactive and responsive dashboard

---

## 🔮 Future Enhancements

* Edit / delete functionality
* Search & filtering tools
* User authentication (admin panel)
* Export reports (PDF / CSV)
* Improved analytics dashboard


## 🎥 Project Demonstration Video


👉 **Demo Video:** https://drive.google.com/file/d/1GDv9hyScoWLFl7_L-97hyWnwsbe_jReD/view?usp=drive_link

