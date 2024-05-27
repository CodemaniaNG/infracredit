import React from "react";
import { SelectProps } from "@/interfaces/type";
import {
  Select as ChakraSelect,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field } from "formik";

const Select = ({
  name,
  label,
  placeholder,
  options,
  ...rest
}: SelectProps) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel
            color="subText.100"
            fontWeight={"400"}
            fontSize={16}
            mb={1}
            fontFamily="body"
          >
            {label}
          </FormLabel>
          <ChakraSelect
            {...field}
            placeholder={placeholder}
            borderRadius={"8px"}
            borderWidth={0}
            color="#374151"
            fontSize={14}
            fontWeight={400}
            h={12}
            isInvalid={form.errors[name] && form.touched[name]}
            focusBorderColor="primary"
            errorBorderColor="red.500"
            backgroundColor="bg.100"
            {...rest}
          >
            {options?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </ChakraSelect>
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default Select;
