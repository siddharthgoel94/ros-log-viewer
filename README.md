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

Access backend repository here: https://github.com/siddharthgoel94/ros-log-viewer-backend
Follow the instructions to setup backend as well
(The backend repsonse might take a longer time to load while testing as Render spins down an application if its inactive)

## Screenshots
<img width="1289" alt="Screenshot 2024-12-15 at 2 36 17 PM" src="https://github.com/user-attachments/assets/c3345b34-e699-4174-b61e-546816f229ee" height="50%" width="50%" />
<img width="1289" alt="Screenshot 2024-12-15 at 2 36 25 PM" src="https://github.com/user-attachments/assets/38504836-9abc-4bd1-9957-e846ba8153ef" />



