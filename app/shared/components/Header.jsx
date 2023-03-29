import { Link } from "@remix-run/react";
// import logoSVG from "../../images/logo.svg";


export default function header() {
  return (
    <header>
      <nav>
        <Link to={"/"} prefetch="none">
          <img src="../../images/logo.svg" alt="logo" />
        </Link>
        <Link className="text-zinc-400" to="/">Home</Link>{" "}
        <Link className="text-zinc-400"to="/about">About</Link>{" "}
        <Link className="text-zinc-400"to="/contact">Contact</Link>{" "}
        <Link className="text-zinc-400" to="/blog">Blog</Link>{" "}
        <Link className="text-zinc-400" to="/about">Careers</Link>{" "}
        <button>Request Invite</button>
      </nav>
    </header>
  );
}