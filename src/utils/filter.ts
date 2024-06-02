import { Launch, LaunchStatus } from "../types/types";

export const filterLaunchesByStatus = (
  launches: Launch[],
  filter: string
): Launch[] => {
  return launches.filter((launch) => {
    if (filter === LaunchStatus.success.toLowerCase()) {
      console.log(launch.success === true);

      return launch.success === true;
    } else if (filter === LaunchStatus.upcoming.toLocaleLowerCase()) {
      return launch.upcoming === true;
    } else {
      return true;
    }
  });
};
