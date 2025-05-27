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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const pricingPlans = [
  {
    title: "Starter",
    price: "R$ 49",
    credits: 5,
    examples: ["Até 2 análises de editais", "Ou 5 buscas descritivas"],
    highlight: false,
  },
  {
    title: "Profissional",
    price: "R$ 129",
    credits: 15,
    examples: ["Até 7 editais", "Ou 15 descrições personalizadas"],
    highlight: true,
  },
  {
    title: "Empresarial",
    price: "R$ 249",
    credits: 35,
    examples: ["Ideal para equipes comerciais", "Alta demanda por licitações"],
    highlight: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Planos e Créditos
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Escolha o plano ideal para sua necessidade e utilize créditos para
          acessar os serviços da Conectiva.
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.title}>
              <Card
                elevation={plan.highlight ? 6 : 2}
                sx={{
                  borderRadius: 3,
                  backgroundColor: plan.highlight ? "#e3f2fd" : "#fff",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    color="primary"
                    gutterBottom
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {plan.credits} créditos por mês
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List>
                    {plan.examples.map((item, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button variant="contained" color="primary" size="large">
                    Escolher plano
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 6 }}
          color="textSecondary"
        >
          Cada análise de edital consome 2 créditos. Cada prospecção descritiva
          consome 1 crédito.
        </Typography>
      </Container>
    </Box>
  );
};

export default PricingSection;
