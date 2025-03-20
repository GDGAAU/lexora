const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Ensure the key file exists
const keyPath = path.join(__dirname, './durable-student-433709-v7-9b1c0eee570b.json');
if (!fs.existsSync(keyPath)) {
  console.error('Service account key file not found! Make sure the path is correct.');
  process.exit(1);
}

// Authenticate with Google Drive API
const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });

// API to list files with view and download links
app.get('/organicchemistry', async (req, res) => {
  try {
    const folderId = '1qTdlfs3lJTe8QIgsYBc9be93dQ9KGEkc'; // Your Google Drive Folder ID
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
