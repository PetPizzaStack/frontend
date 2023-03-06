import { FC } from "react";
import { Link } from "react-router-dom";

// import { ROUTES } from "@app/utils";

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className="w-full p-4 shadow-lg">
      <section className="container flex justify-between">
        <a href={"/"} className="flex items-center gap-x-1">
          <span className="text-2xl">🍕</span>
          <h1 className="font-logo text-2xl">Signore</h1>
        </a>
      </section>
    </header>
  );
};
