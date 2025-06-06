import React from "react";
import { Box, Typography } from "@mui/material";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label, value, color }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      p: 2,
      borderRadius: 2,
      bgcolor: color,
      color: "common.white",
    }}
  >
    <Box sx={{ mr: 2 }}>{icon}</Box>
    <Box>
      <Typography variant="subtitle2" color="inherit">
        {label}
      </Typography>
      <Typography variant="h6" color="inherit">
        {value}
      </Typography>
    </Box>
  </Box>
);

export default InfoCard;
