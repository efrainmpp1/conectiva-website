import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: { xs: "50%", md: "0" },
                    transform: { xs: "translateX(-50%)", md: "none" },
                    width: "80px",
                    height: "4px",
                    backgroundColor: "primary.main",
                    borderRadius: "2px",
                  },
                }}
              >
                Sobre a Conectiva
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  maxWidth: "800px",
                  mt: 4,
                  mb: 3,
                }}
              >
                Estamos revolucionando a maneira como as empresas abordam a geração
                de leads e a aquisição de clientes com nossa plataforma alimentada
                por IA.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Na Conectiva, nossa missão é democratizar a tecnologia avançada de
                IA para empresas de todos os portes. Nossa plataforma analisa
                grandes volumes de dados para identificar clientes em potencial
                ideais, prever o comportamento do cliente e automatizar o contato
                personalizado em grande escala.
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate("/sobre")}
              >
                Saiba mais sobre nós
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Equipe Conectiva"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPreview;
