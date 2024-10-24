"use client";
import { countries } from "@/helper/data";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React from "react";

const ProductInfo = ({ _this }: any) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between pb-0">
        <h1 className="text-lg font-bold">Product Info</h1>
        <AddProductInfo _this={_this} />
      </CardHeader>
      <CardBody>
        <Table
          shadow="none"
          hideHeader
          aria-label="Example static collection table"
          classNames={{
            wrapper: "p-0",
          }}
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell> SKU ID</TableCell>
              <TableCell>{_this.productInfo.skuId}</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Listing Status</TableCell>
              <TableCell className="capitalize">
                {_this.productInfo.listingStatus}
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Price - MRP</TableCell>
              <TableCell>{_this.productInfo.priceMRP}</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Price - Selling</TableCell>
              <TableCell>{_this.productInfo.priceSelling}</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Stock</TableCell>
              <TableCell>{_this.productInfo.stock}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProductInfo;

export const AddProductInfo = ({ _this }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary" variant="light" as="a">
          Edit
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          size="2xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Info</ModalHeader>
                <ModalBody className="grid md:grid-cols-2 gap-3">
                  <Input
                    type="text"
                    label="SKU ID"
                    isRequired
                    name="skuId"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                    value={_this.productInfo.skuId}
                    onChange={_this.handleProductInfoChange}
                  />

                  <Select
                    label="Listing Status"
                    labelPlacement="outside"
                    isRequired
                    placeholder="Status"
                    classNames={{
                      label: "font-semibold text-md",
                    }}
                    className="p-2"
                    value={_this.productInfo.listingStatus}
                    onChange={_this.handleProductInfoChange}
                    name="listingStatus"
                  >
                    <SelectItem key="show">Show</SelectItem>
                    <SelectItem key="hide">Hide</SelectItem>
                  </Select>
                  <Input
                    type="number"
                    label="Price ( M.R.P)"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                    value={_this.productInfo.priceMRP}
                    onChange={_this.handleProductInfoChange}
                    name="priceMRP"
                  />
                  <Input
                    type="number"
                    label="Price ( Selling )"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                    value={_this.productInfo.priceSelling}
                    onChange={_this.handleProductInfoChange}
                    name="priceSelling"
                  />
                  <Input
                    type="number"
                    label="Stock"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                    value={_this.productInfo.stock}
                    onChange={_this.handleProductInfoChange}
                    name="stock"
                  />
                  <Input
                    type="number"
                    label="Delivery Charge"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                    value={_this.productInfo.deliveryCharge}
                    onChange={_this.handleProductInfoChange}
                    name="deliveryCharge"
                  />
                  <Select
                    label="Country"
                    labelPlacement="outside"
                    isRequired
                    classNames={{
                      label: "font-semibold text-md",
                    }}
                    placeholder="Country"
                    className="p-2"
                    value={_this.productInfo.originCountry}
                    onChange={_this.handleProductInfoChange}
                    name="originCountry"
                  >
                    {countries.map((country) => (
                      <SelectItem key={country.name} value={country.name}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    type="text"
                    label="Manufacturing Details"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                    value={_this.productInfo.manufacturingDetails}
                    onChange={_this.handleProductInfoChange}
                    name="manufacturingDetails"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
