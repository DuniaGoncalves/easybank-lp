import { Link } from "@remix-run/react";
// import logoSVG from "~/public/images/logo";

export default function Footer() {
  return (
    <footer className="bg-slate-800 flex">
      <div>
        <Link to={"/"} prefetch="none">
          <img src="../../images/logo.svg" alt="logo" />
        </Link>
        <nav className="flex">
          <Link to={"/"} prefetch="none">
            <img src="../../images/icon-facebook.svg" alt="logo" />
          </Link>
          <Link to={"/"} prefetch="none">
            <img src="../../images/icon-youtube.svg" alt="logo" />
          </Link>
          <Link to={"/"} prefetch="none">
            <img src="../../images/icon-twitter.svg" alt="logo" />
          </Link>
          <Link to={"/"} prefetch="none">
            <img src="../../images/icon-pinterest.svg" alt="logo" />
          </Link>
          <Link to={"/"} prefetch="none">
            <img src="../../images/icon-instagram.svg" alt="logo" />
          </Link>
        </nav>
      </div>
      <div>
        <nav className="flex">
          <div className="flex flex-col">
            <Link className="text-zinc-400" to="/about">About Us</Link>{" "}
            <Link className="text-zinc-400" to="/contact">Contact</Link>{" "}
            <Link className="text-zinc-400" to="/blog">Blog</Link>{" "}
          </div>
          <div className="flex flex-col">
            <Link className="text-zinc-400" to="/about">Careers</Link>{" "}
            <Link className="text-zinc-400" to="/support">Support</Link>{" "}
            <Link className="text-zinc-400" to="/about/community" prefetch="intent">Privacy Policy</Link>
          </div>
        </nav>
      </div>
      <div>
        <button>Request Invite</button>
        <p className="text-zinc-600">© Easybank. All Rights Reserved</p>
      </div>
      <div className="text-zinc-600">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Dunia Goncalves</a>.
      </div>
    </footer>
  );
}