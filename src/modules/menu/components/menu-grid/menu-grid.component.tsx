import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { v4 } from "uuid";

import { IMenuItem, IMenuItemProps, MenuItem } from "@app/modules";

export interface IMenuGridProps {
  items: IMenuItemProps[];
  cols?: number;
}

export const MenuGrid: FC<IMenuGridProps> = ({ items, cols = 3 }) => {
  const [data, setData] = useState<IMenuItem[]>([]);

  useEffect(() => {
    setData(items.map((item) => ({ ...item, id: v4() })));
  }, [items]);

  return (
    <section
      className={clsx("container grid gap-5 md:gap-10", {
        "md:grid-cols-2": cols === 2,
        "md:grid-cols-3": cols === 3,
        "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": cols === 4,
      })}>
      {data.map((item) => (
        <MenuItem {...item} key={item.id} />
      ))}
    </section>
  );
};
