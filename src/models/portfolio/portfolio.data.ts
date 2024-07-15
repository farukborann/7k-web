import { StaticImageData } from "next/image";

import { binance_bot } from "./binance-bot";
import { form_builder } from "./form-builder";
import { ktp_web } from "./ktp-web";
import { tp2ae } from "./tp2ae";

export type PortfolioDataType = {
  path: string;
  name: string;
  duty: string;
  techs: string[];
  detail: string;
  photos: StaticImageData[];
};

export const PortfolioData: PortfolioDataType[] = [
  form_builder,
  binance_bot,
  ktp_web,
  tp2ae,
];
