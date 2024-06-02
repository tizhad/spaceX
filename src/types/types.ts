export interface Launch {
  id: string;
  name: string;
  payloads: string[];
  upcoming: boolean;
  success: boolean;
  patch: string;
  date: string;
  image: string;
  details: string;
}

export enum LaunchStatus {
  "success" = "SUCCESS",
  "upcoming" = "Upcoming",
}
