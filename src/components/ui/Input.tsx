import React from "react";
import { Field } from "formik";
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { InputProps } from "@/interfaces/type";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Input = ({
  type,
  name,
  placeholder,
  label,
  maxLength,
  icon,
  iconPosition,
}: InputProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
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
          <InputGroup>
            {icon && iconPosition === "left" && (
              <InputRightElement position="absolute" top="5px">
                <Image src={icon} alt="icon" />
              </InputRightElement>
            )}

            <ChakraInput
              {...field}
              placeholder={placeholder}
              borderRadius={"8px"}
              borderWidth={0}
              color="#374151"
              fontSize={14}
              fontWeight={400}
              px={4}
              py={6}
              isInvalid={form.errors[name] && form.touched[name]}
              focusBorderColor="primary"
              errorBorderColor="red.500"
              type={type === "password" ? (show ? "text" : "password") : type}
              backgroundColor="bg.100"
              maxLength={maxLength}
            />

            {/* {type === "password" && (
              <InputRightElement position="absolute" top="5px">
                <IconButton
                  aria-label={show ? "Hide" : "Show"}
                  variant="ghost"
                  colorScheme="primary"
                  size="sm"
                  onClick={handleClick}
                  icon={
                    show ? (
                      <Image src="/images/eye.svg" alt="hide" />
                    ) : (
                      <Image src="/images/eye.svg" alt="hide" />
                    )
                  }
                />
              </InputRightElement>
            )} */}

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

export default Input;
