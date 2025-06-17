import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

interface NextStepItemProps {
  icon: React.ReactNode;
  text: string;
  actionLabel: string;
  actionTo: string;
}

const MotionBox = motion(Box);

const NextStepItem: React.FC<NextStepItemProps> = ({
  icon,
  text,
  actionLabel,
  actionTo,
}) => (
  <MotionBox
    initial={{ opacity: 0, x: 10 }}
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
    <Box sx={{ mr: 2 }} aria-label="Ícone da sugestão">
      {icon}
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body2">{text}</Typography>
    </Box>
    <Button
      component={RouterLink}
      to={actionTo}
      size="small"
      aria-label={actionLabel}
    >
      {actionLabel}
    </Button>
  </MotionBox>
);

export default NextStepItem;
