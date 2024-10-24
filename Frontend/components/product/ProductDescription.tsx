"use client";
import {
  Fabrics,
  Occasions,
  Patterns,
  Sizes,
  Sleeves,
  SuitableFor,
  TShirtTypes,
} from "@/helper/data";
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
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

const ProductDescription = ({ _this }: any) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between pb-0">
        <h1 className="text-lg font-bold">Product Description</h1>
        <AddProductDescription _this={_this} />
      </CardHeader>
      <CardBody>
        <Table
          shadow="none"
          hideHeader
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
              <TableCell>Type</TableCell>
              <TableCell>V Neck</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Style</TableCell>
              <TableCell>COAT</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Size</TableCell>
              <TableCell>M</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Fabric</TableCell>
              <TableCell>Cotton</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Occasion</TableCell>
              <TableCell>Casual</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProductDescription;

export const AddProductDescription = ({ _this }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary" variant="light">
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
                <ModalBody>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Input
                      type="text"
                      label="Title"
                      classNames={{
                        inputWrapper: "rounded-md border",
                        label: "font-semibold text-md",
                      }}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Title"
                      className="p-2"
                      name="title"
                      value={_this.productDescription.title}
                      onChange={_this.handleProductDescriptionChange}
                    />
                    <Select
                      label="Type"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Type"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                      name="type"
                      value={_this.productDescription.type}
                      onChange={_this.handleProductDescriptionChange}
                    >
                      {TShirtTypes.map((shirt) => (
                        <SelectItem key={shirt} value={shirt}>
                          {shirt}
                        </SelectItem>
                      ))}
                    </Select>
                    <Input
                      type="text"
                      label="Style"
                      classNames={{
                        inputWrapper: "rounded-md border",
                        label: "font-semibold text-md",
                      }}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Style"
                      className="p-2"
                      name="style"
                      value={_this.productDescription.style}
                      onChange={_this.handleProductDescriptionChange}
                    />
                    <Select
                      label="Size"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Size"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                      name="size"
                      value={_this.productDescription.size}
                      onChange={_this.handleProductDescriptionChange}
                    >
                      {Sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </Select>
                    <Input
                      type="number"
                      label="Pack Of"
                      classNames={{
                        inputWrapper: "rounded-md border",
                        label: "font-semibold text-md",
                      }}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Pack Of"
                      className="p-2"
                      name="packOf"
                      value={_this.productDescription.packOf}
                      onChange={_this.handleProductDescriptionChange}
                    />
                    <Select
                      label="Pattern"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Pattern"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                      name="pattern"
                      value={_this.productDescription.pattern}
                      onChange={_this.handleProductDescriptionChange}
                    >
                      {Patterns.map((pattern) => (
                        <SelectItem key={pattern} value={pattern}>
                          {pattern}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Fabric"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Fabric"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                    >
                      {Fabrics.map((fabric) => (
                        <SelectItem key={fabric} value={fabric}>
                          {fabric}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Sleeve"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Sleeve"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                      name="sleeve"
                      value={_this.productDescription.sleeve}
                      onChange={_this.handleProductDescriptionChange}
                    >
                      {Sleeves.map((sleeve) => (
                        <SelectItem key={sleeve} value={sleeve}>
                          {sleeve}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Occasion"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Occasion"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                      name="occasion"
                      value={_this.productDescription.occasion}
                      onChange={_this.handleProductDescriptionChange}
                    >
                      {Occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>
                          {occasion}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Suitable For"
                      labelPlacement="outside"
                      isRequired
                      placeholder="Suitable For"
                      classNames={{
                        label: "font-semibold text-md",
                      }}
                      className="p-2"
                      name="suitableFor"
                      value={_this.productDescription.suitableFor}
                      onChange={_this.handleProductDescriptionChange}
                    >
                      {SuitableFor.map((sFor) => (
                        <SelectItem key={sFor} value={sFor}>
                          {sFor}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
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
