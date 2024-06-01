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
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateFormatterUtils";

interface LaunchItemProps {
  launch: Launch;
  onItemSelect: (selectedLaunch: Launch) => void;
}

const LaunchItem: React.FC<LaunchItemProps> = ({ launch, onItemSelect }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    onItemSelect(launch);
    navigate(`/detail/${launch.id}`);
  };

  return (
    <Card maxW="lg" className="card" onClick={handleItemClick}>
      <CardBody>
        <Image src={launch.image} alt={launch.name} borderRadius="lg" />
        <Stack mt="6" spacing="5">
          <Heading size="md">{launch.name}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text>{launch.details}</Text>
        <Text>{formatDate(launch.date)}</Text>
      </CardFooter>
    </Card>
  );
};

export default LaunchItem;
