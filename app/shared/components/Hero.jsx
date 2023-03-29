// import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <section className="hero w-full bg-fixed h-96 bg-auto bg-no-repeat bg-right flex bg-slate-50">
      <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
        </p>
        <button>Request Invite</button>
      </div>
      <img src="../../images/image-mockups.png" alt="" />
    </section>
  );
}