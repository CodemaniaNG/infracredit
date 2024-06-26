import { Text, VStack, Box, HStack, List, ListItem } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import { memo, useMemo, useCallback } from "react";

interface TableOfContentItem {
  title: string;
  page: number;
}

interface TableOfContentProps {
  isEdit: boolean;
  reportToEdit: {
    tableOfContent: TableOfContentItem[];
  };
  setReportToEdit: (report: any) => void;
}

const TableOfContent: React.FC<TableOfContentProps> = ({
  isEdit,
  reportToEdit,
  setReportToEdit,
}) => {
  const tableOfContent = useMemo(
    () => reportToEdit?.tableOfContent,
    [reportToEdit],
  );

  const handleUpdateTableOfContent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newTableOfContent = [...reportToEdit?.tableOfContent];
      newTableOfContent[index].title = e.target.value;
      setReportToEdit({
        ...reportToEdit,
        tableOfContent: newTableOfContent,
      });
    },
    [reportToEdit, setReportToEdit],
  );

  return (
    <CeoLayOut page={1} isEdit={isEdit}>
      <VStack align="flex-start" w="100%">
        <VStack align="flex-start" w="100%">
          <EditableInput
            isEdit={false}
            value="TABLE OF CONTENTS"
            fontSize="24px"
            color="greens.200"
            fontWeight="800"
            textAlign="left"
          />
        </VStack>
        <Box
          w="100%"
          h="2px"
          bgGradient="linear(to-r, rgba(34, 124, 191, 1), rgba(71, 182, 92, 1))"
        />
        <List spacing={3} w="100%">
          {tableOfContent?.map((item, index) => (
            <ListItem w="100%" key={index}>
              <HStack w="100%" justify="space-between" align="center">
                <HStack w="100%">
                  <Box w="10px" h="10px" bg="greens.200" />
                  <EditableInput
                    isEdit={isEdit}
                    value={item?.title}
                    fontSize="22px"
                    color="subText.800"
                    fontWeight="600"
                    textAlign="left"
                    onChange={(e: any) => handleUpdateTableOfContent(e, index)}
                  />
                </HStack>
                <Text fontSize="20px" color="subText.800" fontWeight="600">
                  {item?.page}
                </Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </CeoLayOut>
  );
};

export default memo(TableOfContent);
