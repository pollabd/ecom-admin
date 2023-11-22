import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4"></div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
