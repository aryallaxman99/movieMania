import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Oops! We can't find the page you're looking for
      </h1>
      <h3 className="text-xl md:text-2xl lg:text-3xl mt-5 mb-8">
        You tried to request a page that doesn't exist. If you believe this to
        be in error,
        <br />
        let me know{" "}
        <a
          className="text-green-700 hover:underline"
          href="mailto:aryallaxman99@gmail.com"
        >
          on the mail
        </a>
      </h3>
      <div className="mt-10 hover:underline">
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
