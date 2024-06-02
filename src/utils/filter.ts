import { isSameDay, parseISO } from "date-fns";
import { Launch, LaunchStatus } from "../types/types";

export const filterLaunchesByStatus = (
  launches: Launch[],
  filter: string
): Launch[] => {
  return launches.filter((launch) => {
    if (filter === LaunchStatus.success.toLowerCase()) {
      return launch.success === true;
    } else if (filter === LaunchStatus.upcoming.toLocaleLowerCase()) {
      return launch.upcoming === true;
    } else {
      return true;
    }
  });
};

export const filterLaunchesByDate = (
  launches: Launch[],
  date: string
): Launch[] => {
  const selectedDate = parseISO(date);
  return launches.filter((launch) =>
    isSameDay(parseISO(launch.date), selectedDate)
  );
};
