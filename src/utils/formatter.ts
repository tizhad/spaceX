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

export const formatApiData = (data: any): Launch[] => {
  return data.map((launch: any) => {
    return {
      id: launch.id,
      name: launch.name,
      upcoming: launch.upcoming,
      success: launch.success,
      patch: launch.links.patch.large,
      date: launch.date_utc,
      image: setImage(launch.links.patch.large),
      details: launch.details,
    };
  });
};

const setImage = (image: string) => {
  return image
    ? image
    : "https://www.lonestarlive.com/resizer/v2/HOD53YNTUZGPTASE4GNL63DQJI.jpeg?auth=a1a1df5cceb42ac21cabf50af36703da1f947bf0d48a841734d987480fcc80e7&width=1280&quality=90";
};
