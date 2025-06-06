import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ActionBlockProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  color: string;
}

const ActionBlock: React.FC<ActionBlockProps> = ({ icon, label, to, color }) => (
  <Box
    component={RouterLink}
    to={to}
    sx={{
      textDecoration: "none",
      color: "common.white",
      bgcolor: color,
      borderRadius: 2,
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      '&:hover': { opacity: 0.9 },
    }}
  >
    {icon}
    <Typography variant="subtitle1" sx={{ mt: 1 }}>
      {label}
    </Typography>
  </Box>
);

export default ActionBlock;
