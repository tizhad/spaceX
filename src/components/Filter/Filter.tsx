import React, { useState } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Launch } from "../../types/types";
import "./Filter.css";
import {
  filterLaunchesByDate,
  filterLaunchesByStatus,
} from "../../utils/filter";

interface LaunchFilterProps {
  launches: Launch[];
  onFilterChange: (filteredLaunches: Launch[], filterTitle: string) => void;
}

const LaunchFilter: React.FC<LaunchFilterProps> = ({
  launches,
  onFilterChange,
}) => {
  const [filterTitle, setFilterTitle] = useState<string>("All");
  const [filterDate, setFilterDate] = useState<string>("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterTerm = e.target.value;
    setFilterTitle(filterTerm);

    let allLaunches = [...launches];
    const filteredLaunches = filterLaunchesByStatus(allLaunches, filterTerm);

    onFilterChange(filteredLaunches, filterTerm);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    let filteredLaunches = filterLaunchesByStatus(launches, filterTitle);
    if (selectedDate) {
      filteredLaunches = filterLaunchesByDate(filteredLaunches, selectedDate);
    }

    onFilterChange(filteredLaunches, filterTitle);
  };

  return (
    <div className="filter">
      <FormControl mb={4}>
        <FormLabel>Launch Date</FormLabel>
        <Input type="date" value={filterDate} onChange={handleDateChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Launch Status</FormLabel>
        <Select value={filterTitle} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="success">Success</option>
          <option value="upcoming">Upcoming</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default LaunchFilter;
