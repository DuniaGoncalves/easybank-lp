import Button from "./Button";


export default function Header() {
  return (
    <header className="header flex justify-between py-4 px-8 bg-white">
      <img className="h-6 w-32 my-2" src="../../images/logo.svg" alt="logo" />
      <nav className="flex justify-center space-x-4">
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