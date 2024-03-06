import { Button as ChakraButton, Image } from "@chakra-ui/react";
import { ButtonType } from "@/interfaces/type";

const Button = (props: ButtonType) => {
  const {
    text: textProp,
    icon,
    iconPosition,
    size,
    variant,
    isDisabled,
    isLoading,
    onClick,
    fontSize = 14,
    fontWeight = 700,
    px,
    py,
    color: text = "white"	,
    bg = "secondary",
    border = "secondary",
    type = "button",
    borderRadius = "8px",
    width = "100%",
    borderWidth = "0",
  } = props;

  return (
    <ChakraButton
      size={size}
      variant={variant}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onClick={onClick}
      color={text}
      bg={bg}
      // leftIcon={icon && iconPosition === "left" && icon}
      leftIcon={
        icon && iconPosition === "left" && (
          <Image src={icon} alt="icon" boxSize="20px" />
        )
      }
      // rightIcon={icon && iconPosition === "right" && icon}
      rightIcon={
        icon && iconPosition === "right" && (
          <Image src={icon} alt="icon" boxSize="20px" />
        )
      }
      // borderWidth={variant === "outline" ? "1px" : "0px"}
      borderWidth={borderWidth}
      borderColor={border}
      borderRadius={borderRadius}
      _hover={{
        // give it a nice sacling effect on hover
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      }}
      fontSize={fontSize}
      fontWeight={fontWeight}
      px={px}
      py={py}
      type={type}
      width={width}
    >
      {textProp}
    </ChakraButton>
  );
};

export default Button;
