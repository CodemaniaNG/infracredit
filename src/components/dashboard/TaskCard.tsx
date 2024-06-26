import {
  Card,
  CardBody,
  Image,
  HStack,
  VStack,
  Text,
  Divider,
  Avatar,
  AvatarGroup,
  Stack,
} from "@chakra-ui/react";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/store";

type TaskCardProps = {
  title: string;
  desc: string;
  isStack?: boolean;
  status?: any;
  type?: string;
  id?: string;
  commentCount?: number;
};

const TaskCard = ({
  title,
  desc,
  isStack = false,
  status,
  id,
  commentCount,
}: TaskCardProps) => {
  const router = useRouter();
  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  return (
    <>
      <Card
        variant="outline"
        maxW="sm"
        bg="#fff"
        borderRadius={8}
        mb={isStack ? "3" : "0"}
        onClick={() => {
          router.push(`/editor/${id}`);
        }}
        cursor="pointer"
      >
        <CardBody>
          <VStack align="flex-start" spacing={4}>
            <VStack align="flex-start">
              <Text
                fontSize={{
                  base: "16px",
                  md: "16px",
                  lg: "16px",
                }}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {title}
              </Text>
              <Text
                fontSize={"10px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
                mt={-2}
              >
                {desc}
              </Text>
            </VStack>

            {/* <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup> */}

            <Divider borderColor="border.200" />

            <Stack direction="column" spacing={2} w="100%">
              <HStack>
                <Image src="/images/comment.svg" alt="Like" />
                <Text
                  fontSize={"12px"}
                  fontWeight="500"
                  color="subText.300"
                  fontFamily={"body"}
                >
                  {commentCount} Comments
                </Text>
              </HStack>

              {status === 4 && (
                <Text
                  fontSize={"12px"}
                  fontWeight="600"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Completed
                </Text>
              )}
            </Stack>

            {status === 0 && (
              <Button
                text="Edit Report"
                type="submit"
                size="md"
                onClick={() => {
                  router.push(`/editor/${id}`);
                }}
              />
            )}

            {status === 1 && (
              <Button
                text="Continue Report"
                type="submit"
                size="md"
                onClick={() => {
                  router.push(`/editor/${id}`);
                }}
              />
            )}

            {status === 2 && role !== "User" && (
              <Button
                text="Review"
                type="submit"
                size="md"
                onClick={() => {
                  router.push(`/editor/${id}`);
                }}
              />
            )}

            {status === 3 && role !== "User" && (
              <Button
                text="View"
                type="submit"
                size="md"
                onClick={() => {
                  router.push(`/editor/${id}`);
                }}
              />
            )}

            {status === 4 && (
              <Button
                text="View Report"
                type="submit"
                size="md"
                onClick={() => {
                  router.push(`/editor/${id}`);
                }}
              />
            )}
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskCard;
