import React from "react";
import footerBg from '../../assets/images/footer.png';


const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <footer class="" style={{background: `url(${footerBg})`,
    backgroundSize: "cover"
    }}>
      <div className="footer p-10">
        <div className="">
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer-center p-4">
        <p>Copyright &copy; {fullYear} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
