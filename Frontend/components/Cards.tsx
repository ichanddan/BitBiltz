"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  RadioGroup,
  Radio,
  CardFooter,
} from "@nextui-org/react";
import { ShoppingCartIcon } from "lucide-react";
import {Link} from "@nextui-org/link";

export const Cards = ({ title, price, sellPrice, image, productId }: any) => {
  return (
    <div>
      <Card className="pb-2">
        <CardHeader className="max-w-sm rounded overflow-hidden  ">
          <Image
            alt="Card background"
            className="object-cover rounded py-2  h-80 w-80 bg-cover bg-center bg-no-repeat	"
            src={image || "/No-Image.png"}
            loading="lazy"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-evenly">
          <h2 className="text-md font-semibold">{title}</h2>

          <h4 className="font-bold text-base">
            {price}
            <span className="line-through text-xs text-gray-400">
              {sellPrice}
            </span>
            <span className="text-fuchsia-700">20% off</span>
          </h4>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <div className="flex gap-5">
            <Link href={productId}>
            <Button
              className="rounded-md bg-fuchsia-600 font-semibold "
              variant="solid"
            >
              Buy now
            </Button>
            </Link>
            <Button
              className="rounded-md font-semibold"
              variant="bordered"
              color="secondary"
              startContent={<ShoppingCartIcon size={22} strokeWidth={1.5} />}
            >
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

// DO NOT TOUCH

{
  /* <div className="flex gap-4  justify-between items-center text-center mb-2">
            <RadioGroup orientation="horizontal"  defaultValue="london">
              <Radio
                value="buenos-aires"
                classNames={{
                  label: "radio-label p-2 rounded",
                  wrapper: "hidden",
                }}
              >
                XS
              </Radio>
              <Radio
                value="sydney"
                classNames={{
                  label: "radio-label  p-2 rounded-full",
                  wrapper: "hidden",
                }}
              >
                SM
              </Radio>
              <Radio
                value="london"
                classNames={{
                  label: "radio-label  p-2 rounded-full",
                  wrapper: "hidden",
                }}
              >
                M
              </Radio>
              <Radio
                value="tokyo"
                classNames={{
                  label: "radio-label  p-2 rounded-full",
                  wrapper: "hidden",
                }}
              >
                L
              </Radio>
            </RadioGroup>
          </div> */
}
