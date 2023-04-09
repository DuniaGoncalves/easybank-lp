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

// export default function Footer() {
//   return (
//     <footer className="bg-slate-400">
//       <section className="py-8 px-6 flex justify-around">
//         <div>
//           <img src="../../images/logo.svg" alt="company logo" className="mb-6 fill-white" />
//           <nav className="flex justify-around" >
//             {social.map((icon) => (
//               <Link to={"/"} prefetch="none" key={icon.image}>
//                 <img className="fill-white hover:fill-green-500 mb-2" src={icon.image} alt={icon.imageAlt} />
//               </Link>
//             ))} 
//           </nav>
//         </div>
//         <nav className="flex">
//           <div className="flex flex-col">
//             {[
//               ['About Us', '/'],
//               ['Contact', '/contact'],
//               ['Blog', '/blog'],
//             ].map(([title, url]) => (
//               <a href={url} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
//             ))}
//           </div>
//           <div className="flex flex-col">
//           {[
//             ['Careers', '/careers'],
//             ['Support', '/support'],
//             ['Privacy Policy', '/privacy'],
//           ].map(([title, url]) => (
//             <a href={url} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
//           ))}
//           </div>
//         </nav>
//         <div>
//           <Button />
//           <p className="mt-6 text-zinc-600">© Easybank. All Rights Reserved</p>
//         </div>
//       </section>
//       <div className="text-zinc-600 text-center">
//         Challenge by <a className="hover:text-white" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
//         Coded by <a className="hover:text-white" href="#">Dunia Goncalves</a>.
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="bg-slate-400">
      <section className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:flex lg:justify-between">
        <div className="mb-8 lg:mb-0">
          <img src="../../images/logo.svg" alt="company logo" className="w-36 h-auto fill-white mb-6" />
          <nav className="flex justify-center lg:justify-start">
            {social.map((icon) => (
              <Link to={"/"} prefetch="none" key={icon.image}>
                <img className="fill-white hover:fill-green-500 mr-4 lg:mr-6" src={icon.image} alt={icon.imageAlt} />
              </Link>
            ))}
          </nav>
        </div>
        <nav className="hidden lg:flex">
          <div className="flex flex-col">
            {[
              ['About Us', '/'],
              ['Contact', '/contact'],
              ['Blog', '/blog'],
            ].map(([title, url]) => (
              <a href={url} key={title} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
            ))}
          </div>
          <div className="ml-8 flex flex-col">
            {[
              ['Careers', '/careers'],
              ['Support', '/support'],
              ['Privacy Policy', '/privacy'],
            ].map(([title, url]) => (
              <a href={url} key={title} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
            ))}
          </div>
        </nav>
        <div className="mt-8 lg:mt-0">
          <Button />
          <p className="mt-6 text-center lg:text-left text-zinc-600 lg:mt-8">© Easybank. All Rights Reserved</p>
        </div>
      </section>
      <div className="px-4 py-8 text-center text-zinc-600 lg:py-4">
        Challenge by <a className="hover:text-white" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a className="hover:text-white" href="#" rel="noopener noreferrer">Dunia Goncalves</a>.
      </div>
    </footer>
  );
}