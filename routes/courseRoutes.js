// routes/courseRoutes.js
//
// LANGKAH KETIGA: Implementing REST API
// Endpoint di sini mengikuti tabel referensi "EduCourse App":
//   GET    /course        -> list semua courses
//   GET    /course/:id    -> tampilkan satu course by id
//   PATCH  /course/:id    -> ubah data course by id
//   DELETE /course/:id    -> hapus data course by id
//   POST   /course        -> tambah data course

const express = require("express");
const router = express.Router();
const courseService = require("../services/courseService");

// GET /course -> list semua courses/kelas
router.get("/", async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json({ success: true, data: courses });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /course/:id -> tampilkan satu course berdasarkan id
router.get("/:id", async (req, res) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, message: "Course tidak ditemukan" });
        }
        res.status(200).json({ success: true, data: course });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PATCH /course/:id -> ubah data course berdasarkan id (payload sesuai data yang diubah)
router.patch("/:id", async (req, res) => {
    try {
        const updated = await courseService.updateCourse(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ success: false, message: "Course tidak ditemukan" });
        }
        res.status(200).json({ success: true, message: "Course berhasil diubah" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// DELETE /course/:id -> hapus data course berdasarkan id
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await courseService.deleteCourse(req.params.id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Course tidak ditemukan" });
        }
        res.status(200).json({ success: true, message: "Course berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST /course -> tambahkan data course baru
router.post("/", async (req, res) => {
    try {
        const newCourse = await courseService.insertCourse(req.body);
        res.status(201).json({ success: true, message: "Course berhasil ditambahkan", data: newCourse });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
