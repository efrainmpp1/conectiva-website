import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const AboutPreview: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: theme.palette.background.default,
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
                Aceleramos a prospecção de clientes com IA avançada.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Nossa missão é democratizar a IA para qualquer empresa,
                automatizando a busca e o contato com potenciais clientes.
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate("/sobre")}
              >
                Learn More
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
                borderRadius: theme.shape.borderRadius,
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
