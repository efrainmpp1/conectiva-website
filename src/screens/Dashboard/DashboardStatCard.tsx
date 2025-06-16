import React from "react";
import { Box, Typography, LinearProgress, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

interface DashboardStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  progress?: number;
  /**
   * MUI color applied to progress bar and icon
   */
  statusColor?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "success";
  actionLabel?: string;
  actionTo?: string;
}

const MotionBox = motion(Box);

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  icon,
  label,
  value,
  progress,
  statusColor = "primary",
  actionLabel,
  actionTo,
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.03 }}
    sx={{
      p: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
      transition: "box-shadow 0.3s ease",
      "&:hover": { boxShadow: 3 },
    }}
  >
    <Box sx={{ mb: 1, display: "flex", alignItems: "center", color: `${statusColor}.main` }}>
      <Box sx={{ mr: 1 }}>{icon}</Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
      {value}
    </Typography>
    {typeof progress === "number" && (
      <LinearProgress
        variant="determinate"
        value={progress}
        color={statusColor}
        sx={{ mt: 1, width: "100%", height: 6, borderRadius: 3 }}
      />
    )}
    {actionLabel && actionTo && (
      <Button
        component={RouterLink}
        to={actionTo}
        size="small"
        sx={{ mt: 1 }}
        aria-label={actionLabel}
      >
        {actionLabel}
      </Button>
    )}
  </MotionBox>
);

export default DashboardStatCard;
