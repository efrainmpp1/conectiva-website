import React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Como a IA melhora a geração de leads?",
    answer:
      "A IA melhora a geração de leads analisando grandes volumes de dados para identificar padrões e prever quais prospects têm maior probabilidade de conversão. Nossos algoritmos de IA aprendem continuamente com as interações, melhorando a precisão do direcionamento ao longo do tempo. Isso resulta em leads de maior qualidade, taxas de conversão mais altas e custos de aquisição de clientes mais baixos em comparação com métodos tradicionais.",
  },
  {
    id: 2,
    question: "Preciso de conhecimento técnico para usar o Ai?",
    answer:
      "Nenhum conhecimento técnico é necessário. Projetamos nossa plataforma com uma interface intuitiva que qualquer pessoa pode usar. Basta fazer upload de seus dados ou conectar seus sistemas existentes, e nossa IA lida com o processamento complexo nos bastidores. Nossa equipe de sucesso do cliente também oferece um onboarding abrangente e suporte contínuo.",
  },
  {
    id: 3,
    question: "Quanto tempo leva para ver os resultados?",
    answer:
      "A maioria dos clientes começa a ver resultados tangíveis nas primeiras 2-4 semanas de implementação. A IA melhora continuamente à medida que coleta mais dados específicos do seu negócio, então os resultados geralmente ficam melhores com o tempo. Alguns de nossos clientes relataram até 50% de aumento em leads qualificados nos primeiros três meses.",
  },
  {
    id: 4,
    question: "O Ai pode se integrar ao meu CRM existente?",
    answer:
      "Sim, oferecemos integração perfeita com todas as principais plataformas de CRM, incluindo Salesforce, HubSpot, Zoho e muitas outras. Nossa API também permite integrações personalizadas com sistemas proprietários. Isso garante que a Conectiva melhore seu fluxo de trabalho existente em vez de interrompê-lo.",
  },
  {
    id: 5,
    question: "Meus dados estão seguros com a Conectiva?",
    answer:
      "A segurança dos dados é nossa principal prioridade. Utilizamos criptografia em nível bancário para todos os dados, tanto em trânsito quanto em repouso. Nossa plataforma é totalmente compatível com GDPR e CCPA, e nunca compartilhamos seus dados com terceiros. Também oferecemos opções de residência de dados para clientes com requisitos específicos de conformidade geográfica.",
  },
  {
    id: 6,
    question: "Que tipo de suporte vocês oferecem?",
    answer:
      "Oferecemos suporte abrangente, incluindo gerentes de conta dedicados para todos os clientes. Nossa equipe de suporte está disponível via chat, e-mail e telefone. Clientes corporativos recebem suporte prioritário 24/7 e sessões regulares de estratégia com nossos especialistas em IA para garantir resultados ideais com a plataforma.",
  },
];

const FAQSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
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
            Perguntas Frequentes
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
            Encontre respostas sobre nossa plataforma de IA e geração de leads.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              sx={{
                mb: 2,
                borderRadius: `${theme.shape.borderRadius}px !important`,
                overflow: "hidden",
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.customShadows.card,
                "&:before": {
                  display: "none",
                },
                "&:hover": {
                  boxShadow: theme.customShadows.neon,
                },
              }}
              disableGutters
            >
              <AccordionSummary
                expandIcon={<ChevronDown />}
                sx={{
                  px: 3,
                  py: 2,
                  "&.Mui-expanded": {
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  },
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 2 }}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
