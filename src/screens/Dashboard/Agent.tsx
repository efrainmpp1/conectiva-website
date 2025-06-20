import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FileText, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgentPage: React.FC = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Análise de Editais de Licitação",
      description:
        "Envie um edital em PDF e descubra empresas compatíveis para a licitação.",
      icon: <FileText size={36} />,
      path: "/dashboard/analise-edital",
    },
    {
      title: "Prospecção Inteligente de Empresas",
      description:
        "Descreva o tipo de empresa que procura e a IA retorna opções relevantes.",
      icon: <Search size={36} />,
      path: "/dashboard/prospeccao-inteligente",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Escolha a funcionalidade desejada
      </Typography>
      <Grid container spacing={3}>
        {options.map((option) => (
          <Grid item xs={12} md={6} key={option.path}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea
                onClick={() => navigate(option.path)}
                sx={{ height: "100%" }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2 }}>{option.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {option.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {option.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AgentPage;
