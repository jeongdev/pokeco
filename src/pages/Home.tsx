import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-screen-sm bg-bg sm:shadow-xl">
      <div className="relative h-screen mx-auto max-w-7xl px-6 pt-16 sm:static sm:px-6 lg:px-8">
        <section className="tracking-widest h-full flex flex-col justify-center uppercase text-5xl font-extrabold text-black">
          <Link
            to="https://www.feedle.me/profile/5d35b503-b284-4807-95c5-f3807f702a06"
            className="overflow-hidden pen leading-normal"
            target="_blank"
          >
            <span className="hover:after:animate-highlight">분양리스트</span>
          </Link>
          <Link to="/" className="overflow-hidden pen leading-normal">
            <span className="hover:after:animate-highlight">caresheet</span>
          </Link>
          <Link
            to="https://blog.naver.com/ragdolll"
            className="overflow-hidden pen leading-normal"
            target="_blank"
          >
            <span className="hover:after:animate-highlight">blog</span>
          </Link>
          <Link to="/" className="overflow-hidden pen leading-normal">
            <span className="hover:after:animate-highlight">about</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
