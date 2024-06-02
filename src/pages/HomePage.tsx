import React, { useEffect, useState } from "react";
import { getLaunches } from "../api/spacex-api";
import LaunchItem from "../components/LaunchItem/LaunchItem";
import { Launch } from "../types/types";
import "./HomePage.css";
import { Box, Input, Spinner } from "@chakra-ui/react";
import LaunchFilter from "../components/Filter/Filter";
import { formatApiData } from "../utils/formatter";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterTitle, setFilterTitle] = useState<string>("All");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchLaunches();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, launches]);

  const applyFilters = () => {
    let filtered = launches;

    if (searchTerm) {
      filtered = filtered.filter((launch) =>
        launch.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredLaunches(filtered);
  };

  const fetchLaunches = async () => {
    try {
      const data = await getLaunches();
      const formattedData = formatApiData(data);
      setLaunches(formattedData);
    } catch (error) {
      setErrorMessage("There was an error, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLaunchItemClick = (selectedLaunch: Launch): void => {
    navigate(`/detail/${selectedLaunch.id}`);
  };

  const handleFilterChange = (
    filteredLaunches: Launch[],
    newFilterTitle: string
  ) => {
    setFilteredLaunches(filteredLaunches);
    setFilterTitle(newFilterTitle);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      <div className="container">
        <div className="search">
          <Input
            placeholder="Search by rocket name"
            value={searchTerm}
            onChange={handleSearchChange}
            mb="2"
          />
        </div>
        <div className="filter-row">
          <LaunchFilter
            launches={launches}
            onFilterChange={handleFilterChange}
          />
        </div>
        {isLoading ? (
          <Box textAlign="center">
            <Spinner size="xl" speed="0.65s" />
            <p>Loading Launches...</p>
          </Box>
        ) : (
          <div>
            {launches.length === 0 ? (
              <p>No launches found.</p>
            ) : (
              <div>
                <div className="filter-title">
                  <p>{filterTitle}</p>
                </div>

                <div className="launch-list">
                  {filteredLaunches.length > 0 ? (
                    filteredLaunches.map((launch: Launch) => (
                      <LaunchItem
                        key={launch.id}
                        launch={launch}
                        onItemSelect={handleLaunchItemClick}
                      />
                    ))
                  ) : (
                    <h1>No search results! Please try again.</h1>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
