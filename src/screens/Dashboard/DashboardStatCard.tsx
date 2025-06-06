import React from "react";
import { Box, Typography } from "@mui/material";

interface DashboardStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({ icon, label, value }) => (
  <Box
    sx={{
      p: 2,
      display: "flex",
      alignItems: "center",
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
    }}
  >
    <Box sx={{ mr: 2, color: "text.secondary" }}>{icon}</Box>
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Box>
  </Box>
);

export default DashboardStatCard;
