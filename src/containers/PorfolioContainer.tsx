import PortfolioCard from "@/components/PortfolioCard";
import {
 PortfolioData,
 PortfolioDataType,
} from "@/models/portfolio/portfolio.data";
import React from "react";

export default function PorfolioContainer() {
 return (
  <div className="mx-auto max-w-[900px] space-y-6 overflow-x-hidden ">
   {PortfolioData.map((portfolio: PortfolioDataType, index: number) => {
    return <PortfolioCard key={index} data={portfolio} />;
   })}
  </div>
 );
}
