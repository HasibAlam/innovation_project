import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuditPage = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #2C001E, #190033)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Times New Roman, serif',
        fontSize: '24px',
      }}
    >
      <h1 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Submit Your Audit</h1>
      <div
        className="container"
        style={{
          maxWidth: '800px',
          width: '100%',
          padding: '40px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <form action="Audit.php" method="post">
          <label style={{ marginBottom: '20px', display: 'block' }}>Name:</label>
          <input
            type="text"
            name="name"
            maxLength="20"
            required
            pattern="[A-Za-z0-9 ,.!]+"
            title="name"
            style={{ marginBottom: '40px', width: '100%' }}
          />

          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            maxLength="40"
            required
            pattern="[A-Za-z0-9 ,.!]+"
            title="Max 20 alphanumeric characters, spaces, comma, period, exclamation point"
            style={{ marginBottom: '40px', width: '100%' }}
          />

          <label>Description:</label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            maxLength="250"
            required
            style={{ marginBottom: '40px', width: '100%' }}
          ></textarea>

          <label>Date:</label>
          <input type="date" name="date" required style={{ marginBottom: '40px' }} />
          <br></br>

          <label>Your email address:</label>
          <input
            type="text"
            name="email"
            maxLength="40"
            title="email"
            style={{ marginBottom: '40px', width: '100%' }}
          />

          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenum"
            required
            pattern="+\\d{2-3}-\\d{9}"
            title="phonenum"
            style={{ marginBottom: '40px', width: '100%' }}
          />

          <label>Password:</label>
          <input
            type="text"
            name="pwd"
            maxLength="15"
            required
            pattern="[A-Za-z0-9 ,.!]+"
            title="pwd"
            style={{ marginBottom: '40px', width: '100%' }}
          />

          <div
            className="upload-section"
            style={{
              marginTop: '40px',
            }}
          >
<label className="upload-label">Upload Your .sol File:</label>
<input type="file" accept=".sol" onChange={handleFileUpload} style={{ marginBottom: '40px' }} />
{uploadedFile && (
  <div className="uploaded-file">
    <p>Uploaded File: {uploadedFile.name}</p>
    {/* Display other processing results here */}
  </div>
)}

          </div>
          <input
            className="submit"
            type="submit"
            value="Submit"
            style={{
              marginTop: '40px',
              background: 'red', // Change the button color to red
              color: 'white',
              border: 'none',
              padding: '15px 30px', // Increase padding for larger button
              borderRadius: '10px',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          />
        </form>

        <div
          className="footer-nav"
          style={{
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <Link to="/" style={{ color: 'violet' }}>Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default AuditPage;
