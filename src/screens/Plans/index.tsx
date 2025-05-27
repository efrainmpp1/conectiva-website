import React from "react";
import { Box } from "@mui/material";
import PricingSection from "../Home/PricingSection";

const PlansPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <PricingSection />
    </Box>
  );
};

export default PlansPage;