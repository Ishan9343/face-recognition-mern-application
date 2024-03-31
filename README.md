# Face-Recognition-Web-Application

A MERN web application that captures live webcam data and employs face recognition technology to identify and tag faces in the webcam feed not only showcases proficiency in full-stack development but also a deep understanding of AI integration and machine learning.


## Features
- **Face recognition and verification (Login/Register)**
- **Responsive and user-friendly frontend interface**
- **Integration of frontend with backend APIs**
- **Robust error handling mechanisms.**
- **Documentation for setup and running the application.**


## Minor features:

- Computation of Euclidean distance and Manhattan distance on `Labeled Faces in the Wild` dataset.
- Evaluation of false positive and false negative matching.


## Technologies Used:

Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript (React.js)
Database: MongoDB
Authentication: JWT


## System Requirements

- **ReactJs** 
- **NODE.JS** 
- **Faceapi.js**  (run command npm install)
- **NPM**
- **MongoDB**


## Installation

open folder in IDE (Recommanded: VS Code).

Install frontend dependencies
cd frontend_app
or
cd ~/path/to/your/face-recognition-auth-reactjs/frontend_app 

npm install
npm start

Install backend dependencies
cd backend_app
or
cd ~/path/to/your/face-recognition-auth-reactjs/backend_app 

npm install
npm start

Configure `.env` file

cp .env.example .env
API_PORT=3001
FRONTEND_URL='http://localhost:3000'
MONGO_URI='mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.bckok.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority'


## Security measures

Validations
Password hashing


## Acknowledgements:

Docs of Reactjs, Nodejs, Tailwind.css and MongoDb Atlas Web Application guide.

                                                                Submitted by: Ishan Chauhan 