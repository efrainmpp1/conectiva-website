import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useNavigate } from "react-router-dom";

const ProspeccaoPage: React.FC = () => {
  const navigate = useNavigate();

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
      >
        Voltar para o Painel
      </Button>
    </Box>
  );
};

export default ProspeccaoPage;
