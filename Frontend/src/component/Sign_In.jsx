import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SignInForm() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(false); 

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Sign in successful');
        setSignInSuccess(true); 
        navigate('/Restros');
      } else {
        console.error('Sign in failed');
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {signInSuccess ? (
        <Items />
      ) : (
        <div style={{ width: '300px', textAlign: 'center' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button onClick={handleSignIn} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

const Items = () => {
  return <div>Items Component</div>;
};

export default SignInForm;
