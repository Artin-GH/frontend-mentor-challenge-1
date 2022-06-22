import type { NextPage } from "next";
import { PageBase } from "../partials/components";
import { Shorter } from "../partials/layouts/global";
import { Hero, Advanced, Boost } from "../partials/layouts/Home";

const Home: NextPage = () => {
  return (
    <PageBase>
      <Hero />
      <HomeShorter />
      <Advanced />
      <Boost />
    </PageBase>
  );
};

const HomeShorter = () => {
  return (
    <div className="relative">
      <Shorter />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-veryLightViolet z-0" />
    </div>
  );
}

export default Home;
