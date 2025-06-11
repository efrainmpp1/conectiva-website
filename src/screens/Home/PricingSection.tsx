import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const pricingPlans = [
  {
    title: "Básico",
    price: "R$ 49",
    credits: 5,
    features: [
      "5 créditos mensais",
      "Até 2 análises de editais",
      "Ou 5 buscas descritivas",
      "Suporte por email",
    ],
    highlight: false,
  },
  {
    title: "Intermediário",
    price: "R$ 129",
    credits: 15,
    features: [
      "15 créditos mensais",
      "Até 7 análises de editais",
      "Ou 15 buscas descritivas",
      "Suporte prioritário",
      "Relatórios detalhados",
    ],
    highlight: true,
  },
  {
    title: "Profissional",
    price: "R$ 249",
    credits: 35,
    features: [
      "35 créditos mensais",
      "Análises ilimitadas de editais",
      "Buscas descritivas ilimitadas",
      "Suporte 24/7",
      "API de integração",
      "Dashboard personalizado",
    ],
    highlight: false,
  },
];

interface PricingSectionProps {
  topAction?: React.ReactNode;
}

const PricingSection: React.FC<PricingSectionProps> = ({ topAction }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 3 },
        backgroundColor: theme.palette.background.default,
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
            Planos e Créditos
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
            Escolha um plano e adicione créditos extras quando quiser.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.title}>
              <Card
                elevation={plan.highlight ? 8 : 2}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  ...(plan.highlight && {
                    backgroundColor: theme.palette.background.paper,
                    border: "2px solid",
                    borderColor: theme.palette.primary.light,
                    "&::before": {
                      content: '"Mais Popular"',
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.primary.light,
                      border: "1px solid",
                      borderColor: theme.palette.primary.light,
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    },
                  }),
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {plan.price}
                    <Typography
                      component="span"
                      variant="subtitle1"
                      sx={{ color: "text.secondary" }}
                    >
                      /mês
                    </Typography>
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List>
                    {plan.features.map((feature, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={plan.highlight ? "contained" : "outlined"}
                    color="primary"
                    size="large"
                    onClick={() => navigate("/planos")}
                    sx={{
                      py: 1.5,
                      fontWeight: "bold",
                      ...(plan.highlight && {
                        backgroundColor: "primary.dark",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          opacity: 0.9,
                        },
                      }),
                    }}
                  >
                    {plan.highlight ? "Start Free Trial" : "Select Plan"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/planos")}
            sx={{
              mr: 2,
              color: theme.palette.primary.light,
              borderColor: theme.palette.primary.light,
            }}
          >
            View Plans
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/planos")}
          >
            Buy Credits
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4 }}
          color="text.secondary"
        >
          Cada análise de edital consome 2 créditos. Cada busca descritiva
          consome 1 crédito.
        </Typography>
      </Container>
    </Box>
  );
};

export default PricingSection;
