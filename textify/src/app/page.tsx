"use client";

import { Grid } from "@mui/material";
import { useState } from "react";
import Converter from "./components/converter/convertor";
import ToolCards from "./components/tool-card/tool-card";
import DetailsComponent from "./components/tool-details/tool-details";
import toolsData from "./components/tool-card/tool-data"; // Assuming you have toolsData available here

export default function Home() {
  // State to track the selected tool, initialized with the first tool from toolsData
  const [selectedTool, setSelectedTool] = useState(toolsData[0]); // Set the first tool by default

  // Function to handle tool selection from ToolCards
  const handleToolClick = (tool:any) => {
    setSelectedTool(tool); // Update the state with title, description, and details
  };

  // Sample features data for the selected tool
  // const toolFeatures = [
  //   { title: "High Accuracy", description: "Extract text with OCR and maintain accuracy." },
  //   { title: "Supports Multiple Formats", description: "Supports PNG, JPG, and other image formats." },
  //   { title: "Fast and Easy", description: "Get your text extraction done in seconds." },
  // ];

  return (
    <>
      <Grid sx={{ mx: "10%" }}>
        {/* Pass selectedTool title, description, and details dynamically to the Converter */}
        <Converter
          title={selectedTool.title}
          description={selectedTool.description}
        />
      </Grid>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={12} sx={{ mx: "10%" }}>
          <h1>Tool Options</h1>
          {/* Pass handleToolClick to ToolCards to change the selected tool on click */}
          <ToolCards onToolClick={handleToolClick} />
        </Grid>
      </Grid>

      {/* Details Component with dynamic data */}
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={10} md={8} lg={12} sx={{ mx: "10%" }}>
          <DetailsComponent
            title={selectedTool.title}
            description={selectedTool.description}
            // features={toolFeatures}
            details={selectedTool.details} // Pass the details to the DetailsComponent
            icon={selectedTool.icon} // Dynamically load icons if needed
          />
        </Grid>
      </Grid>
    </>
  );
}
