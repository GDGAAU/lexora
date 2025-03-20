require('dotenv').config();
const { google } = require('googleapis');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Authenticate with Google Drive API using Application Default Credentials
const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });

// API to list files with view and download links
app.get('/organicchemistry', async (req, res) => {
  try {
    const folderId = process.env.FOLDER_ID;
    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: 'files(id, name, webViewLink, webContentLink)',
    });
    res.json(response.data.files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
