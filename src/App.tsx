import React from "react";
import HomePage from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LaunchDetail from "./components/LaunchDetail/LaunchDetail";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<LaunchDetail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
