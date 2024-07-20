import { Banner } from "./Banner";
import { MainHeader } from "./MainHeader";
import { Topbar } from "./Topbar";

export const Header = () => {
  return (
    <div>
      <Topbar />
      <MainHeader />
      <Banner />
    </div>
  );
};
