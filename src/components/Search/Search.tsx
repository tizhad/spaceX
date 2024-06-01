import { Box, Flex, Input, List, ListItem } from "@chakra-ui/react";
import React, { FC } from "react";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div>
      <p> search</p>
    </div>
    //  <Flex direction="column" align="center" mb="4">
    //    <Input
    //      placeholder="Search by rocket name"
    //      value={search}
    //      onChange={(e) => setSearch(e.target.value)}
    //      mb="2"
    //    />
    //    {suggestions.length > 0 && (
    //      <Box
    //        borderWidth="1px"
    //        borderRadius="lg"
    //        maxHeight="200px"
    //        overflowY="auto"
    //        width="100%"
    //        maxWidth="400px"
    //        zIndex="1000"
    //        bg="white"
    //      >
    //        <List>
    //          {suggestions.map((suggestion) => (
    //            <ListItem
    //              key={suggestion.id}
    //              onClick={() => handleSelectRocket(suggestion.rocket.name)}
    //              cursor="pointer"
    //              padding="8px"
    //              _hover={{ backgroundColor: "gray.200" }}
    //            >
    //              {suggestion.rocket.name}
    //            </ListItem>
    //          ))}
    //        </List>
    //      </Box>
    //    )}
    //  </Flex>
  );
};

export default Search;
