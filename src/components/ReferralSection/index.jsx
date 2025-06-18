import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import "./index.css";

const ReferralSection = () => {
  const referralLink = "https://gobusiness.com/?refferal=ABCXYZ";
  const referralCode = "ABCXYZ";

  const [linkCopied, setLinkCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="referral-section-container">
      <h2 className="referral-heading">Refer Friends And Earn More !!</h2>
      <hr className="referral-line" />

      <div className="referral-inputs-wrapper">
        <div className="referral-input-group">
          <label htmlFor="referral-link" className="referral-label">
            Your Referral Link
          </label>
          <div className="input-with-button">
            <input
              id="referral-link"
              type="text"
              readOnly
              value={referralLink}
              className="referral-input"
            />
            <button onClick={handleCopyLink} className="copy-button">
              <span className="copy-icon">
                <FaCopy />
              </span>
              {linkCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="referral-input-group">
          <label
            htmlFor="referral-code"
            className="referral-label referral-code-label"
          >
            Your Referral Code
          </label>
          <div className="input-with-button">
            <input
              id="referral-code"
              type="text"
              readOnly
              value={referralCode}
              className="referral-input"
            />
            <button onClick={handleCopyCode} className="copy-button">
              <span className="copy-icon">
                <FaCopy />
              </span>
              {codeCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSection;
