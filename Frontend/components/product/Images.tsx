import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { AddImages } from "./new-image";
import { productImages } from "@/types";
// import Image from "next/image";

const Images = ({ _this }: any) => {
  return (
    <Card className="w-full px-2">
      <CardHeader className="flex justify-between">
        <h1 className="text-lg font-bold">Images</h1>
        <AddImages _this={_this} />
      </CardHeader>
      <CardBody>
        <div>
          <Image
            src={
              _this.images[_this.currentImage] ||
              "https://placehold.co/800x400/png"
            }
            alt="front"
            className="w-full"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <RadioGroup
            orientation="horizontal"
            defaultValue="london"
            onValueChange={(value) => _this.setCurrentImage(value)}
          >
            <Radio
              value="front"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="left"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="right"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="back"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="additional"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
          </RadioGroup>
        </div>
      </CardBody>
    </Card>
  );
};

export default Images;
