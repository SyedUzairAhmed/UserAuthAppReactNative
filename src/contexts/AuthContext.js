import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app startup
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.log('Error retrieving user data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUserLoggedIn();
  }, []);

  // Login function
  const login = async (email, password) => {
    // In a real app, you would validate against a server
    // This is a simple mock implementation
    try {
      // Mock user data - in a real app this would come from API
      if (email === 'test@example.com' && password === '1234') {
        const userData = {
          id: '1',
          name: 'Test User',
          email: email
        };
        
        // Store user data in AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Invalid email or password' 
        };
      }
    } catch (error) {
      console.log('Login error:', error);
      return { 
        success: false, 
        error: 'An error occurred during login' 
      };
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    // In a real app, this would be an API call to create a user
    try {
      // Mock user creation
      const userData = {
        id: Math.random().toString(),
        name: name,
        email: email
      };
      
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.log('Signup error:', error);
      return { 
        success: false, 
        error: 'An error occurred during signup' 
      };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        signup, 
        logout,
        loading 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};