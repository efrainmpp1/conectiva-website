import React from "react";
import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

const HistoryPage: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="70vh"
    textAlign="center"
  >
    <ConstructionIcon sx={{ fontSize: 80, mb: 2, color: "primary.main" }} />
    <Typography variant="h3" gutterBottom>
      Histórico em Desenvolvimento 🚧
    </Typography>
    <Typography variant="body1">
      Estamos trabalhando para disponibilizar o histórico de uso dos serviços do
      usuário. Em breve você poderá acompanhá-lo aqui.
    </Typography>
  </Box>
);

export default HistoryPage;
