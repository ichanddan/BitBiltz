import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type productInfo = {
  skuId: string;
  listingStatus: string;
  priceMRP: string;
  priceSelling: string;
  stock: string;
  deliveryCharge: string;
  originCountry: string;
  manufacturingDetails: string;
};
export type productImages = {
  front: string;
  left: string;
  right: string;
  back: string;
  additional: string;
};
