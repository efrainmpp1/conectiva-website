import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import PublicBiddingExtras from "./components/PublicBiddingExtras";
import PublicBiddingHero from "./components/PublicBiddingHero";
import PublicBiddingBenefits from "./components/PublicBiddingBenefits";
import PublicBiddingAudience from "./components/PublicBiddingAudience";
import PublicBiddingFinalCTA from "./components/PublicBiddingFinalCTA";
import BackHomeButton from "../../libs/components/BackHomeButton";
import { getServiceById } from "../../services/Services";
import { useAuth } from "../../libs/context/AuthContext";
import { trackEvent } from "../../libs/analytics";

interface FeatureDetailPageProps {
  serviceId?: string;
}

const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ serviceId }) => {
  const params = useParams<{ id: string }>();
  const id = serviceId ?? params.id;
  const navigate = useNavigate();
  const { user } = useAuth();
  const theme = useTheme();

  const [ctaLoading, setCtaLoading] = useState(false);

  const service = getServiceById(id ?? "");

  const handleStartClick = () => {
    setCtaLoading(true);
    trackEvent("cta_primary_click", { serviceId: id });
    setTimeout(() => {
      if (user) {
        if (id === "ai-public-bidding") {
          navigate("/agent/edital");
        } else if (id === "ai-search-companies") {
          navigate("/agent/prospeccao");
        } else {
          navigate("/dashboard");
        }
      } else {
        navigate("/cadastro");
      }
    }, 200);
  };

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
    <Box sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <BackHomeButton />

        {id === "ai-public-bidding" && (
          <>
            <PublicBiddingHero />
            <PublicBiddingBenefits />
            <PublicBiddingAudience />
          </>
        )}

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

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mt: 4 }}
              >
                Você está a 2 minutos de receber sua primeira lista de empresas qualificadas para licitação.
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleStartClick}
                  aria-label="Criar conta e testar gratuitamente"
                  sx={{
                    background: theme.palette.gradients.purplePink,
                    boxShadow: theme.customShadows.neon,
                    color: theme.palette.common.white,
                    '&:hover': {
                      background: theme.palette.gradients.bluePurple,
                    },
                  }}
                  disabled={ctaLoading}
                >
                  {ctaLoading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    '🚀 Criar Conta e Testar Grátis'
                  )}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="https://wa.me/SEUNUMERO?text=Olá, quero testar a ferramenta da NeoLeadsAI!"
                  target="_blank"
                  aria-label="Falar com um especialista pelo WhatsApp"
                  onClick={() => trackEvent('cta_whatsapp_click', { serviceId: id })}
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

        {id === "ai-public-bidding" && (
          <>
            <PublicBiddingExtras />
            <PublicBiddingFinalCTA />
          </>
        )}
      </Container>
    </Box>
  );
};

export default FeatureDetailPage;

