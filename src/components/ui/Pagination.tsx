/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Text, Select, IconButton, Image, Stack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

type PaginationProps = {
  pageSize: number;
  setPageSize: (value: string) => void;
  pageNumber: number;
  setPageNumber: (value: number) => void;
  data: any;
};

const Pagination = ({
  pageSize,
  setPageSize,
  pageNumber,
  setPageNumber,
  data,
}: PaginationProps) => {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        p={5}
      >
        <Stack direction="row" spacing={2} align="center">
          <Text fontSize={14} fontWeight={500} color="subText.200">
            Show
          </Text>
          <Select
            variant="unstyled"
            size="sm"
            color="mainText.200"
            fontWeight={500}
            fontSize={14}
            fontFamily="body"
            _focus={{ borderColor: "none" }}
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </Select>
          <Text fontSize={14} fontWeight={500} color="subText.200">
            entries
          </Text>
        </Stack>

        <Stack direction="row" spacing={2} align="center">
          <IconButton
            aria-label="previous"
            icon={<ArrowBackIcon />}
            variant="outline"
            borderRadius="full"
            borderColor="mainText.200"
            onClick={() => setPageNumber(pageNumber - 1)}
            isDisabled={pageNumber === 1}
          />
          <Text fontSize={14} fontWeight={500} color="subText.200">
            Page {pageNumber}
          </Text>
          <IconButton
            aria-label="next"
            icon={<ArrowForwardIcon />}
            variant="outline"
            borderRadius="full"
            borderColor="mainText.200"
            onClick={() => setPageNumber(pageNumber + 1)}
            isDisabled={data?.length < pageSize}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Pagination;
