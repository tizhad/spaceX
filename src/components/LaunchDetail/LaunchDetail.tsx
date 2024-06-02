import React, { FC, useEffect, useState } from "react";
import { Crew, Launch } from "../../types/types";
import { useParams } from "react-router-dom";
import {
  getCrewData,
  getLaunchById,
  getLaunchRocketData,
} from "../../api/spacex-api";
import "./LaunchDetail.css";
import { Divider, Spinner } from "@chakra-ui/react";
import { formatDate, setImage } from "../../utils/formatter";

const LaunchDetail: FC = () => {
  const [selectedLaunch, setSelectedLaunch] = useState<Launch>();
  const [crew, setCrew] = useState<Crew[]>([]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getSelectedLaunch(id);
    }
  }, [id]);

  const getSelectedLaunch = async (id: string) => {
    const launch = await getLaunchById(id);
    const rocketName = await getLaunchRocketData(launch.rocket);
    launch.rocket = rocketName;
    launch.image = setImage(launch.links.patch.large);
    launch.date = launch.date_local;

    setSelectedLaunch(launch);

    const crewData = await getCrewData(launch.crew);
    setCrew(crewData);
  };

  return (
    <div className="details-container">
      {selectedLaunch ? (
        <>
          <div>
            <img src={selectedLaunch.image} alt={selectedLaunch.name} />
            <h1>Mission Name: {selectedLaunch.name}</h1>
            <h1>Rocket: {selectedLaunch.name}</h1>

            <h2>
              Launch Date:
              {formatDate(selectedLaunch.date) || "Unavailable information"}
            </h2>
            <h3>
              More Information:{" "}
              {selectedLaunch.details || "Unavailable information"}
            </h3>
          </div>
          <Divider />
          <div className="crew">
            <div className="crew-list">
              {crew.length > 0 ? (
                crew.map((crewMember) => (
                  <div key={crewMember.id} className="crew-member">
                    <p>{crewMember.name}</p>
                    <span>{crewMember.agency}</span>
                    <img src={crewMember.image} alt={crewMember.name} />
                    <h4>Status: {crewMember.status}</h4>
                    <a href={crewMember.wikipedia}>Learn More</a>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default LaunchDetail;
