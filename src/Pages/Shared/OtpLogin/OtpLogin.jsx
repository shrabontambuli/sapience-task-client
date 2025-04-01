import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const OtpLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] =
    (useState < firebase.auth.ConfirmationResult) | (null > null);

  const sendOtp = async () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    try {
      const result = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaVerifier);
      setConfirmationResult(result);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOtp = async () => {
    if (!confirmationResult) return;
    try {
      await confirmationResult.confirm(otp);
      alert("Login successful!");
    } catch (error) {
      console.error("Invalid OTP:", error);
    }
  };

  return (
    <div className="otp-login">
      <h2>Login with OTP</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>

      {confirmationResult && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OtpLogin;
