import { Card, CardBody, HStack, VStack, Text } from "@chakra-ui/react";
import Button from "../ui/Button";
type MemberCardProps = {
  name: string;
  role: string;
  btnText: string;
};
const MemberCard = ({ name, role, btnText }: MemberCardProps) => {
  return (
    <Card
      variant="filled"
      maxW="sm"
      bg="#fff"
      borderRadius={8}
      boxShadow="0px 4px 8px rgba(38, 105, 93, 0.1)"
    >
      <CardBody p={4}>
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <VStack align="flex-start">
            <Text
              fontSize="14px"
              fontWeight={500}
              color="subText.500"
              fontFamily={"body"}
            >
              {name}
            </Text>
            {role && (
              <Text
                fontSize="16px"
                fontWeight={600}
                color="maintText.300"
                fontFamily={"body"}
                mt={-2}
              >
                {role}
              </Text>
            )}
          </VStack>

          <HStack>
            {btnText && (
              <Button
                variant="ghost"
                text={btnText}
                px={0}
                py={0}
                bg="transparent"
                color="primary3"
              />
            )}
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MemberCard;
