# 🌸 Portfolio-ku

Website portofolio sederhana dengan penerapan **virtualisasi dan containerization** menggunakan Docker.

## 🚀 Cara Menjalankan di Lokal

```bash
docker build -t portfolio-ku .
docker run -d -p 8080:80 portfolio-ku
```

Akses di browser: [http://localhost:8080](http://localhost:8080)

## ☁️ Deploy ke Cloud
Kamu bisa menggunakan layanan seperti:
- [Render](https://render.com)
- [Railway](https://railway.app)
- [GitHub Pages (tanpa Docker) disini saya menggunakan github pages]
- [Netlify (untuk versi statis)]

## 📁 Struktur Folder
```
portfolio-ku/
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```
