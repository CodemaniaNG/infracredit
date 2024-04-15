export type ButtonType = {
    text: string;
    icon?: any;
    iconPosition?: "left" | "right";
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost";
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: any;
    fontSize?: number;
    fontWeight?: number;
    px?: number;
    py?: number;
    color?: string;
    bg?: string;
    bgHover?: string;
    textHover?: string;
    border?: string;
    borderHover?: string;
    bgDisabled?: string;
    textDisabled?: string;
    borderDisabled?: string;
    type?: "button" | "submit" | "reset";
    borderRadius?: number;
    width?: string;
    borderWidth?: string;
    borderStyle?: string;
    iconWidth?: string;
    iconHeight?: string;
};

export type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    label: string;
    maxLength?: number;
    icon?: any;
    iconPosition?: "left" | "right";
};

export type ModalType = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    body?: any;
    footer?: any;
    fontWeight?: number;
    size?: string;
    p?: number;
};

export type SelectProps = {
    name: string;
    label: string;
    options: any[];
    placeholder: string;
};

export type TextareaProps = {
    name: string;
    label: string;
    placeholder: string;
};
