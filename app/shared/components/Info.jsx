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
      'See exactly where your money goes each month. Receive notifications when you&apos;re close to hitting your limits.',
  },
  {
    icon: '../../images/icon-onboarding.svg',
    title: 'Fast Onboarding',
    content:
      'We don&apos;t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: '../../images/icon-api.svg',
    title: 'Open API',
    content:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]

export default function Info() {
  return (
    <section className="bg-slate-100">
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</p>
        
        <div className="flex flex-row">        
          {bankingOptions.map((option) => (
            <article key={option.title} className="py-4">
                <img className="h-10 w-100" src={option.icon} alt="" />
                <h4 className="text-sm font-medium text-gray-900">{option.title}</h4>
                <p className="text-sm text-gray-500">{option.content}</p>  
            </article>
          ))}    
        </div>
    </section>
  );
}