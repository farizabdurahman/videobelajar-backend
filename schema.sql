-- Contoh skema tabel "courses" (sesuaikan dengan skema yang sudah kamu buat
-- di Mission Intermediate BE 1 kalau berbeda — field di bawah aku samakan
-- dengan data yang dipakai di frontend videobelajar-app kamu)

CREATE DATABASE IF NOT EXISTS educourse_db;
USE educourse_db;

CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    job VARCHAR(150),
    rating DECIMAL(2,1) DEFAULT 0,
    reviews INT DEFAULT 0,
    price VARCHAR(50),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO courses (title, category, author, job, rating, reviews, price, image) VALUES
('Digital Marketing', 'Pemasaran', 'Colious Nourman', 'Senior Marketing di Gojek', 4.5, 37, 'Rp 321K', 'course1.png'),
('Bussiness Development', 'Bisnis', 'Idrus Dermawan', 'Senior B to B di HP Indonesia', 4.0, 99, 'Rp 357K', 'course2.png'),
('UI/UX Designer', 'Desain', 'Ahmad Daulay', 'Interaction Designer di Tiket.co', 4.1, 44, 'Rp 366K', 'course3.png');
