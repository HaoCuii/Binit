import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import LeaderBoard from './pages/LeaderBoard';
import Stats from './pages/Stats';
import Home from './components/Home';
import Navbar from './components/navbar';
import { AuthProvider } from './contexts/authContext';

const App = () => {
  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <BrowserRouter>
        <Navbar /> {/* Navbar can now use the AuthContext through useAuth */}

        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          {/* Use the userLoggedIn condition directly in the Stats route */}
          <Route path="/stats" element={<PrivateRoute />}/> {/* Custom route guard */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const PrivateRoute = () => {
  const { userLoggedIn } = useAuth(); // Now this is inside the provider scope
  return userLoggedIn ? <Stats /> : <Navigate to="/login" />;
};

export default App;
