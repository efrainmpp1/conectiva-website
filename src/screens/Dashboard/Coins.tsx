import React, { useEffect, useState } from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getBalance, buyCredits } from "../../services/credits";

const CoinsPage: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const value = await getBalance();
        setBalance(value);
      } catch (err) {
        console.error("Erro ao buscar saldo de moedas", err);
      }
    };

    fetchBalance();
  }, []);

  const handleBuyCredits = async () => {
    try {
      await buyCredits();
      navigate("/comprar-moedas");
    } catch (err) {
      console.error("Erro ao comprar moedas", err);
    }
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
    </Box>
  );
};

export default CoinsPage;
