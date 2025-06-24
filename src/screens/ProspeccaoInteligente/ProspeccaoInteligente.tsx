import React from "react";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useProspeccaoInteligente } from "../../hooks/useProspeccaoInteligente";

const ProspeccaoInteligentePage: React.FC = () => {
  const theme = useTheme();
  const {
    descricao,
    setDescricao,
    status,
    erro,
    csvUrl,
    executarProspeccao,
  } = useProspeccaoInteligente();

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
            onClick={executarProspeccao}
            disabled={status === 'processando'}
            startIcon={status === 'processando' ? undefined : <SearchIcon />}
          >
            {status === 'processando' ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Executar Prospecção'
            )}
          </Button>

          {csvUrl && (
            <Button
              href={csvUrl}
              download="empresas_compatíveis.csv"
              variant="outlined"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
            >
              Baixar Arquivo CSV
            </Button>
          )}

          {erro && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {erro}
            </Alert>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default ProspeccaoInteligentePage;
