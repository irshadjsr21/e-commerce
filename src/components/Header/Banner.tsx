import Image from "next/image";

export const Banner = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-bgSecondary py-2">
      <div className="flex items-center">
        <Image
          src="/assets/icons/arrow.svg"
          alt="left arrow icon"
          width={16}
          height={16}
        />

        <div className="mx-4 text-sm font-medium">
          Get 10% off on business sign up
        </div>

        <Image
          src="/assets/icons/arrow.svg"
          alt="right arrow icon"
          width={16}
          height={16}
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    </div>
  );
};
