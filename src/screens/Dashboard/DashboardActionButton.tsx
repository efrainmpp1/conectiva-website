import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

interface DashboardActionButtonProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const MotionBox = motion.create(Box);

const DashboardActionButton: React.FC<DashboardActionButtonProps> = ({ icon, label, to }) => (
  <MotionBox
    component={RouterLink}
    to={to}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05 }}
    sx={(theme) => ({
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.gradients.purplePink,
      color: theme.palette.common.white,
      borderRadius: 2,
      boxShadow: theme.customShadows.neon,
      p: 3,
      height: "100%",
      transition: "box-shadow 0.3s ease",
      '&:hover': { boxShadow: theme.customShadows.button },
    })}
  >
    <Box
      sx={(theme) => ({
        mb: 1,
        p: 1,
        borderRadius: "50%",
        background: theme.palette.gradients.bluePurple,
        boxShadow: theme.customShadows.button,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
      aria-label={label}
    >
      {icon}
    </Box>
    <Typography variant="subtitle1" align="center">
      {label}
    </Typography>
  </MotionBox>
);

export default DashboardActionButton;
