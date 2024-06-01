import React, { useEffect, useState } from "react";
import { getLaunches } from "../api/spacex-api";
import LaunchItem from "../components/LaunchItem/LaunchItem";
import { Launch } from "../types/types";
import "./HomePage.css";
import { Box, Input, Spinner } from "@chakra-ui/react";

function HomePage() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchLaunches();
  }, []);

  useEffect(() => {
    filterLaunches(search);
  }, [search, launches]);

  const fetchLaunches = async () => {
    const data = await getLaunches();

    const formattedData = data.map((launch: any) => {
      return {
        ...launch,
        image: launch.links.patch.large,
        date: launch.date_local,
      } as Launch;
    });
    setLaunches(formattedData);
    setLoading(false);
  };

  const filterLaunches = (searchTerm: string) => {
    let filtered = launches;

    if (searchTerm) {
      filtered = filtered.filter((launch) =>
        launch.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredLaunches(filtered);
  };

  const searchLaunchByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  const handleLaunchItemClick = (selectedLaunch: Launch) => {
    console.log("Selected Launch:", selectedLaunch);
  };

  return (
    <div className="container">
      <Input
        placeholder="Search by rocket name"
        value={search}
        onChange={searchLaunchByName}
        mb="2"
      />
      {isLoading ? (
        <Box textAlign="center">
          <Spinner size="xl" speed="0.65s" />
          <p>Loading Launches...</p>
        </Box>
      ) : (
        <>
          {filteredLaunches.length > 0 ? (
            filteredLaunches.map((launch: Launch) => (
              <LaunchItem
                key={launch.id}
                launch={launch}
                onItemSelect={handleLaunchItemClick}
              />
            ))
          ) : (
            <h1>No search results! Please try another name.</h1>
          )}
        </>
      )}
    </div>
  );
}

export default HomePage;
