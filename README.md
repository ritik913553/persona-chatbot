

# [Persona-Chatbot](https://persona-chatbot-k3sy.onrender.com/)


Persona-AI is an interactive AI chatbot application with a sleek and animated frontend built using React and Framer Motion, and a powerful backend powered by Node.js and Express. This project allows users to interact with AI personas in real-time, offering a dynamic and engaging chat experience.

## Visuals Of Chatbot


### chat with Hitesh Sir
<img width="1398" height="905" alt="Screenshot from 2025-08-15 10-02-13" src="https://github.com/user-attachments/assets/5ad2007f-5b22-481f-8c32-d596a815471e" />

### chat with Piyush sir
<img width="1192" height="627" alt="Screenshot from 2025-08-15 13-20-13" src="https://github.com/user-attachments/assets/66ec1bbd-88c8-4dbf-8770-8c7aebe53478" />

### home page interface
<img width="1566" height="922" alt="Screenshot from 2025-08-15 10-02-25" src="https://github.com/user-attachments/assets/a58bf2b8-818d-4053-9f52-6fd25c5f8c7d" />





## 📁 Folder Structure

```
PERSONA-AI
│
├── backend
│   ├── controllers      # API route handlers
│   ├── service
│   │   ├── chatbot.service.js   # Main chatbot logic
│   │   └── system-prompt.js     # Predefined prompts / persona logic
│   ├── app.js            # Express server entry point
│
├── frontend              # React frontend application
│
├── node\_modules          # Node dependencies
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
└── package-lock.json

````

---

## ⚙️ Tech Stack

- **Frontend:** React, Framer Motion (for smooth animations)
- **Backend:** Node.js, Express
- **Styling:** Tailwind CSS (optional if used) / Custom CSS
- **Others:** dotenv for environment variables

---

## 🚀 Features

- Interactive AI chat interface
- Animated UI with Framer Motion
- Customizable AI personas using `system-prompt.js`
- Modular backend structure for scalability

---

## 💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/ritik913553/persona-chatbot.git
cd persona-chatbot
````

2. Install dependencies for backend:

```bash
cd backend
npm install
```

3. Install dependencies for frontend:

```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the `backend` folder and add your environment variables (e.g., API keys):

```
PORT=3000
OPENAI_API_KEY=your_openai_api_key
```

---

## 🔧 Running the Project

### Backend

```bash
cd backend
npm run dev
```

The server should run on `http://localhost:3000`.

### Frontend

```bash
cd frontend
npm run dev
```

The React app should run on `http://localhost:5173`.

---

## 📌 Usage

* Open your browser at `http://localhost:5173`.
* Interact with your AI persona in real-time.
* Customize AI prompts in `backend/service/system-prompt.js`.

---

## 📦 Deployment

* The application is deployed on **Render**.
* The backend serves the frontend as static files.
* Set your environment variables in Render before deploying.
* Push your code to your repository and create a new **Web Service** on Render pointing to your backend. Render will automatically build and deploy the app.

---

## 🤝 Contributing

Contributions are welcome! You can:

* Add more AI personas
* Improve animations with Framer Motion
* Add new features to the chat system

---



## 🔗 Links
https://persona-chatbot-k3sy.onrender.com/





