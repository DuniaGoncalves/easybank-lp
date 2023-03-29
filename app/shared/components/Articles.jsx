import { Link } from "@remix-run/react";
// import logoSVG from "~/public/images/logo";

export default function Articles() {
  return (
    <section>
      <h2>Latest Articles</h2>
      <article>
        <img src="" alt="" />
        <span>By Claire Robinson</span>
        <h5>Receive money in any currency with no fees</h5>
        <p>
          The world is getting smaller and we’re becoming more mobile. So why should you be 
          forced to only receive money in a single …
        </p>
      </article>


By Wilson Hutton
Treat yourself without worrying about money
Our simple budgeting feature allows you to separate out your spending and set 
realistic limits each month. That means you …

By Wilson Hutton
Take your Easybank card wherever you go
We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
while you’re abroad. We’ll even show you …

By Claire Robinson
Our invite-only Beta accounts are now live!
After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
It’s easy to request an invite through the site ...
    </section>
  );
}