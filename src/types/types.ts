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
  crew: Crew[];
  rocket: string;
}

export enum LaunchStatus {
  "success" = "SUCCESS",
  "upcoming" = "Upcoming",
}

export interface Crew {
  id: string;
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
  status: string;
}
