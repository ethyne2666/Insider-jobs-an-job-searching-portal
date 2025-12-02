# 🚀 Insider Jobs – Job Posting & Job Search Platform (MERN + Clerk)

Insider Jobs is a full-stack job portal built using the **MERN stack** with modern authentication powered by **Clerk**.  
It allows **companies** to post and manage job listings, and lets **job seekers** apply, upload resumes, and track their job applications.

This project replicates real-world functionality similar to platforms like Naukri, Indeed, and LinkedIn Jobs.

---

## 🛠️ Tech Stack

### **Frontend**
- React.js
- Tailwind CSS
- React Router
- Clerk Authentication (User Login/Signup)
- Axios
- React Toastify
- Moment.js (formatting dates)

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Cloudinary (Resume upload)
- Clerk Webhooks (sync user data)
- JWT auth (for company accounts)
- CORS + dotenv
- Sentry (optional error monitoring)

### **Deployment**
- **Frontend** → Vercel  
- **Backend** → Render / Node hosting  
- **Database** → MongoDB Atlas  
- **Assets/Files** → Cloudinary  

---

## ✨ Features

### ⭐ **For Job Seekers (Users)**

#### 🔐 Authentication (Clerk)
- Login/Signup using Clerk
- Secure, token-based API access
- User synced with backend via Clerk Webhooks

#### 🔍 Job Search
- Browse all jobs (no login required)
- Search by job title, category, location
- View job details

#### 📄 Resume Management
- Upload resume (PDF)
- Update resume directly from applications page

#### 📝 Apply for Jobs
- View job details
- Apply with 1 click
- Prevent duplicate applications

#### 📊 Application Tracking
- View all applied jobs
- See application date
- View job status:
  - Pending  
  - Accepted  
  - Rejected  

---

### ⭐ **For Companies (Recruiters)**

#### 🔐 Company Authentication (Custom JWT)
- Company login/signup
- JWT token stored in localStorage
- Auth-protected routes

#### 📌 Company Dashboard Routes

| Route | Description |
|-------|-------------|
| `/dashboard` | Main company dashboard |
| `/dashboard/add-job` | Add new job listing |
| `/dashboard/manage-jobs` | Edit/Delete posted jobs |
| `/dashboard/view-applications` | See all users who applied |

#### 📢 Job Posting Features
- Create job listings with:
  - Title
  - Description (Quill rich editor)
  - Location
  - Category
  - Salary
  - Job level (intern, junior, senior)
- Upload company logo
- Manage all posted jobs

#### 📥 Candidate Management
- View all job applicants
- Access resume links
- View applicant profile/Clerk details

---

## 🌐 Project Pages Overview

### 🔵 **Public Pages (No login required)**
| Page | Path |
|------|------|
| Home | `/` |
| Job Details | `/apply-job/:id` |

### 🟢 **User Pages (Clerk Login Required)**
| Page | Path |
|------|------|
| Apply Job | `/apply-job/:id` |
| Applied Jobs | `/applications` |
| Resume Upload | `/applications` |

### 🔴 **Company Dashboard (Company Login Required)**
| Page | Path |
|------|------|
| Dashboard Home | `/dashboard` |
| Add Job | `/dashboard/add-job` |
| Manage Jobs | `/dashboard/manage-jobs` |
| View Applications | `/dashboard/view-applications` |

---

## 🧩 Project Architecture

