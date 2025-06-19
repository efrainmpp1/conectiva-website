import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const ProspeccaoInteligentePage: React.FC = () => {
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ maxWidth: 600, width: "100%", mx: "auto", px: 2, mt: 4 }}>
        <Stack spacing={3}>
          <Typography variant="h5">Prospecção Inteligente</Typography>
          <Typography variant="body2">
            Descreva as características das empresas que você deseja encontrar. Nossa IA analisará e retornará empresas compatíveis.
          </Typography>
          <TextField
            multiline
            fullWidth
            minRows={6}
            variant="outlined"
            label="Descrição da Prospecção"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Ex: Startups na área de saúde no estado de MG com até 10 funcionários"
            sx={{
              mt: 2,
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              px: 1.5,
            }}
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
      </Box>
    </Container>
  );
};

export default ProspeccaoInteligentePage;
