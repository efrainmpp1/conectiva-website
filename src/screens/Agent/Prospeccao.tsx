import React from "react";
import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import BackDashboardButton from "../../libs/components/BackDashboardButton";

const ProspeccaoPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      textAlign="center"
    >
      <ConstructionIcon sx={{ fontSize: 80, mb: 2, color: "primary.main" }} />
      <Typography variant="h3" gutterBottom>
        Funcionalidade em Desenvolvimento 🚧
      </Typography>
      <Typography variant="body1" mb={4}>
        Estamos trabalhando nesta funcionalidade. Em breve, ela estará disponível para você!
      </Typography>
      <BackDashboardButton />
    </Box>
  );
};

export default ProspeccaoPage;
