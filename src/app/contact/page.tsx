import Image from "next/image";

const page = () => {
  return (
    <div className="items-center text-center justify-center mt-10">
      <h1 className="text-2xl md:text-4xl lg:text-6xl text- font-bold">
        Get in touch
      </h1>
      <h3 className="text-xl sm:text-base mt-3">
        Want to get in touch? <br className="sm:flex md:hidden" />
        We'd love to here from you. <br className="sm:flex md:hidden" />
        Here's how you can reach to us...
      </h3>
      <a
        className="items-center justify-center absolute mt-7"
        href="mailto:aryallaxman99.gmail.com"
      >
        <Image
          className="w-16 h-10"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png"
          }
          alt="gmail icon"
          width={20}
          height={20}
          unoptimized
        />
      </a>
    </div>
  );
};

export default page;
