import { MenuGrid } from "@app/modules";
import { Footer, Header } from "@app/common";

import data from "@app/mocks/pizza.json";

export const App = () => {
  return (
    <>
      <Header />
      <main className="mt-10 mb-14">
        <MenuGrid items={data} cols={3} />
      </main>
      <Footer />
    </>
  );
};
