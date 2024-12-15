# React Frontend for Log Management System

## **Description**
This is the frontend of the log management system, built using React and Material-UI. It provides an interface for uploading log files, filtering logs, and interacting with the backend.

---

## **Features**
- Upload log files to the backend.
- Live filtering of logs based on severity and keyword.
- Download filtered logs from the backend.
- A responsive and user-friendly UI with Material-UI components.

---

## **Setup Instructions**

### 1. **Clone the Repository**
```bash
git clone https://github.com/siddharthgoel94/ros-log-viewer
```
### 2. **Install Dependencies**
```bash
npm install
```
### 3. **Setup Environment Variables**
- Navigate to .env.example for a sample .env file 
- Create a .env file
- Add loalhost:8000 as a backend URL there
```bash
VITE_BACKEND_URL_MAIN=http://localhost:8000
```
### 4. **Start the development Server**
```bash
npm run dev
```
### 5. **Access frontend URL**
- The application will be available at:
```bash
http://localhost:5173
```

## Dependencies
- React: For building the user interface.
- Material-UI (MUI): For styling and components.
- Axios: For making HTTP requests to the backend.
