import React from "react";
import { Box, Typography, LinearProgress, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import MiniTrendChart from "./MiniTrendChart";

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
  chartData?: { value: number }[];
  chartColor?: string;
  chartArea?: boolean;
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
  chartData,
  chartColor,
  chartArea,
}) => {
  const theme = useTheme();
  const color = chartColor || theme.palette[statusColor].main;

  return (
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
        background: theme.palette.gradients.bluePurple,
        color: "common.white",
        borderRadius: 2,
        boxShadow: theme.customShadows.neon,
      }}
    >
      <Box
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          color: theme.palette[statusColor].light,
        }}
      >
        <Box
          sx={{
            mr: 1,
            p: 0.5,
            borderRadius: "50%",
            background: theme.palette.gradients.purplePink,
            boxShadow: theme.customShadows.button,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={label}
        >
          {icon}
        </Box>
        <Typography variant="caption" sx={{ color: "grey.100" }}>
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
    {chartData && (
      <Box sx={{ width: "100%", mt: 1 }}>
        <MiniTrendChart data={chartData} color={color} area={chartArea} ariaLabel={label} />
      </Box>
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
};

export default DashboardStatCard;
