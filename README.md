# Automation Testing Project

## Deskripsi

Project ini digunakan untuk melakukan automation testing pada aplikasi menggunakan Cypress.

## Teknologi yang Digunakan

* Node.js
* Cypress
* JavaScript

## Struktur Folder

```text
project-root/
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
├── cypress.config.js
├── package.json
└── README.md
```

## Persyaratan

Pastikan telah terinstall:

* Node.js versi 18 atau lebih baru
* NPM

## Instalasi

Clone repository:

```bash
git clone https://github.com/username/nama-repository.git
```

Masuk ke folder project:

```bash
cd nama-repository
```

Install dependency:

```bash
npm install
```

## Menjalankan Cypress

### Membuka Cypress Test Runner

```bash
npx cypress open
```

### Menjalankan Test Headless

```bash
npx cypress run
```

### Menjalankan Test pada Browser Chrome

```bash
npx cypress run --browser chrome
```

## Menjalankan Aplikasi yang Diuji

Jika automation test memerlukan aplikasi yang sedang berjalan:

```bash
npm run dev
```

atau

```bash
npm start
```

Kemudian jalankan Cypress pada terminal yang berbeda.

## Test Case

Seluruh test case berada pada folder:

```text
cypress/e2e
```

Contoh:

```text
cypress/e2e/login.cy.js
cypress/e2e/dashboard.cy.js
```

## Catatan

* Pastikan URL aplikasi sesuai dengan konfigurasi pada `cypress.config.js`.
* Pastikan koneksi database atau environment yang dibutuhkan sudah tersedia sebelum menjalankan test.

## Author

Nama Anda
