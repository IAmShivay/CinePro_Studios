import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Film, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Film className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold">CinePro Studios</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Admin</Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Admin</Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full text-left hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;