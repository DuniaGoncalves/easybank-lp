import { Link } from "@remix-run/react";
// import logoSVG from "~/public/images/logo";

export default function Footer() {
  return (
    <footer>
      <Link to={"/"} prefetch="none">
        <img src="#" alt="logo" />
      </Link>
      {/* nav socials icons */}
    <nav>
      <Link to="/about">About Us</Link>{" "}
      <Link to="/contact">Contact</Link>{" "}
      <Link to="/blog">Blog</Link>{" "}
      <Link to="/about">Careers</Link>{" "}
      <Link to="/support">Support</Link>{" "}
      <Link to="/about/community" prefetch="intent">Privacy Policy</Link>
    </nav>
      <button>Request Invite</button>
      <p>© Easybank. All Rights Reserved</p>
  
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Dunia Goncalves</a>.
      </div>
    </footer>
  );
}