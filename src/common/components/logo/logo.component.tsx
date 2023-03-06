import clsx from "clsx";
import { FC } from "react";

type LogoType = "footer" | "header";

interface ILogoProps {
  type?: LogoType;
}

export const Logo: FC<ILogoProps> = ({ type = "header" }) => {
  return (
    <section className="container flex justify-between">
      <a href={"/"} className="logo flex items-center gap-x-1">
        <span className="text-2xl">🍕</span>
        <h1
          className={clsx("font-logo text-2xl", {
            "text-white": type === "footer",
            "text-black": type === "header",
          })}>
          Signore
        </h1>
      </a>
    </section>
  );
};
