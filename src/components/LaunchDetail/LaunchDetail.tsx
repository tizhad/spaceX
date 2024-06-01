import React, { FC, useEffect, useState } from "react";
import { Launch } from "../../types/types";
import { useParams } from "react-router-dom";
import { getLaunchById } from "../../api/spacex-api";

const LaunchDetail: FC = () => {
  const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSelectedLaunch(id);
    }
  }, [id]);

  const getSelectedLaunch = (id: string) => {
    getLaunchById(id).then((launch) => {
      setSelectedLaunch(launch);
    });
  };

  return (
    <div className="container">
      <h1>Launch Detail</h1>
    </div>
  );
};

export default LaunchDetail;
