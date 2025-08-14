import express from "express";
import "dotenv/config";
import { getChat } from "./controllers/chat.controller.js";
import cors from "cors";
import path from "path";
import fs from "fs";


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post("/api/chat", getChat);

if (process.env.NODE_ENV === "production") {
    const dirPath = path.resolve();
    app.use(express.static("./frontend/dist"));
    app.get("", (req, res) => {
        res.sendFile(path.resolve(dirPath, "./frontend/dist", "index.html"));
    });
}



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
