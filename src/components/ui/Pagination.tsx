/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Text, Select, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

type PaginationProps = {
  page: any;
  size: number;
  setPage: any;
  setSize: any;
  total: number;
};

const Pagination = ({
  page,
  size,
  setPage,
  setSize,
  total,
}: PaginationProps) => {
  const [pages, setPages] = useState(0);
  const [currentSize, setCurrentSize] = useState(
    localStorage.getItem("size") || 5
  );

  useEffect(() => {
    setPages(Math.ceil(total / size));
  }, [total, size]);

  const handleNext = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSize = (e: any) => {
    setSize(e.target.value);
    localStorage.setItem("size", e.target.value);
  };

  useEffect(() => {
    setCurrentSize(size);
  }, [size]);

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mt={4} w="100%">
        <Flex>
          <Select
            variant="ghost"
            bg="transparent"
            p={0}
            placeholder="Rows per page:"
            fontSize={14}
            fontWeight={300}
            color="#30345E"
            w={"auto"}
            h={"auto"}
            onChange={handleSize}
            value={currentSize}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40"> 40</option>
            <option value="50"> 50</option>
            <option value="100">100</option>
          </Select>
        </Flex>

        <Flex alignItems="center" gap={4}>
          <Text fontSize={16} fontWeight={300} color="#202020">
            Page {page} of {pages}
          </Text>

          <Flex alignItems="center" gap={4}>
            <IconButton
              aria-label="Previous"
              icon={<Image src="/images/arrow-left.svg" alt="Next" />}
              size="sm"
              variant="outline"
              bg="white"
              border="1px solid #30345E"
              color="#30345E"
              borderRadius="50%"
              w={"36px"}
              h={"36px"}
              onClick={handlePrev}
              isDisabled={page === 1}
            />
            <IconButton
              aria-label="Next"
              icon={<Image src="/images/arrow-right.svg" alt="Next" />}
              size="sm"
              variant="outline"
              bg="white"
              border="1px solid #30345E"
              color="#30345E"
              borderRadius="50%"
              w={"36px"}
              h={"36px"}
              onClick={handleNext}
              isDisabled={page === pages}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Pagination;
