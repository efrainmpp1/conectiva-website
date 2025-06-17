import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

interface RecentActivityItemProps {
  icon: React.ReactNode;
  description: string;
  date: string;
  statusColor?: "primary" | "secondary" | "error" | "warning" | "success";
  actionLabel?: string;
  actionTo?: string;
}

const MotionBox = motion.create(Box);

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  icon,
  description,
  date,
  statusColor = "primary",
  actionLabel,
  actionTo,
}) => (
  <MotionBox
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    sx={(theme) => ({
      display: "flex",
      alignItems: "center",
      p: 2,
      mb: 1,
      background: theme.palette.gradients.bluePurple,
      color: theme.palette.common.white,
      borderRadius: 2,
      boxShadow: theme.customShadows.neon,
    })}
  >
    <Box
      sx={(theme) => ({
        mr: 2,
        p: 0.5,
        borderRadius: "50%",
        background: theme.palette.gradients.purplePink,
        boxShadow: theme.customShadows.button,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette[statusColor].main,
      })}
      aria-label="Ícone da atividade"
    >
      {icon}
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="caption" color="text.secondary">
        {date}
      </Typography>
    </Box>
    {actionLabel && actionTo && (
      <Button
        component={RouterLink}
        to={actionTo}
        size="small"
        aria-label={actionLabel}
      >
        {actionLabel}
      </Button>
    )}
  </MotionBox>
);

export default RecentActivityItem;
