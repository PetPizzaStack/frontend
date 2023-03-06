import { FC } from "react";
import { Link } from "react-router-dom";

import { Logo } from "@app/common";

// import { ROUTES } from "@app/utils";

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className="w-full p-4 shadow-lg">
      <Logo />
    </header>
  );
};
