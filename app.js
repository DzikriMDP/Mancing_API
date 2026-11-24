const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint utama
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Mancing API berhasil dijalankan',
    data: {
      application: 'Mancing API',
      version: '1.0.0'
    }
  });
});

// Endpoint jika route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint tidak ditemukan',
    data: null
  });
});

module.exports = app;
