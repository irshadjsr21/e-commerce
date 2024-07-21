import { Logout } from "./Logout";

const topbarLinks = [
  {
    name: "Help",
    link: "#",
  },
  {
    name: "Orders & Returns",
    link: "#",
  },
  {
    name: "Hi, John",
    link: "#",
  },
];

export const Topbar = () => {
  return (
    <div className="flex flex-row justify-end px-[40px] py-3">
      {topbarLinks.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className={`mr-[20px] text-xs text-muted no-underline`}
        >
          {item.name}
        </a>
      ))}
      <Logout />
    </div>
  );
};
