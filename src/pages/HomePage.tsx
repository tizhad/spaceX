import React, { useEffect, useState } from "react";
import { getLaunches } from "../api/spacex-api";
import LaunchItem from "../components/LaunchItem/LaunchItem";
import { Launch } from "../types/types";
import "./HomePage.css";

function HomePage() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    const data = await getLaunches();

    const formattedData = data.map((launch: any) => {
      return {
        ...launch,
        image: launch.links.patch.large,
      } as Launch;
    });
    setLaunches(formattedData);
  };

  return (
    <div className="container">
      {launches.map((launch: Launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </div>
  );
}

export default HomePage;
