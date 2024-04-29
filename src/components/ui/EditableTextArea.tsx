import {
  Editable,
  EditablePreview,
  EditableTextarea as EditableTextareaChakra,
  Textarea,
} from "@chakra-ui/react";

type EditableTextAreaProps = {
  isEdit?: boolean;
  fontSize?: string;
  color?: string;
  textAlign?: any;
  fontWeight?: string;
  value?: string;
  onChange?: any;
};

const EditableTextArea = ({
  isEdit = false,
  fontSize = "14px",
  color = "black",
  textAlign,
  fontWeight = "500",
  value,
  onChange,
}: EditableTextAreaProps) => {
  return (
    <Editable
      defaultValue={value}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      fontFamily="body"
      w="100%"
      isPreviewFocusable={isEdit}
      textAlign={textAlign}
      whiteSpace="pre-wrap"
    >
      <EditablePreview />
      <EditableTextareaChakra
        as={Textarea}
        borderWidth={0}
        borderRadius={0}
        w="100%"
        h="fit-content"
        color="black"
        noOfLines={100}
        rows={10}
        value={value}
        onChange={onChange}
      />
    </Editable>
  );
};

export default EditableTextArea;
