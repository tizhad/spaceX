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

interface LaunchItemProps {
  launch: Launch;
}

const LaunchItem: React.FC<LaunchItemProps> = ({ launch }) => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Card maxW="lg" className="card" onClick={() => handleItemClick(1)}>
      <CardBody>
        <Image src={launch.image} alt={launch.name} borderRadius="lg" />
        <Stack mt="6" spacing="5">
          <Heading size="md">{launch.name}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text>{launch.details}</Text>
        <Text>{launch.date}</Text>
      </CardFooter>
    </Card>
  );
};

export default LaunchItem;
