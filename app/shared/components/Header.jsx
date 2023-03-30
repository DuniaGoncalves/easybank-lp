import Button from "./Button";

export default function header() {
  return (
    <header className="flex justify-between my-4 mx-8">
      <img className="h-8 w-40" src="../../images/logo.svg" alt="logo" />
      <nav className="flex sm:justify-center space-x-4">
        {[
          ['Home', '/'],
          ['About', '/about'],
          ['Contact', '/contact'],
          ['Blog', '/blog'],
          ['Careers', '/careers'],
        ].map(([title, url]) => (
          <a href={url} className="py-2 text-zinc-400 font-medium hover:underline hover:underline-offset-8 hover:decoration-green-500 hover:decoration-4 hover:text-slate-600">{title}</a>
        ))}
      </nav>
      <Button />
    </header>
  );
}