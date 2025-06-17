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

const MotionBox = motion(Box);

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
    sx={{
      display: "flex",
      alignItems: "center",
      p: 2,
      mb: 1,
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
      transition: "box-shadow 0.3s ease",
      "&:hover": { boxShadow: 3 },
    }}
  >
    <Box sx={{ mr: 2, color: `${statusColor}.main` }} aria-label="Ícone da atividade">
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
