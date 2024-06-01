import { format, parseISO } from "date-fns";

export const formatDate = (
  dateString: string,
  dateFormat = "dd MMMM yyyy, HH:mm"
) => {
  const date = parseISO(dateString);
  return format(date, dateFormat);
};
