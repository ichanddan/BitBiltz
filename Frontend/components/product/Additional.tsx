"use client";
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
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
const Additional = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between pb-0">
        <h1 className="text-lg font-bold">Additional Details</h1>
        {/* <AdditionalDetails /> */}
      </CardHeader>
      <CardBody>
        <p>Abhi SOch Raha hu</p>
      </CardBody>
    </Card>
  );
};

export default Additional;

// export const AdditionalDetails = () => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <div>
//       <>
//         <Button onPress={onOpen} color="primary" variant="light">
//           Edit
//         </Button>
//         <Modal
//           isOpen={isOpen}
//           onOpenChange={onOpenChange}
//           placement="top-center"
//           size="2xl"
//         >
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">
//                   Additional Info
//                 </ModalHeader>
//                 <ModalBody></ModalBody>
//                 <ModalFooter>
//                   <Button color="danger" variant="flat" onClick={onClose}>
//                     Close
//                   </Button>
//                   <Button color="primary" onPress={onClose}>
//                     ADD
//                   </Button>
//                 </ModalFooter>
//               </>
//             )}
//           </ModalContent>
//         </Modal>
//       </>
//     </div>
//   );
// };
