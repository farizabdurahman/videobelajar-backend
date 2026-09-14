// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Semua endpoint course diawali dengan /course, sesuai tabel referensi
app.use("/course", courseRoutes);

app.get("/", (req, res) => {
    res.send("EduCourse API is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
