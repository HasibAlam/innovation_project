import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #2C001E, #190033)',
        minHeight: '150vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <p
        style={{
          fontFamily: 'Skulls and Crossbones, sans-serif',
          fontSize: '35px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          textAlign: 'center',
          maxWidth: '80%',
          textTransform: 'uppercase',
          marginTop: '3px',
        }}
      >
        Dead Lock
      </p>
      <p
        style={{
          fontFamily: 'Skulls and Crossbones, sans-serif',
          fontSize: '35px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          textAlign: 'center',
          maxWidth: '80%',
          textTransform: 'uppercase',
          marginTop: '10px',
        }}
      >
        Leading Edge Smart Contract Auditing Platform
      </p>
      <img
        src="/homepage.png"
        alt="Homepage Banner"
        style={{
          maxWidth: '50%',
          maxHeight: '50vh',
          marginBottom: '5px',
          marginTop: '15px',
        }}
      />
      <button
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          borderRadius: '10px',
          background: 'linear-gradient(to bottom, midnightblue, rebeccapurple)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onClick={() => {
          console.log('Button clicked!');
        }}
        onMouseEnter={(event) => {
          event.target.style.background = 'red';
          event.target.style.color = 'white';
        }}
        onMouseLeave={(event) => {
          event.target.style.background = 'linear-gradient(to bottom, midnightblue, rebeccapurple)';
          event.target.style.color = 'white';
        }}
      >
        Request an Audit
      </button>
      
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '25px',
          color: 'white',
          textAlign: 'left',
          maxWidth: '80%',
          marginTop: '50px',
          lineHeight: '1.6',
        }}
      >
        <h1>What is Dead-Lock</h1>
        Dead-Lock is Smart Contract Audit System is designed to aid users in pinpointing potential weaknesses within smart contract code. The platform's objective is to offer an interactive web interface where users can upload their smart contract code. Through the utilization of pre-existing static analysis tools for smart contracts, the platform can swiftly evaluate the contract code and flag possible concerns. Detection outcomes are readily accessible on the website, empowering users to promptly recognize and resolve any susceptibilities in their contracts.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          color: 'white',
          marginBottom: '60px',
          marginTop: '120px',
        }}
      >
        <div style={{ width: '48%', textAlign: 'left' }}>
          <h2 style={{ fontSize: '28px' }}>Features of Dead-Lock</h2>
          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: '30px',
              lineHeight: '1.6',
              fontSize: '22px',
              marginBottom: '30px',
            }}
          >
            <li style={{ marginBottom: '20px' }}>Submitters can offer their smart contracts for auditing in popular formats like Solidity (.sol) files.</li>
            <li style={{ marginBottom: '20px' }}>Utilizing static analysis techniques, the system assesses smart contracts for potential vulnerabilities and security risks.</li>
            <li style={{ marginBottom: '20px' }}>A dedicated page showcases comprehensive audit reports, highlighting identified vulnerabilities and their categories.</li>
            
          </ul>
          <img
          
            src="/company2.png"
            alt="Company Image"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
  
            }}
          />
        </div>
        <div
          style={{
            width: '48%',
            borderLeft: '2px solid white',
            paddingLeft: '20px',
            textAlign: 'center',
          }}
        >
          <img
          
            src="/company1.png"
            alt="Company Image"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
  
            }}
          />
          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: '30px',
              lineHeight: '1.6',
              fontSize: '22px',
              marginBottom: '30px',
              marginTop: '70px',
            }}
          >
            <li style={{ marginBottom: '20px' }}>The platform offers tailored suggestions for each vulnerability category, enhancing the auditing process.</li>
            <li style={{ marginBottom: '20px' }}>Users have access to and can review previous audit reports for their convenience.</li>
            <li style={{ marginBottom: '20px', textAlign: 'left' }}>Our Company has some of the best experts of Cybersecuity, Auditing, Data Science and Blockchain. Ahnaf , Levish and Hasib are top of their respective fields and heart of this company and provides industry leading outcomes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
