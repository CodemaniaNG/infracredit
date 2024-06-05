import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { memo, useCallback } from "react";

interface SubTitleItem {
  title: string;
  itemOne: string;
  itmesTwo: string;
  itemsThree: string;
}

interface ReportToEdit {
  subTitle: SubTitleItem[];
}

interface PageOneProps {
  isEdit: boolean;
  reportToEdit: ReportToEdit;
  setReportToEdit: (report: ReportToEdit) => void;
}

const PageOne: React.FC<PageOneProps> = ({
  isEdit,
  reportToEdit,
  setReportToEdit,
}) => {
  const handleTitleChange = useCallback(
    (index: number, title: string) => {
      const newSubTitle = [...reportToEdit.subTitle];
      newSubTitle[index].title = title;
      setReportToEdit({ ...reportToEdit, subTitle: newSubTitle });
    },
    [reportToEdit, setReportToEdit],
  );

  const handleTextChange = useCallback(
    (index: number, key: keyof SubTitleItem, value: string) => {
      const newSubTitle = [...reportToEdit.subTitle];
      newSubTitle[index][key] = value;
      setReportToEdit({ ...reportToEdit, subTitle: newSubTitle });
    },
    [reportToEdit, setReportToEdit],
  );

  return (
    <CeoLayOut
      title={reportToEdit.subTitle[0]?.title}
      page={2}
      isEdit={isEdit}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleTitleChange(0, e.target.value)
      }
    >
      <VStack align="flex-start" w="100%" spacing={4}>
        <EditableTextArea
          value={reportToEdit.subTitle[0]?.itemOne}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextChange(0, "itemOne", e.target.value)
          }
        />
        <EditableTextArea
          value={reportToEdit.subTitle[0]?.itmesTwo}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextChange(0, "itmesTwo", e.target.value)
          }
        />
        <EditableTextArea
          value={reportToEdit.subTitle[0]?.itemsThree}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextChange(0, "itemsThree", e.target.value)
          }
        />

        <Title
          title={reportToEdit.subTitle[1]?.title}
          isEdit={isEdit}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleTitleChange(1, e.target.value)
          }
        />
        <EditableTextArea
          value={reportToEdit.subTitle[1]?.itemOne}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextChange(1, "itemOne", e.target.value)
          }
        />
      </VStack>
    </CeoLayOut>
  );
};

export default memo(PageOne);
