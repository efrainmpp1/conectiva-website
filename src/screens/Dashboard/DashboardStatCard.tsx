import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface DashboardStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const MotionBox = motion(Box);

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({ icon, label, value }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.03 }}
    sx={{
      p: 2,
      display: "flex",
      alignItems: "center",
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
      transition: "box-shadow 0.3s ease",
      "&:hover": { boxShadow: 3 },
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
  </MotionBox>
);

export default DashboardStatCard;
