import React from "react";
import { useGlobalContext } from "../../contextAPI/globalContext";
import { footerLinksList } from "../../utils/footerLinksList";

const Footer = () => {
  const { count } = useGlobalContext();
  return (
    <footer className="footer">
      <div className="container max-w">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 offset-lg-2">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p className="footer-copyright">
                  Copyright © 2021
                  <a
                    href="https://www.smartsolarsavings.com/v4/index.php"
                    _title="home"
                  >
                    www.smartsolarsavings.com
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="footer-menu">
                  <ul>
                    {footerLinksList.map((link) => {
                      return Object.entries(link).map((l) => {
                        return (
                          <li key={l[0]}>
                            <a href={l[1]}>{l[0]} </a>
                            <p className="no-m-bottom">|</p>
                          </li>
                        );
                      });
                    })}
                    <li className="slidenum"> {count}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="solar-footer-content">
              <p>
                This website is an advertising marketplace for companies seeking
                consumer referrals for solar products. We are not a solar
                manufacturer or installer. The information provided by you to us
                will be securely delivered to a licensed solar company. We do
                not endorse, warrant, or guarantee any service or products of
                any solar company. The content of any information or service
                contained on this website is provided on an as is basis. Minimum
                age required to be eligible is 18.
              </p>
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_new">
                  {" "}
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_new">
                  Terms of Service
                </a>{" "}
                apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
