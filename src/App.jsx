import React, { useEffect } from 'react';
import './App.css';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
    document.body.appendChild(script);

    const BrevoConversationsID = '670f4de0120cf728e309be5f';
    window.BrevoConversationsID = BrevoConversationsID;
    window.BrevoConversations = window.BrevoConversations || function() {
      (window.BrevoConversations.q = window.BrevoConversations.q || []).push(arguments);
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='App'>
      <div className='background'>
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
