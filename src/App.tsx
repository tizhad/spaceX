import React from "react";
import HomePage from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Router, Routes } from "react-router-dom";
import LaunchDetail from "./components/LaunchDetail/LaunchDetail.lazy";

function App() {
  return (
    <ChakraProvider>
      <Router location={""} navigator={undefined}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<LaunchDetail />} />
        </Routes>
      </Router>
      <HomePage></HomePage>
    </ChakraProvider>
  );
}

export default App;
