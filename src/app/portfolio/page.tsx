import React from "react";

import { Title } from "@/components/Title";
import PorfolioContainer from "@/containers/PorfolioContainer";

export default function Portfolio() {
  return (
    <div className="mx-auto  w-[95vw] sm:w-[85vw]  space-y-12  pt-28 pb-20">
      <Title title="Portfolio" />
      <PorfolioContainer />
    </div>
  );
}