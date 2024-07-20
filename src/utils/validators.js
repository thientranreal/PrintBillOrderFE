// src/utils/validators.js
// Check email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
// Check phone
export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
  return phoneRegex.test(phoneNumber);
};
