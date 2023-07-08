import React from 'react';
import '../index.css';
import WelcomSection from './WelcomeSection';
import CredentialForm from './CredentialForm';

const LoginPage = () => {


  return (
    <div className="bg-neutral-grayishBlue min-h-screen min-w-screen flex">
    <WelcomSection/>
    <CredentialForm/>
    </div>
  );
};

export default LoginPage;