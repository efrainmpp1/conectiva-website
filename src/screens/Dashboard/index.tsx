import React from "react";
import { Box, Typography } from "@mui/material";

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ mt: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Painel do Usuário
      </Typography>
    </Box>
  );
};

export default DashboardPage;
