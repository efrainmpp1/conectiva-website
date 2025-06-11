import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { TrendingUp, Users, Award, BarChart2 } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
}

interface AboutSectionProps {
  topAction?: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ topAction }) => {
  const theme = useTheme();

  const stats: StatItem[] = [
    {
      icon: <TrendingUp size={36} color={theme.palette.primary.main} />,
      number: "87%",
      label: "Aumento em leads qualificados",
    },
    {
      icon: <Users size={36} color={theme.palette.primary.main} />,
      number: "1.200+",
      label: "Clientes satisfeitos",
    },
    {
      icon: <Award size={36} color={theme.palette.primary.main} />,
      number: "18",
      label: "Prêmios da indústria",
    },
    {
      icon: <BarChart2 size={36} color={theme.palette.primary.main} />,
      number: "5M+",
      label: "Leads gerados",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 3 },
        background: theme.palette.background.default,
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
            Sobre a Conectiva
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
            Estamos revolucionando a maneira como as empresas abordam a geração
            de leads e a aquisição de clientes com nossa plataforma alimentada
            por IA.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Nossa Missão
            </Typography>
            <Typography paragraph>
              Na Conectiva, nossa missão é democratizar a tecnologia avançada de
              IA para empresas de todos os portes. Acreditamos que todas as
              empresas merecem acesso a ferramentas de ponta para geração de
              leads, que antes só estavam disponíveis para empresas com
              orçamentos enormes.
            </Typography>
            <Typography paragraph>
              Nossa plataforma com tecnologia de IA analisa grandes volumes de
              dados para identificar clientes em potencial ideais, prever o
              comportamento do cliente e automatizar o contato personalizado em
              grande escala. Ajudamos empresas de todos os setores a aumentar
              suas taxas de conversão em uma média de 43%, reduzindo seus custos
              de aquisição de clientes em 37%.
            </Typography>
            <Typography>
              Temos nosso início em 2023 por uma equipe de pesquisadores de IA e
              profissionais de vendas, a Conectiva combina profundo conhecimento
              técnico com perspicácia empresarial prática para oferecer soluções
              que não apenas impressionam com sua tecnologia, mas também geram
              resultados comerciais tangíveis.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg"
              alt="Team collaboration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: theme.shape.borderRadius,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.label}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography
                    variant="h3"
                    component="div"
                    fontWeight={700}
                    gutterBottom
                  >
                    {stat.number}
                  </Typography>
                  <Typography color="text.secondary">{stat.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
