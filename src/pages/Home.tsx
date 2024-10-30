import { Link } from "react-router-dom";

export default function Home(): React.ReactElement {
  return (
    <section className="tracking-widest h-full flex flex-col justify-center uppercase text-5xl font-extrabold text-black">
      <Link to="/about" className="overflow-hidden pen leading-normal">
        <span className="hover:after:animate-highlight">about,</span>
      </Link>
      <Link
        to="https://www.feedle.me/profile/5d35b503-b284-4807-95c5-f3807f702a06"
        className="overflow-hidden pen leading-normal"
        target="_blank"
      >
        <span className="hover:after:animate-highlight">분양리스트</span>
      </Link>
      {/* <Link to="/" className="overflow-hidden pen leading-normal">
            <span className="hover:after:animate-highlight">caresheet</span>
          </Link> */}
      <Link
        to="https://blog.naver.com/ragdolll"
        className="overflow-hidden pen leading-normal"
        target="_blank"
      >
        <span className="hover:after:animate-highlight">blog</span>
      </Link>
    </section>
  );
}
