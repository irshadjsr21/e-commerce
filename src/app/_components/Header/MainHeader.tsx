import Image from "next/image";

const headerLinks = [
  {
    name: "Categories",
    link: "#",
  },
  {
    name: "Sale",
    link: "#",
  },
  {
    name: "Clearance",
    link: "#",
  },
  {
    name: "New Stock",
    link: "#",
  },
  {
    name: "Trending",
    link: "#",
  },
];

export const MainHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between px-[40px] pb-[18px] pt-[10px]">
      <h1 className="m-0 text-2xl font-bold">ECOMMERCE</h1>
      <div className="flex flex-row justify-between gap-8">
        {headerLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`text-base font-semibold text-black no-underline`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-row justify-between gap-8">
        <Image
          src="/assets/icons/search.svg"
          alt="search icon"
          width={32}
          height={32}
        />
        <Image
          src="/assets/icons/cart.svg"
          alt="search icon"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};
