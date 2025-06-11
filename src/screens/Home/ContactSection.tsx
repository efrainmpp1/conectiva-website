import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContactForm from "../../libs/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactSectionProps {
  topAction?: React.ReactNode;
}

const ContactSection: React.FC<ContactSectionProps> = ({ topAction }) => {
  const theme = useTheme();
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 3 },
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        {topAction && <Box>{topAction}</Box>}
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            Contate-nos
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mt: 4,
            }}
          >
            Tem dúvidas ou está pronto para transformar sua estratégia de
            geração de leads? Estamos aqui para ajudar.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight={600}>
                Entre em Contato
              </Typography>

              <Typography paragraph color="text.secondary" sx={{ mb: 4 }}>
                Estamos animados para ouvir você! Seja uma pergunta sobre nossas
                ferramentas, preços ou qualquer outra coisa, nossa equipe está
                pronta para responder a todas as suas dúvidas.
              </Typography>

              <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                <MapPin
                  size={24}
                  color={theme.palette.primary.main}
                  style={{ marginRight: "12px" }}
                />
                <Typography>Natal, RN</Typography>
              </Box>

              <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                <Mail
                  size={24}
                  color={theme.palette.primary.main}
                  style={{ marginRight: "12px" }}
                />
                <Typography>info@conectiva.com</Typography>
              </Box>

              <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
                <Phone
                  size={24}
                  color={theme.palette.primary.main}
                  style={{ marginRight: "12px" }}
                />
                <Typography>(84) 99975-0179</Typography>
              </Box>

              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0470008949486!2d-122.41659138478173!3d37.77692797975828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c5f9a2937%3A0x5aede6843450d91c!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1653508161585!5m2!1sen!2sus"
                sx={{
                  border: 0,
                  width: "100%",
                  height: "250px",
                  borderRadius: theme.shape.borderRadius,
                  mt: "auto",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
