const bankingOptions = [
  {
    icon: '../../images/icon-online.svg',
    title: 'Online Banking',
    content:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon:'../../images/icon-budgeting.svg',
    title: 'Simple Budgeting',
    content:
      'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.',
  },
  {
    icon: '../../images/icon-onboarding.svg',
    title: 'Fast Onboarding',
    content:
      'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: '../../images/icon-api.svg',
    title: 'Open API',
    content:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]

// export default function Info() {
//   return (
//     <section className="bg-slate-100 h-full w-full">
//       <div className="ml-36 mt-36 w-1/3 px-8">
//         <h2 className="text-4xl font-normal text-slate-900 text-left mb-4">Why choose Easybank?</h2>
//         <p className="text-zinc-400">We leverage Open Banking to turn your bank account into your financial hub. Control 
//         your finances like never before.</p>
//       </div>
//       <div className="flex flex-row justify-around mx-36 my-20">        
//         {bankingOptions.map((option) => (
//           <article key={option.title} className="w-3/12 px-10">
//               <img className="mb-6 h-50 w-100 " src={option.icon} alt="" />
//               <h4 className="mb-2 text-lg font-medium text-gray-900">{option.title}</h4>
//               <p className="text-sm text-gray-500">{option.content}</p>  
//           </article>
//         ))}    
//       </div>
//     </section>
//   );
// }

export default function Info() {
  return (
    <section className="bg-slate-100 h-full w-full">
      <div className="px-6 md:ml-36 pt-20 md:w-1/3">
        <h2 className="text-4xl font-normal text-slate-900 text-center md:text-left mb-4">Why choose Easybank?</h2>
        <p className="text-center md:text-left text-zinc-400">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around px-6 md:mx-36 md:my-20">
        {bankingOptions.map((option) => (
          <article key={option.title} className="my-6 md:w-3/12 md:px-10">
            <img className="mb-6 h-20 w-20 md:h-32 md:w-32 mx-auto" src={option.icon} alt="" />
            <h4 className="mb-2 text-lg font-medium text-gray-900 text-center md:text-left">{option.title}</h4>
            <p className="text-sm text-gray-500 text-center md:text-left">{option.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}