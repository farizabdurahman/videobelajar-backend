// config/database.js
//
// LANGKAH PERTAMA: Connecting to Database
// - Library yang dipakai untuk menghubungkan Node.js ke MySQL: "mysql2"
// - Konfigurasi diambil dari .env (host, user, password, port, database name)

require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Cek koneksi saat server pertama kali dijalankan
pool.getConnection()
    .then((connection) => {
        console.log("✅ Database connected successfully");
        connection.release();
    })
    .catch((err) => {
        console.error("❌ Database connection failed:", err.message);
    });

module.exports = pool;
