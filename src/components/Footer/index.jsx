import "./index.css";

const Footer = () => {
  const footerConstants = [
    {
      head: "COMPANY",
      list: ["About", "Premium", "Blog", "Referral Program"],
    },
    {
      head: "HELP AND SUPPORT",
      list: ["Contact Us", "Knowledge Center", "Premium Support"],
    },
    {
      head: "LEARNING",
      list: ["Learn Hub", "Tutorials", "Communities"],
    },
    {
      head: "RESOURCES",
      list: ["Third-Party Tools", "Illustrations", "Stock Photos"],
    },
    {
      head: "LEGAL",
      list: ["Privacy Policy", "Terms & Conditions", "EULA"],
    },
  ];

  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        {footerConstants.map((section) => (
          <div className="footer-section" key={section.head}>
            <h3 className="footer-section-head">{section.head}</h3>
            <ul className="footer-links-list">
              {section.list.map((item) => (
                <li className="footer-list-item" key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="footer-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom-bar">
        <img src="logo.png" alt="websitelogo" className="website-logo"/>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Go Business Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
