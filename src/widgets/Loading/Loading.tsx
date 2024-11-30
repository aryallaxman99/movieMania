import { TypeAnimation } from "react-type-animation";
import { twMerge } from "tailwind-merge";

const Loading = (props: any) => {
  const { className } = props;
  return (
    <main className={twMerge(`mt-10 text-center text-3xl ${className}`)}>
      <TypeAnimation
        sequence={[
          "Loading",
          1000,
          "Loading.",
          100,
          "Loading..",
          100,
          "Loading...",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </main>
  );
};

export default Loading;
