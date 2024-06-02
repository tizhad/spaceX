import React from "react";
import "../../index.css";
import { Launch } from "../../types/types";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "../LaunchItem/LaunchItem.css";
import { formatDate, truncateText } from "../../utils/formatter";

interface LaunchItemProps {
  launch: Launch;
  onItemSelect: (selectedLaunch: Launch) => void;
}

const LaunchItem: React.FC<LaunchItemProps> = ({ launch, onItemSelect }) => {
  const handleItemClick = () => {
    onItemSelect(launch);
  };

  const launchDetails =
    launch.details && launch.details.trim().length > 0
      ? launch.details
      : "No More Information Available...";

  return (
    <Card maxW="lg" className="card" onClick={handleItemClick}>
      <CardBody>
        <Image
          src={launch.image}
          alt={launch.name}
          borderRadius="lg"
          minH={600}
        />
        <Stack mt="6" spacing="5">
          <Heading size="md">{launch.name}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text>{truncateText(launchDetails, 110)}</Text>{" "}
        <Text>{formatDate(launch.date)}</Text>
      </CardFooter>
    </Card>
  );
};

export default LaunchItem;
