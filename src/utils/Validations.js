// Email validation 
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Password validation (at least 6 characters)
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  // Field validation (not empty)
  export const validateField = (field) => {
    return field.trim().length > 0;
  };
  
  // Form validation for signup
  export const validateSignupForm = (name, email, password) => {
    const errors = {};
    
    if (!validateField(name)) {
      errors.name = 'Name is required';
    }
    
    if (!validateField(email)) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!validateField(password)) {
      errors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  
  // Form validation for login
  export const validateLoginForm = (email, password) => {
    const errors = {};
    
    if (!validateField(email)) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!validateField(password)) {
      errors.password = 'Password is required';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };