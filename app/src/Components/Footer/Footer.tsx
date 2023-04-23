import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterLinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="FooterSocial">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="FooterText">
        &copy; 2023 DevConnect. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
