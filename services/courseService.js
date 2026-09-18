// services/courseService.js
// Implementing Data Manipulation Language (DML)
// Semua query ke database (SELECT, UPDATE, DELETE, INSERT) dikumpulkan
// di sini sebagai "service". Route hanya memanggil fungsi-fungsi ini,
// tidak menulis query SQL langsung.

const db = require("../config/database");

// 1a. SELECT * -> ambil semua data
const getAllCourses = async () => {
    const [rows] = await db.query("SELECT * FROM courses");
    return rows;
};

// 1b. SELECT by id -> ambil satu data berdasarkan id
const getCourseById = async (id) => {
    const [rows] = await db.query("SELECT * FROM courses WHERE id = ?", [id]);
    return rows[0] || null;
};

// 2. UPDATE -> ubah data secara spesifik (by id)
const updateCourse = async (id, data) => {
    const { title, category, author, job, rating, reviews, price, image } = data;
    const [result] = await db.query(
        `UPDATE courses
         SET title = ?, category = ?, author = ?, job = ?, rating = ?, reviews = ?, price = ?, image = ?
         WHERE id = ?`,
        [title, category, author, job, rating, reviews, price, image, id]
    );
    return result.affectedRows > 0;
};

// 3. DELETE -> hapus data secara spesifik (by id)
const deleteCourse = async (id) => {
    const [result] = await db.query("DELETE FROM courses WHERE id = ?", [id]);
    return result.affectedRows > 0;
};

// 4. INSERT -> tambahkan data baru
const insertCourse = async (data) => {
    const { title, category, author, job, rating, reviews, price, image } = data;
    const [result] = await db.query(
        `INSERT INTO courses (title, category, author, job, rating, reviews, price, image)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, category, author, job, rating, reviews, price, image]
    );
    return { id: result.insertId, ...data };
};

module.exports = {
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    insertCourse,
};
