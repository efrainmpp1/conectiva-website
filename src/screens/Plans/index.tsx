import React from "react";
import { Box } from "@mui/material";
import PricingSection from "../Home/PricingSection";
import BackHomeButton from "../../libs/components/BackHomeButton";

const PlansPage: React.FC = () => {
  return (
    <Box>
      <PricingSection topAction={<BackHomeButton />} />
    </Box>
  );
};

export default PlansPage;
