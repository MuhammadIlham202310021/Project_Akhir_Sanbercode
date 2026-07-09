# Automation Testing Project

## Deskripsi

Project ini digunakan sebagai proyek akhir di Bootcamp Quality Assurance di Sanbercode. Ini merupakan automation testing pada web https://opensource-demo.orangehrmlive.com/ dengan mengunakan Cypress 

## Teknologi yang Digunakan

* Cypress

## Struktur Folder

```text
project-root/
├── cypress/
│   ├── e2e/
│       ├── orangeHRM/
│           ├── Dashboard_Directory/
│           ├── Forgot_Password/
│           ├── Login/
|   ├── pom/
│       ├── dashboard_directory/
│       ├── forgot_password/
│       ├── login/
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
&
npx cypress install
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

ILHAM_IL
