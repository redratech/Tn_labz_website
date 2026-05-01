import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      year: new Date().getFullYear().toString(),
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    
    if (response.status === 200) {
      return true;
    } else {
      console.error('EmailJS failed:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
