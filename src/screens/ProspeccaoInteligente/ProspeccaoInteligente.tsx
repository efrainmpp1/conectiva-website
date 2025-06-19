import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ProspeccaoInteligentePage: React.FC = () => {
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // TODO: integrate with prospection API
      await new Promise((resolve) => setTimeout(resolve, 500));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Prospecção Inteligente</Typography>
        <Typography variant="body2">
          Descreva as características das empresas que você deseja encontrar. Nossa IA analisará e retornará empresas compatíveis.
        </Typography>
        <TextField
          multiline
          fullWidth
          minRows={5}
          variant="outlined"
          label="Descrição da Prospecção"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Ex: Startups na área de saúde no estado de MG com até 10 funcionários"
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={<SearchIcon />}
        >
          Executar Prospecção
        </Button>
      </Stack>
    </Container>
  );
};

export default ProspeccaoInteligentePage;
