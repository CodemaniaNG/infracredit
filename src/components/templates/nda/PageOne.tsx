import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";
import EditableInput from "@/components/ui/EditableInput";
import { memo } from "react";

const PageOne = ({
  isEdit,
  contractToDisplay,
  companyAddress,
  companyName,
  companyRegNo,
  contractDate,
  contractData,
}: any) => {
  return (
    <CeoLayOut
      title={contractToDisplay.subTitle[0]?.title}
      page={2}
      isEdit={isEdit}
    >
      <VStack align="flex-start" w="100%" spacing={4}>
        {/* comapny details */}

        <EditableInput
          value={`Company Name: ${contractData?.CompanyName} \n`}
          fontSize="16px"
          color="black"
          fontWeight="700"
          isEdit={isEdit}
          textAlign="left"
        />

        <EditableInput
          value={`Company Address: ${contractData?.CompanyAddress} \n`}
          fontSize="16px"
          color="black"
          fontWeight="700"
          isEdit={isEdit}
          textAlign="left"
        />

        <EditableInput
          value={`Company Registration No: ${contractData?.CompanyRegistration} \n`}
          fontSize="16px"
          color="black"
          fontWeight="700"
          isEdit={isEdit}
          textAlign="left"
        />

        <EditableInput
          value={`Contract Date: ${contractData?.ContractMetaDate} \n`}
          fontSize="16px"
          color="black"
          fontWeight="700"
          isEdit={isEdit}
          textAlign="left"
        />

        <EditableTextArea
          value={contractToDisplay.subTitle[0]?.itemOne}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
        />

        <EditableTextArea
          value={contractToDisplay.subTitle[0]?.itmesTwo}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
        />

        <EditableTextArea
          value={contractToDisplay.subTitle[0]?.itemsThree}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
        />

        <Title title={contractToDisplay.subTitle[1]?.title} isEdit={isEdit} />
        <EditableTextArea
          value={contractToDisplay.subTitle[1]?.itemOne}
          fontSize="14px"
          color="black"
          fontWeight="500"
          isEdit={isEdit}
        />
      </VStack>
    </CeoLayOut>
  );
};

export default memo(PageOne);
