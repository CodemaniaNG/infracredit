import React from "react";
import { SelectProps } from "@/interfaces/type";
import {
  Select as ChakraSelect,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field } from "formik";

const Select2 = ({
  name,
  label,
  placeholder,
  options,
  onChange,
  value,
  ...rest
}: SelectProps) => {
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
          <ChakraSelect
            {...field}
            placeholder={placeholder}
            borderRadius={"8px"}
            borderWidth={1}
            borderColor="border.200"
            color="#374151"
            fontSize={14}
            fontWeight={400}
            h={10}
            isInvalid={form.errors[name] && form.touched[name]}
            focusBorderColor="primary"
            errorBorderColor="red.500"
            backgroundColor="white"
            {...rest}
            onChange={(e) => {
              form.setFieldValue(name, e.target.value);
              if (onChange) {
                onChange(e);
              }
            }}
          >
            {options?.map((option, index) => (
              <option key={index} value={option?.value}>
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

export default Select2;
