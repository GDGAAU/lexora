import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/organicchemistry")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch files");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setFiles(data);
        } else {
          throw new Error("Unexpected data format");
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>

      
        <h2>Google Drive Files</h2>
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              <strong>{file.name}</strong> <br />
              <a
                href={file.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>{" "}
              |{" "}
              <a href={file.webContentLink} download>
                Download
              </a>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default FileList;
