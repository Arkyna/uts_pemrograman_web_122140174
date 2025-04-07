# Project UTS

Proyek ini merupakan aplikasi web sederhana yes.

## Fitur Utama

- **Home Page/Landing Page:** Tampilan hero dengan input nama dan preview konten (Game, Album, Tech).
- **Routing:** Menggunakan React Router untuk navigasi antar halaman (Home, Games, Album, Tech, About).
- **Data Fetching:** Mengambil data secara dinamis dari API menggunakan environment variables.
- **Error Handling:** ErrorBoundary untuk menangani kesalahan secara graceful.
- **Responsive Design:** Menggunakan Tailwind CSS untuk tampilan responsif.
- **Animasi & Efek Visual:** Efek fade-in, animasi loading.

## Teknologi dan Library yang Digunakan

### Teknologi Utama

- **React:** Library JavaScript untuk membangun antarmuka pengguna.
- **React Router:** Mengelola routing dan navigasi antar halaman.
- **Tailwind CSS:** Framework CSS utility-first untuk styling yang cepat dan konsisten.

### Library dan Paket Pendukung

- **PropTypes:** Validasi properti yang diterima oleh komponen React.
- **Fetch API:** Digunakan untuk melakukan request data ke API, API yang digunakan MockApi.
- **React Hooks:** Seperti `useState`, `useEffect`, `useMemo`, dan `useCallback` untuk pengelolaan state dan efek samping.
- **Vite:** Bundler modern yang digunakan untuk membangun dan menjalankan aplikasi React dengan cepat.

### Tools Pengembangan

- **ESLint & Prettier:** (Opsional) Untuk menjaga konsistensi dan kualitas kode.
- **React Developer Tools:** Untuk debugging dan inspeksi komponen selama pengembangan.

## Cara Menjalankan Proyek

1. **Instal Dependensi:**

   Pastikan Node.js telah terinstall, lalu jalankan:
   ```bash
   npm install

2. **Jalankan Proyek Secara Lokal:**

   Jalankan:
   ```bash
   npm run dev

3. **Build Proyek untuk Produksi:**

   Jalankan:
   ```bash
   npm run build
