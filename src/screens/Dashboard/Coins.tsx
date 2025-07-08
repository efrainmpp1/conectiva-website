import React, { useEffect, useState } from "react";
import { Card, Typography, Button, Box, Snackbar, Alert } from "@mui/material";
import { useAuth } from "../../libs/context/AuthContext";
import { getUserByFirebaseUid } from "../../services/users";

const CoinsPage: React.FC = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!user) return;
      try {
        const data = await getUserByFirebaseUid(user.uid);
        setBalance(data.coins);
      } catch (err) {
        console.error("Erro ao buscar saldo de moedas", err);
      }
    };

    fetchBalance();
  }, [user]);

  const handleBuyCredits = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ p: 4, maxWidth: 400, width: "100%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Saldo Atual
        </Typography>
        <Typography variant="h3" gutterBottom>
          {balance} moedas
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          As moedas são utilizadas para executar agentes de IA e acessar
          funcionalidades exclusivas.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBuyCredits}
        >
          Comprar Mais Moedas
        </Button>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          variant="filled"
        >
          Estamos em fase de testes e em breve abriremos para compra de créditos e planos.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CoinsPage;
