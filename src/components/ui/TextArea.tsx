import React from "react";
import { Field } from "formik";
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Textarea as ChakraTextArea,
} from "@chakra-ui/react";
import { TextareaProps } from "@/interfaces/type";

const TextArea = ({ name, placeholder, label }: TextareaProps) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel
            color="subText.200"
            fontWeight={"500"}
            fontSize={14}
            mb={1}
            fontFamily="body"
          >
            {label}
          </FormLabel>

          <ChakraTextArea
            {...field}
            placeholder={placeholder}
            borderRadius={"8px"}
            borderWidth={1}
            borderColor="border.200"
            color="#374151"
            fontSize={14}
            fontWeight={400}
            px={4}
            py={4}
            isInvalid={form.errors[name] && form.touched[name]}
            focusBorderColor="primary"
            errorBorderColor="red.500"
            backgroundColor="white"
          />

          <FormErrorMessage color="red" fontWeight={400} fontSize={12} mt={1}>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default TextArea;
