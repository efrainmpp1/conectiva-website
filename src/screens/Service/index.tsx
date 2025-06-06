import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import BackHomeButton from "../../libs/components/BackHomeButton";
import { getServiceById } from "../../services/Services";

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const service = getServiceById(id ?? "");

  if (!service) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Ferramenta não encontrada
        </Typography>
        <Typography paragraph>
          A ferramenta que você está procurando não existe ou foi removida.
        </Typography>
        <BackHomeButton sx={{ mt: 2 }} />
      </Container>
    );
  }

  const renderFormattedParagraph = (paragraph: string, key: string) => {
    if (paragraph.includes("✅") && paragraph.includes(":")) {
      return paragraph.split("\n").map((line, i) => {
        const match = line.match(/✅\s*(.*?):\s*(.*)/);
        if (match) {
          const [, boldPart, rest] = match;
          return (
            <Typography
              key={`${key}-${i}`}
              variant="body1"
              sx={{ display: "block" }}
            >
              ✅{" "}
              <Box component="span" fontWeight="bold">
                {boldPart}:
              </Box>{" "}
              {rest}
            </Typography>
          );
        }
        return (
          <Typography
            key={`${key}-${i}`}
            variant="body1"
            sx={{ display: "block" }}
          >
            {line}
          </Typography>
        );
      });
    }

    return (
      <Typography
        key={key}
        variant="body1"
        paragraph
        sx={{ whiteSpace: "pre-line" }}
      >
        {paragraph}
      </Typography>
    );
  };

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <BackHomeButton />

        <Paper
          elevation={2}
          sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, mb: 6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            {service.title}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              {Array.isArray(service.fullDescription) ? (
                service.fullDescription.map((paragraph, index) =>
                  renderFormattedParagraph(paragraph, `${index}`)
                )
              ) : (
                <Typography variant="body1" paragraph>
                  {service.fullDescription}
                </Typography>
              )}

              <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/comprar-creditos"
                >
                  🎯 Solicitar Teste Grátis (3 Créditos)
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="https://wa.me/SEUNUMERO?text=Olá, quero testar a ferramenta da NeoLeadsAI!"
                  target="_blank"
                >
                  💬 Falar com um especialista
                </Button>
              </Box>

              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ mt: 1, display: "block" }}
              >
                Sem compromisso. Teste agora mesmo a geração de leads com IA.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={service.imagePath}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: 4,
                }}
              />
            </Grid>
          </Grid>
        </Paper>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 3,
          }}
        >
          Veja o nosso vídeo de demonstração da ferramenta
        </Typography>

        <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${service.videoId}`}
            sx={{
              width: "100%",
              height: { xs: "250px", sm: "400px", md: "500px" },
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${service.title} Demo Video`}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default ServicePage;

