import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero flex h-96 w-full bg-auto bg-no-repeat bg-[bottom_-10rem_right_-10rem] bg-slate-50">
      <div className="m-auto w-1/3 px-8">
        <h1 className="text-6xl font-medium text-slate-900 text-left mb-4">Next generation digital banking</h1>
        <p className="mb-4">
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
        </p>
        <Button />
      </div>
      <div className="w-1/2">
        <img src="../../images/image-mockups.png" alt="" />
      </div>
    </section>
  );
}