"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export const AddImages = ({ _this }: any) => {
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
                <ModalHeader className="flex flex-col gap-1">
                  Images
                </ModalHeader>
                <ModalBody className="grid md:grid-cols-2 gap-3">
                  <Input
                    type="text"
                    label="Front"
                    value={_this.images.front}
                    isRequired
                    onChange={_this.handleImageChange}
                    name="front"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Left"
                    value={_this.images.left}
                    onChange={_this.handleImageChange}
                    name="left"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Right"
                    value={_this.images.right}
                    onChange={_this.handleImageChange}
                    name="right"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Back"
                    value={_this.images.back}
                    onChange={_this.handleImageChange}
                    name="back"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Additional"
                    value={_this.images.additional}
                    onChange={_this.handleImageChange}
                    name="additional"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    ADD
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
