// Can we map through each column and pull in data maybe with prisma
const bankingOptions = [
  {
    icon: 'Calvin Hawkins',
    title: 'calvin.hawkins@example.com',
    content:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    icon: 'Kristen Ramos',
    title: 'kristen.ramos@example.com',
    content:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    icon: 'Ted Fox',
    title: 'ted.fox@example.com',
    content:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    icon: 'Ted Fox',
    title: 'ted.fox@example.com',
    content:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

// export default function Example() {
//   return (
//     <ul className="divide-y divide-gray-200">
//       {people.map((person) => (
//         <li key={person.email} className="py-4 flex">
//           <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
//           <div className="ml-3">
//             <p className="text-sm font-medium text-gray-900">{person.name}</p>
//             <p className="text-sm text-gray-500">{person.email}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }
export default function Info() {
  return (
    <section className="divide-y divide-gray-200">
        <h2>Why choose Easybank?</h2>

        <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</p>
        
        {bankingOptions.map((option) => (
          <article key={option.content} className="py-4 flex">
              <img className="h-10 w-10 rounded-full" src={option.icon} alt="" />
              <h4 className="text-sm font-medium text-gray-900">{option.title}</h4>
              <p className="text-sm text-gray-500">{option.content}</p>  
          </article>
        ))}    
          
        Online Banking    
         Our modern web and mobile applications allow you to keep track of your finances 
              wherever you are in the world.

        Simple Budgeting
        See exactly where your money goes each month. Receive notifications when you’re 
        close to hitting your limits.

        Fast Onboarding
        We don’t do branches. Open your account in minutes online and start taking control 
        of your finances right away.

        Open API
        Manage your savings, investments, pension, and much more from one account. Tracking 
        your money has never been easier.
    </section>
  );
}