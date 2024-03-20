import {
  Editable,
  EditablePreview,
  EditableInput as ChakraEditableInput,
  Input,
} from "@chakra-ui/react";

type EditableInputProps = {
  isEdit?: boolean;
  fontSize?: string;
  color?: string;
  textAlign?: any;
  fontWeight?: string;
  value?: string;
};

const EditableInput = ({
  isEdit = false,
  fontSize = "16px",
  color = "white",
  textAlign = "center",
  fontWeight = "600",
    value,
}: EditableInputProps) => {
  return (
    <Editable
      defaultValue={value}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontFamily="body"
      isPreviewFocusable={isEdit}
      p={0}
      m={0}
      w="100%"
    >
      <EditablePreview />
      <Input
        as={ChakraEditableInput}
        borderWidth={0}
        borderRadius={0}
        focusBorderColor="transparent"
        fontSize={fontSize}
        p={0}
        m={0}
        w="100%"
      />
    </Editable>
  );
};

export default EditableInput;
