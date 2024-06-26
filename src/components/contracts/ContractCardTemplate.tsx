import { Card, CardBody, Image, VStack, Text, Divider } from "@chakra-ui/react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import CreateContract from "../modals/CreateContract";

type ContractCardProps = {
  title: string;
  body: string;
};

const ContractCardTemplate = ({ title, body }: ContractCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Card variant="outline" maxW="sm" bg="#fff" borderRadius={16}>
        <CardBody p={2}>
          <Image src="/images/contract.svg" alt="Document" w="full" />
          <Divider borderColor="border.200" />
          <VStack align="flex-start" spacing={4} py={2}>
            <VStack align="flex-start">
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                  lg: "18px",
                }}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {title}
              </Text>
            </VStack>

            <Divider borderColor="border.200" />

            <Button
              text="Create"
              type="button"
              size="md"
              onClick={handleModal}
            />
          </VStack>
        </CardBody>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<CreateContract setIsOpen={setIsOpen} body={body} />}
      />
    </>
  );
};

export default ContractCardTemplate;
