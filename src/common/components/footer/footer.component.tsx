// import { Link } from "react-router-dom";
import { Logo } from "../logo";

export const Footer = () => {
  const linkClasses =
    "text-sm font-medium text-gray-400 transition-all hover:text-gray-300 hover:underline";
  return (
    <footer className="bg-gray-800">
      <div className="container flex items-center justify-between py-7 px-5">
        <Logo type="footer" />

        <nav className="w-full">
          <ul className="flex justify-end gap-x-5">
            <li className={linkClasses}>
              <a href="mailto:info@pizzasignore.app">info@pizzasignore.app</a>
            </li>
            <li className={linkClasses}>
              <a href="tel:+380-99-876-54-32">+380-99-876-54-32</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
