import moment from "moment";

export const formatDate = (initialDate: any): any => {
  const formatted = moment(initialDate).format("dddd, Do MMMM YYYY");
  return formatted;
};

export const formatTime = (initialDate: string): string => {
  const formatted = moment(initialDate).format("h:mm a");
  return formatted;
};

export const formatDays = (initialDate: string): string => {
  const formatted = moment(initialDate).fromNow();
  return formatted;
};

export const shortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
};

export const formatDate2 = (initialDate: string): string => {
  const formatted = moment(initialDate).format("DD MMM YYYY");
  return formatted;
};

export const calculateDiscountPercentage = (
  amount: number,
  discountAmount: number
): number => {
  if (amount <= 0 || discountAmount <= 0) {
    return 0;
  }

  const discountPercentage = (discountAmount / amount) * 100;
  return Math.round(discountPercentage * 100) / 100; // Round to two decimal places
};

export const validatemail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re?.test(String(email)?.toLowerCase());
};

export const validatephone = (phone: string) => {
  if (phone?.includes("+234")) {
    return phone?.includes("+234");
  } else if (phone?.includes("234") && phone?.length > 10) {
    return phone?.includes("234");
  } else if (phone?.includes("090") && phone?.length > 8) {
    return phone?.includes("090");
  } else if (phone?.includes("080") && phone?.length > 8) {
    return phone?.includes("080");
  } else if (phone?.includes("070") && phone?.length > 8) {
    return phone.includes("070");
  } else if (phone?.includes("081") && phone?.length > 8) {
    return phone?.includes("081");
  } else if (phone?.includes("091") && phone?.length > 8) {
    return phone?.includes("091");
  }
};

export const validateUrl = (url: string) => {
  if (url?.includes("www")) {
    return url?.includes("www");
  } else if (url?.includes("http")) {
    return url?.includes("http");
  } else if (url?.includes("https")) {
    return url?.includes("https");
  } else if (url?.includes(".com")) {
    return url?.includes(".com");
  }
};

export const shortenEmail = (email: string) => {
  if (email) {
    const emailArray = email.split("@");
    const firstPart = emailArray[0].substring(0, 3);
    const secondPart = emailArray[1];
    return `${firstPart}...@${secondPart}`;
  }
};

// WRITE A FUNCTION THAT TAKES A JSON AND ADDS DOUBLE QUOTES TO THE ALL KEYS
export const addDoubleQuotes = (json: any) => {
  const jsonString = JSON.stringify(json);
  const formattedJson = jsonString.replace(
    /([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g,
    '$1"$3":'
  );
  return JSON.parse(formattedJson);
};
