import './index.css';

import cashIcon from '../../assets/cash.png';
import creditCardIcon from '../../assets/credit-card.png';
import donationIcon from '../../assets/donation.png';
import hourglassIcon from '../../assets/hourglass.png';
import percentageIcon from '../../assets/percentage.png';
import wageIcon from '../../assets/wage.png';
import referralIcon from '../../assets/referral.png';
import transferIcon from '../../assets/transfer.png';

const ReferralDetailItem = ({ iconSrc, value, label }) => {
  return (
    <li className="detail-item"> 
      <div className="detail-icon-wrapper">
        <img src={iconSrc} alt={`${label} icon`} className="detail-icon-image" />
      </div>
      <div className="detail-content">
        <p className="detail-value">{value}</p>
        <p className="detail-label">{label}</p>
      </div>
    </li>
  );
};


const ReferralAccountDetails = () => {

  const detailConstants = [
    {
      id: "CASH",
      iconSrc: cashIcon,
      value: "$9,568.00",
      label: "Total Balance",
    },
    {
      id: "DISCOUNTPERCENTAGE",
      iconSrc: creditCardIcon,
      value: "60%",
      label: "Discount Percentage",
    },
    {
      id: "DONATION",
      iconSrc: donationIcon,
      value: "300",
      label: "Total Referral",
    },
    {
      id: "HOURGLASS",
      iconSrc: hourglassIcon,
      value: "$300",
      label: "Discount Amount",
    },
    {
      id: "PERCENTAGE",
      iconSrc: percentageIcon,
      value: "$465.00",
      label: "Commission Amount",
    },
    {
      id: "WAGE",
      iconSrc: wageIcon,
      value: "$158.00",
      label: "Total Earning",
    },
    {
      id: "REFERRAL",
      iconSrc: referralIcon,
      value: "40%",
      label: "Commission Discount",
    },
    {
      id: "TRANSFER",
      iconSrc: transferIcon,
      value: "$534.00",
      label: "Total Bank Transfer",
    },
  ];

  return (
    <div className="referral-account-dashboard"> 
      <ul className="referral-detail-list">
        {detailConstants.map(({ id, iconSrc, value, label }) => (
          <ReferralDetailItem
            key={id}
            id={id} 
            iconSrc={iconSrc}
            value={value}
            label={label}
          />
        ))}
      </ul>
      <div className="referral-info-section">
        <div className="info-card">
          <p className="info-head">Service</p>
          <p className="info-value">some service</p>
        </div>
        <div className="info-card">
          <p className="info-head">Your Referrals</p>
          <p className="info-value">0+ 0</p>
        </div>
        <div className="info-card">
          <p className="info-head">Active Referrals</p>
          <p className="info-value">0+ 0</p>
        </div>
        <div className="info-card">
          <p className="info-head">Total Ref. Earnings</p>
          <p className="info-value">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralAccountDetails;