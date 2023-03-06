import { FC } from "react";
import { Link } from "react-router-dom";

import { IMenuItemProps } from "@app/modules";

export const MenuItem: FC<IMenuItemProps> = ({
  title,
  link,
  imageSource,
  ingredients,
  weight,
  price,
}) => {
  return (
    <div className="rounded-2xl shadow-lg">
      <section className="with-rounded flex flex-col rounded-2xl bg-white">
        <div className="pizza-image group relative h-60 w-full cursor-none overflow-hidden rounded-t-2xl">
          <img
            className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={`/assets/${imageSource}`}
            alt={title}
          />

          <p className="absolute right-2 bottom-2 inline-block rounded-full bg-gray-900/50 px-2 py-1 text-xs text-white transition-colors duration-500 group-hover:bg-transparent md:right-3 md:bottom-3">
            <span className="font-text">{weight}</span> г
          </p>
        </div>

        <div className="py-8 px-6">
          <h3 className="mb-4 font-semibold text-brown">{title}</h3>

          <ul className="mb-8 flex flex-wrap gap-1">
            {ingredients.map((ingredient, index) => (
              <li className="cursor-default" key={index}>
                {ingredient}
                {index !== ingredients.length - 1 && ","}
              </li>
            ))}
          </ul>

          <section className="flex items-center justify-between">
            <p className="">
              <span className="font-text">{price}</span> гривень
            </p>

            <a
              className="rounded-md bg-amber-400 px-4 py-3 font-medium text-brown transition-colors duration-300 hover:bg-orange-100 hover:text-amber-500"
              href={link}>
              Додати до корзини
            </a>
          </section>
        </div>
      </section>
    </div>
  );
};
