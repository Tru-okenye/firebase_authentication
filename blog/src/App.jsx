// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import Login from './login'
// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [email, setEmail] = useState('')

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App




import React, { useEffect, useState } from 'react';

import { auth } from './firebase';
import SignUp from './signUp';
import Login from './login';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <>
          <SignUp />
          <Login />
    
        </>
      )}
    </div>
  );
};

export default App;
