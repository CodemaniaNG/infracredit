import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";

const ModalComponent = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  fontWeight,
  size,
  p,
}: any) => {
  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        size={size}
      >
        <ModalOverlay />
        <ModalContent width="100%">
          {title && (
            <ModalHeader>
              <Text
                fontSize="18px"
                fontWeight={fontWeight || 800}
                color="#101828"
              >
                {title}
              </Text>
            </ModalHeader>
          )}
          <ModalCloseButton
            bg={"rgba(255, 59, 48, 0.2)"}
            _hover={{
              bg: "rgba(255, 59, 48, 0.2)",
            }}
            borderRadius="100px"
            px={2}
            w="80px"
          >
            <HStack>
              <Text color="#FF3B30" fontSize="13px" fontWeight="600">
                Close
              </Text>
              <Image src="/images/close-circle.svg" alt="close" />
            </HStack>
          </ModalCloseButton>
          <ModalBody p={p}>{body}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
