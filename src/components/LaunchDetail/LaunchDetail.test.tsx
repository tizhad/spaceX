import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LaunchDetail from "./LaunchDetail";
import {
  getLaunchById,
  getCrewData,
  getLaunchRocketData,
} from "../../api/spacex-api";
import { Crew, Launch } from "../../types/types";

jest.mock("../../api/spacex-api");

const mockGetLaunchById = getLaunchById as jest.MockedFunction<
  typeof getLaunchById
>;
const mockGetCrewData = getCrewData as jest.MockedFunction<typeof getCrewData>;
const mockGetLaunchRocketData = getLaunchRocketData as jest.MockedFunction<
  typeof getLaunchRocketData
>;

const mockLaunch: Launch = {
  id: "1",
  name: "Falcon 9",
  rocket: "5e9d0d95eda69955f709d1eb",
  image: "https://example.com/image.png",
  date: "2020-12-12T12:34:00Z",
  details: "Mock launch details",
  crew: [
    {
      id: "1",
      name: "John Doe",
      agency: "NASA",
      image: "https://example.com/john_doe.png",
      wikipedia: "https://en.wikipedia.org/wiki/John_Doe",
      status: "active",
      launches: [],
    },
  ],
  payloads: [],
  upcoming: false,
  success: false,
  patch: "",
};

const mockCrew: Crew[] = [
  {
    id: "1",
    name: "John Doe",
    agency: "NASA",
    image: "https://example.com/john_doe.png",
    wikipedia: "https://en.wikipedia.org/wiki/John_Doe",
    status: "active",
    launches: [],
  },
];

describe("<LaunchDetail />", () => {
  beforeEach(() => {
    mockGetLaunchById.mockResolvedValue(mockLaunch);
    mockGetCrewData.mockResolvedValue(mockCrew);
    mockGetLaunchRocketData.mockResolvedValue("Falcon 9 Rocket");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("It should show loading state initially", () => {
    render(
      <BrowserRouter>
        <LaunchDetail />
      </BrowserRouter>
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("It should render launch details and crew correctly", async () => {
    render(
      <BrowserRouter>
        <LaunchDetail />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Mission Name: Falcon 9")).toBeInTheDocument()
    );

    expect(screen.getByText("Rocket: Falcon 9 Rocket")).toBeInTheDocument();
    expect(screen.getByText("Launch Date: 2020-12-12")).toBeInTheDocument();
    expect(
      screen.getByText("More Information: Mock launch details")
    ).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("NASA")).toBeInTheDocument();
    expect(screen.getByAltText("Falcon 9")).toBeInTheDocument();
    expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
