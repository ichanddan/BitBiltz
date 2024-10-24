"use client";

import React, { ChangeEvent, useState } from "react";
import Images from "./Images";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import Additional from "./Additional";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import Link from "next/link";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import { productImages } from "@/types";
import Seller from "@/api/seller";

const NewProduct = () => {
  const [images, setImages] = useState<productImages>({
    front: "",
    left: "",
    right: "",
    back: "",
    additional: "",
  });
  const [productType, setProductType] = useState("");
  const [productInfo, setProductInfo] = useState({
    skuId: "",
    listingStatus: "",
    priceMRP: "",
    priceSelling: "",
    stock: "",
    deliveryCharge: "",
    originCountry: "",
    manufacturingDetails: "",
  });
  const [productDescription, setProductDescription] = useState({});
  const [currentImage, setCurrentImage] = useState("");
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setImages((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleProductInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleProductDescriptionChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(productDescription);

    setProductDescription((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmitForm = async () => {
    const res = await Seller.AddProduct({
      images,
      productInfo,
      type: productType,
      productDescription,
    });
  };

  return (
    <>
      <div className="flex justify-between mb-3 items-center gap-2">
        <ul className="flex">
          <li className="flex gap-2">
            <HouseIcon />
            <Link href={"/admin"}>
              <span>Home</span>
            </Link>
            <span> / </span>
          </li>

          <li className="flex gap-2">
            <UsersIcon />
            <span>Products</span>
            <span> / &nbsp; </span>
          </li>
          <li className="flex gap-2">
            <span>New</span>
          </li>
        </ul>
        <Select
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          placeholder="Type"
          className="max-w-sm"
          aria-label="product type"
        >
          <SelectItem key="t_shirt">T-Shirt</SelectItem>
        </Select>
      </div>
      <div className="flex gap-2 flex-col md:flex-row mb-3">
        <Images
          _this={{ images, handleImageChange, currentImage, setCurrentImage }}
        />
        <div className="flex flex-col w-full gap-2">
          <ProductInfo _this={{ productInfo, handleProductInfoChange }} />
          <ProductDescription
            _this={{ productDescription, handleProductDescriptionChange }}
          />
        </div>
      </div>
      <Additional />
      <Button onClick={handelSubmitForm}>Save</Button>
    </>
  );
};

export default NewProduct;
