import { NumericFormat } from "react-number-format";

type NairaNumberFormatProps = {
  value: number;
  isBold?: boolean;
  isPrefix?: boolean;
  fontSize?: string;
  color?: string;
};

const NairaNumberFormat = ({
  value,
  isBold,
  isPrefix = true,
  fontSize,
  color,
}: NairaNumberFormatProps) => {
  return (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      prefix={isPrefix ? "₦" : ""}
      style={{
        fontWeight: isBold ? "700" : "normal",
        fontSize: fontSize ? fontSize : "24px",
        color: color ? color : "mainText",
        fontFamily: "body",
      }}
    />
  );
};

export default NairaNumberFormat;
