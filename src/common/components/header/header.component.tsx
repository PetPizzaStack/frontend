import { FC } from "react";

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className="w-full p-4 shadow-md">
      <section className="container flex justify-between">
        <div className="flex items-center gap-x-1">
          <span className="text-2xl">🍕</span>
          <h1 className="font-logo text-2xl">Signore</h1>
        </div>
      </section>
    </header>
  );
};
