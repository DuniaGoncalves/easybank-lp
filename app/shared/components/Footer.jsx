import { Link } from "@remix-run/react";
import Button from "./Button";

const social = [
  {
    image: '../../images/icon-facebook.svg',
    imageAlt: 'facebook logo',
  },
  {
    image: '../../images/icon-youtube.svg',
    imageAlt: 'youtube logo',
  },
  {
    image: '../../images/icon-twitter.svg',
    imageAlt: 'twitter logo',
  },
  {
    image: '../../images/icon-pinterest.svg',
    imageAlt: 'pinterest logo',
  },
  {
    image: '../../images/icon-instagram.svg',
    imageAlt: 'instagram logo',
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-400">
      <section className="py-8 px-6 flex justify-around">
        <div>
          <img src="../../images/logo.svg" alt="company logo" className="mb-6 fill-white" />
          <nav className="flex justify-around" >
            {social.map((icon) => (
              <Link to={"/"} prefetch="none" key={icon.image}>
                <img className="fill-white hover:fill-green-500 mb-2" src={icon.image} alt={icon.imageAlt} />
              </Link>
            ))} 
          </nav>
        </div>
        <nav className="flex">
          <div className="flex flex-col">
            {[
              ['About Us', '/'],
              ['Contact', '/contact'],
              ['Blog', '/blog'],
            ].map(([title, url]) => (
              <a href={url} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
            ))}
          </div>
          <div className="flex flex-col">
          {[
            ['Careers', '/careers'],
            ['Support', '/support'],
            ['Privacy Policy', '/privacy'],
          ].map(([title, url]) => (
            <a href={url} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
          ))}
          </div>
        </nav>
        <div>
          <Button />
          <p className="mt-6 text-zinc-600">© Easybank. All Rights Reserved</p>
        </div>
      </section>
      <div className="text-zinc-600 text-center">
        Challenge by <a className="hover:text-white" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className="hover:text-white" href="#">Dunia Goncalves</a>.
      </div>
    </footer>
  );
}