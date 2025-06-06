import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface DashboardActionButtonProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const DashboardActionButton: React.FC<DashboardActionButtonProps> = ({ icon, label, to }) => (
  <Box
    component={RouterLink}
    to={to}
    sx={{
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.paper",
      color: "text.primary",
      borderRadius: 2,
      boxShadow: 1,
      p: 3,
      height: "100%",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        boxShadow: 3,
        transform: "translateY(-2px)",
      },
    }}
  >
    <Box sx={{ mb: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</Box>
    <Typography variant="subtitle1" align="center">
      {label}
    </Typography>
  </Box>
);

export default DashboardActionButton;
