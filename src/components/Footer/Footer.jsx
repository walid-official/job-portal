import React from "react";
import footerLogo from "../../assets/logo2.png";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-gradient-to-r from-[#0f70c2] to-[#55a1ffeb] text-white p-10">
        <aside>
          <div className="">
            <img className="w-16" src={footerLogo} alt="" />
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center border-t bg-gradient-to-r from-[#0f70c2] to-[#55a1ffeb] py-8 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Walid Hasan
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
