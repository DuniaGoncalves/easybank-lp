// Can we map through each column and pull in data maybe with prisma
const blog = [
  {
    image: '../../images/image-currency.jpg',
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    content:
      'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    image:'../../images/image-restaurant.jpg',
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    image: '../../images/image-plane.jpg',
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    content:
      'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you …',
  },
  {
    image: '../../images/image-confetti.jpg',
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    content:
      'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site ...',
  },
]

export default function Articles() {
  return (
    <section className="w-full bg-slate-50">
      <h2 className="text-4xl font-normal text-slate-900 text-left mb-10 ml-36 mt-36 w-1/3 px-8">Latest Articles</h2>
      <div className='flex flex-row justify-around mx-36 my-20'> 
        {blog.map((post) => (
          <article key={post.title} className="w-3/12 px-10">
            <img src={post.image} alt='article image'/>
            <div className="bg-white pb-10 pt-2 px-10">
              <span className="mb-2 text-xs text-gray-500">{post.author}</span>
              <h5 className="mb-2 text-sm font-medium text-gray-900">{post.title}</h5>
              <p className="text-xs text-gray-500">{post.content}</p>
            </div>
          </article>
        ))}  
      </div> 
    </section>
  );
}