import { Stack, Image, Text } from "@chakra-ui/react";
import Button from "../ui/Button";

const Empty = ({ title, desc, buttonTitle, onClick }: any) => {
  return (
    <Stack dir="column" align="center" justify="center" py={10}>
      <Image src="/images/empty.svg" alt="empty" />
      <Stack dir="column" spacing={0}>
        <Text
          color="maintText.400"
          fontSize={{ base: "24px", sm: "28px" }}
          fontWeight={600}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          color="subText.400"
          fontSize={{ base: "16px", sm: "16px" }}
          lineHeight="24px"
          textAlign="center"
        >
          {desc}
        </Text>
      </Stack>
      {buttonTitle && (
        <Stack>
          <Button
            text={buttonTitle}
            icon="/images/add3.svg"
            iconPosition="left"
            onClick={onClick}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Empty;
