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
    color: text = "white",
    bg = "secondary",
    border = "secondary",
    type = "button",
    borderRadius = "8px",
    width = "100%",
    borderWidth = "1",
    borderStyle = "solid",
    iconWidth = "20px",
    iconHeight = "20px",
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
      leftIcon={
        icon &&
        iconPosition === "left" && (
          <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
        )
      }
      rightIcon={
        icon &&
        iconPosition === "right" && (
          <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
        )
      }
      borderWidth={borderWidth}
      borderColor={border}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      _hover={{
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
