# EduCourse Backend (Node.js + Express + MySQL)

Backend REST API sederhana untuk aplikasi "EduCourse App", mengikuti 4 langkah mission:
1. Connecting to Database
2. Implementing DML (SELECT, UPDATE, DELETE, INSERT)
3. Implementing REST API
4. Testing pakai Postman

## Struktur folder

```
educourse-backend/
├── config/
│   └── database.js      # Langkah 1: koneksi ke MySQL
├── services/
│   └── courseService.js # Langkah 2: query DML (SELECT/UPDATE/DELETE/INSERT)
├── routes/
│   └── courseRoutes.js  # Langkah 3: endpoint REST API
├── schema.sql            # contoh skema tabel courses + seed data
├── server.js              # entry point Express
└── .env.example
```

## Cara menjalankan

1. Install dependency:
   ```
   npm install
   ```
2. Duplikat `.env.example` jadi `.env`, isi sesuai konfigurasi MySQL kamu
   (host, username, password, port, database name).
3. Buat database & tabel dengan menjalankan `schema.sql` di MySQL
   (bisa lewat MySQL Workbench, phpMyAdmin, atau CLI `mysql -u root -p < schema.sql`).
   Kalau kamu sudah punya skema dari Mission Intermediate BE 1, pakai skema itu saja —
   tinggal sesuaikan nama kolom di `courseService.js` dan `routes/courseRoutes.js`.
4. Jalankan server:
   ```
   npm run dev
   ```
   Server akan jalan di `http://localhost:3000`.

## Testing dengan Postman (Langkah 4)

Buat 5 request berikut di Postman:

| Method | URL                          | Body (raw JSON)                                                                 |
|--------|------------------------------|----------------------------------------------------------------------------------|
| GET    | http://localhost:3000/course       | -                                                                                 |
| GET    | http://localhost:3000/course/1     | -                                                                                 |
| POST   | http://localhost:3000/course       | `{ "title": "Node.js Basic", "category": "Bisnis", "author": "Budi", "job": "Backend Dev", "rating": 4.5, "reviews": 10, "price": "Rp 200K", "image": "course9.png" }` |
| PATCH  | http://localhost:3000/course/1     | `{ "title": "Digital Marketing Updated", "category": "Pemasaran", "author": "Colious Nourman", "job": "Senior Marketing di Gojek", "rating": 4.7, "reviews": 40, "price": "Rp 350K", "image": "course1.png" }` |
| DELETE | http://localhost:3000/course/2     | -                                                                                 |

Untuk tiap request, cek:
- Status code sesuai (200 untuk GET/PATCH/DELETE, 201 untuk POST, 404 kalau id tidak ada).
- Response body berisi data yang benar.
- Data benar-benar berubah di database setelah POST/PATCH/DELETE (cek ulang lewat GET).

## Menghubungkan ke frontend videobelajar-app

Frontend kamu (React) sekarang masih konsumsi MockAPI lewat
`VITE_API_BASE_URL` di `.env`. Setelah backend ini jalan, ganti nilainya
ke `http://localhost:3000` dan sesuaikan endpoint di `courseService.js`
frontend (`/courses` -> `/course`, method `PUT` -> `PATCH`) supaya cocok
dengan backend ini.
