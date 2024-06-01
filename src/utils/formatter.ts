import { format, parseISO } from "date-fns";
import { Launch } from "../types/types";

export const formatDate = (
  dateString: string,
  dateFormat = "dd MMMM yyyy, HH:mm"
) => {
  const date = parseISO(dateString);
  return format(date, dateFormat);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.slice(0, maxLength) + "...";
};
