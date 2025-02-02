import express from "express";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Save Editor Data
app.post("/save", (req, res) => {
    const { path: dirPath, name } = req.query;

    if (!dirPath || !name) {
        return res.status(403).json({ message: "path and name are required" });
    }

    const safePath = path.resolve(__dirname, dirPath);

    if (!fs.existsSync(safePath)) {
        fs.mkdirSync(safePath, { recursive: true });
    }

    const filePath = path.join(safePath, `${name}.json`);
    const data = JSON.stringify(req.body, null, 2);

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("Error saving file:", err);
            return res.status(500).json({ error: "Failed to save file" });
        }
        res.json({ message: "File saved successfully", path: filePath });
    });
});

// ✅ Load Editor Data (New API)
app.get("/load", (req, res) => {
    const { path: dirPath, name } = req.query;

    if (!dirPath || !name) {
        return res.status(403).json({ message: "path and name are required" });
    }

    const filePath = path.resolve(__dirname, dirPath, `${name}.json`);
    if (!fs.existsSync(filePath)) {
        return res.json({ message: "No saved data found", data: null });
    }

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Failed to read file" });
        }
        res.json({ message: "File loaded successfully", data: JSON.parse(data) });
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
