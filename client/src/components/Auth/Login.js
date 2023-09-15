 import React from 'react';
import { useGoogleOAuth } from 'react-oauth/google';

const GoogleAuthButton = () => {
  const { signInWithGoogle } = useGoogleOAuth();

  const handleSignInClick = () => {
    signInWithGoogle();
  };

  return (
    <button onClick={handleSignInClick}>Sign in with Google</button>
  );
};

export default GoogleAuthButton;
