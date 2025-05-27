import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
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
        <Box sx={{ textAlign: "center", mb: 4 }}>
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
                left: "50%",
                transform: "translateX(-50%)",
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
              mx: "auto",
              mt: 4,
              mb: 4,
            }}
          >
            Estamos revolucionando a maneira como as empresas abordam a geração
            de leads e a aquisição de clientes com nossa plataforma alimentada
            por IA.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/sobre")}
            sx={{ mt: 2 }}
          >
            Saiba mais sobre nós
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPreview;