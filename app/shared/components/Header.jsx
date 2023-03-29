import { Link } from "@remix-run/react";
// import logoSVG from "../../images/logo.svg";


export default function header() {
  return (
    <header>
      <nav>
        <Link to={"/"} prefetch="none">
          <img src="../../images/logo.svg" alt="logo" />
        </Link>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/blog">Blog</Link>{" "}
        <Link to="/about">Careers</Link>{" "}
        <button>Request Invite</button>
      </nav>
    </header>
  );
}