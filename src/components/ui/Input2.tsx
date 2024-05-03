import React from "react";
import { Field } from "formik";
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { InputProps } from "@/interfaces/type";
import { useState } from "react";

const Input2 = ({
  type,
  name,
  placeholder,
  label,
  maxLength,
  icon,
  iconPosition,
  onChange,
  isReadOnly,
  value,
}: InputProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
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
          <InputGroup>
            {icon && iconPosition === "left" && (
              <InputRightElement position="absolute" top="5px">
                <Image src={icon} alt="icon" />
              </InputRightElement>
            )}

            <ChakraInput
              {...field}
              isReadOnly={isReadOnly}
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
              type={type === "password" ? (show ? "text" : "password") : type}
              backgroundColor="white"
              maxLength={maxLength}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value);
                if (onChange) {
                  onChange(e);
                }
              }}
              value={value}
            />
            {icon && iconPosition === "right" && (
              <InputRightElement position="absolute" top="5px">
                <Image src={icon} alt="icon" />
              </InputRightElement>
            )}
          </InputGroup>

          <FormErrorMessage color="red" fontWeight={400} fontSize={12} mt={1}>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default Input2;
