'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/firebase';
import OTPInput from './OTPInput';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';


const Alert: React.FC<{ message: string; type: 'success' | 'error' }> = ({ message, type }) => {
  const bgColor = type === 'success' ? '#feea63' : '#000';
  const textColor = type === 'success' ? '#000' : '#fff';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        backgroundColor: bgColor,
        color: textColor,
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        boxShadow: '4px 4px 0px #000',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

const CurriculumDialog: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    level: 'spark',
    phone: '',
    role: 'student',
  });
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [verificationId, setVerificationId] = useState<string | null>(null);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      showAlert('Please enter a valid phone number.', 'error');
      return;
    }
  
    try {
      const formattedPhone = parsePhoneNumber(formData.phone).number;
  
      // Initialize RecaptchaVerifier if not already initialized
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth, // Pass the auth instance first
          'recaptcha-container', // The container element ID
          {
            size: 'invisible' // Configuration options
          }
        );
      }
  
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifierRef.current);
  
      setVerificationId(confirmationResult.verificationId);
      setStep(2);
      showAlert('OTP sent successfully!', 'success');
    } catch (error) {
      console.error('Error sending OTP:', error);
      showAlert('Failed to send OTP. Please try again.', 'error');
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const verifyOtpAndDownload = async () => {
    const otpCode = otp.join('');
    if (!verificationId || otpCode.length !== 6) {
      showAlert('Please enter a valid 6-digit OTP.', 'error');
      return;
    }

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otpCode);
      await signInWithCredential(auth, credential);

      downloadCurriculum();
      showAlert('Your download has begun. Happy Learning :)', 'success');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      showAlert('Invalid OTP. Please try again.', 'error');
    }
  };

  const downloadCurriculum = () => {
    const pdfLinkMap: Record<string, string> = {
      spark: '/curriculum-spark.pdf',
      ignite: '/curriculum-ignite.pdf',
      blaze: '/curriculum-blaze.pdf',
    };

    const link = pdfLinkMap[formData.level];
    if (link) {
      const a = document.createElement('a');
      a.href = link;
      a.download = `Curriculum-${formData.level}.pdf`;
      a.click();

      resetFormAndCloseDialog();
    } else {
      showAlert('Invalid level selected.', 'error');
    }
  };

  const resetFormAndCloseDialog = () => {
    setFormData({
      name: '',
      level: 'spark',
      phone: '',
      role: 'student',
    });
    setOtp(new Array(6).fill(''));
    setStep(1);
    setVerificationId(null);
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); // Dismiss alert after 3 seconds
  };

  useEffect(() => {
    // Cleanup reCAPTCHA on component unmount
    return () => {
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} />}

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded shadow-lg border-2 border-black">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Download Curriculum</h2>
            <DialogPrimitive.Close onClick={resetFormAndCloseDialog}>
              <X className="h-6 w-6" />
            </DialogPrimitive.Close>
          </div>

          {step === 1 && (
            <div>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full border-2 border-black p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Level of Exam</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleFormChange}
                  className="w-full border-2 border-black p-2 rounded"
                >
                  <option value="spark">Spark</option>
                  <option value="ignite">Ignite</option>
                  <option value="blaze">Blaze</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full border-2 border-black p-2 rounded"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">You are a</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="w-full border-2 border-black p-2 rounded"
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="institute">Institute</option>
                </select>
              </div>
              <button onClick={sendOtp} className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
                Get OTP
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-4">
                <label className="block mb-2">Enter OTP</label>
                <OTPInput value={otp} valueLength={6} onChange={handleOtpChange} />
              </div>
              <button onClick={verifyOtpAndDownload} className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
                Download Curriculum
              </button>
            </div>
          )}

          <div id="recaptcha-container"></div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </>
  );
};

export default CurriculumDialog;
