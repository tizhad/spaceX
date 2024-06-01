import React, { useEffect, useState } from "react";
import { getLaunches } from "../api/spacex-api";
import LaunchItem from "../components/LaunchItem/LaunchItem";
import { Launch } from "../types/types";
import "./HomePage.css";
import { Spinner } from "@chakra-ui/react";

function HomePage() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLaunches();
  }, []);

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

  const handleLaunchItemClick = (selectedLaunch: Launch) => {
    console.log("Selected Launch:", selectedLaunch);
  };

  return (
    <div className="container">
      {isLoading ? (
        <div>
          <Spinner size="xl" speed="0.65s" />
          <p>Loading Launches...</p>
        </div>
      ) : (
        launches.map((launch: Launch) => (
          <LaunchItem
            key={launch.id}
            launch={launch}
            onItemSelect={handleLaunchItemClick}
          />
        ))
      )}
    </div>
  );
}

export default HomePage;
