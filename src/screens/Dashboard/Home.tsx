import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Wallet, Clock, Activity, User } from "lucide-react";
import DashboardStatCard from "./DashboardStatCard";
import DashboardActionButton from "./DashboardActionButton";
import RecentActivityItem from "./RecentActivityItem";
import NextStepItem from "./NextStepItem";
import { Link as RouterLink } from "react-router-dom";

const DashboardHome: React.FC = () => {
  const creditsRemaining = 30;
  const creditsUsedPercent = 70;
  const executions = 5;
  const plan = "Free";
  const lastExecution = {
    agent: "LeadGen",
    date: "10/06/2025 14:00",
    success: true,
  };

  const recentActivities = [
    {
      icon: <Activity size={18} />,
      description: "Executou LeadGen",
      date: "10/06/2025 14:00",
      statusColor: "success" as const,
      actionLabel: "Ver",
      actionTo: "/dashboard/historico",
    },
    {
      icon: <Wallet size={18} />,
      description: "Adicionou 20 créditos",
      date: "08/06/2025 12:30",
      statusColor: "secondary" as const,
    },
    {
      icon: <User size={18} />,
      description: "Upgrade para plano Pro",
      date: "05/06/2025 09:00",
      statusColor: "primary" as const,
    },
  ];

  const creditsColor =
    creditsUsedPercent >= 80
      ? "error"
      : creditsUsedPercent >= 50
      ? "warning"
      : "success";

  const creditsTrend = [
    { value: 50 },
    { value: 40 },
    { value: 35 },
    { value: 30 },
    { value: 30 },
  ];
  const executionsTrend = [
    { value: 1 },
    { value: 2 },
    { value: 2 },
    { value: 3 },
    { value: 5 },
  ];

  const nextSteps = [
    {
      icon: <Activity size={18} />,
      text: "Execute um agente agora",
      actionLabel: "Executar",
      actionTo: "/dashboard/agente",
    },
    {
      icon: <Wallet size={18} />,
      text: "Adicione créditos e continue prospectando",
      actionLabel: "Adicionar",
      actionTo: "/dashboard/moedas",
    },
    {
      icon: <User size={18} />,
      text: "Veja dicas para melhorar seus resultados",
      actionLabel: "Ver dicas",
      actionTo: "/ajuda",
    },
  ];

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<Wallet size={20} />}
            label="Créditos Restantes"
            value={creditsRemaining}
            progress={creditsUsedPercent}
            statusColor={creditsColor}
            actionLabel="Adicionar"
            actionTo="/dashboard/moedas"
            chartData={creditsTrend}
            chartColor="#00e676"
            chartArea
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<Activity size={20} />}
            label="Execuções"
            value={executions}
            statusColor="primary"
            actionLabel="Ver histórico"
            actionTo="/dashboard/historico"
            chartData={executionsTrend}
            chartColor="#ff9100"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<Clock size={20} />}
            label="Última Execução"
            value={lastExecution.agent ? `${lastExecution.agent}` : "-"}
            statusColor={lastExecution.success ? "success" : "error"}
            actionLabel="Detalhes"
            actionTo="/dashboard/historico"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<User size={20} />}
            label="Plano Atual"
            value={plan}
            actionLabel="Upgrade"
            actionTo="/planos"
          />
        </Grid>
      </Grid>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Atividades Recentes
        </Typography>
        {recentActivities.map((activity, idx) => (
          <RecentActivityItem key={idx} {...activity} />
        ))}
        <Button
          component={RouterLink}
          to="/dashboard/historico"
          size="small"
          sx={{ mt: 1 }}
          aria-label="Ver todas as atividades"
        >
          Ver tudo
        </Button>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Próximos Passos
        </Typography>
        {nextSteps.map((step, idx) => (
          <NextStepItem key={idx} {...step} />
        ))}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <DashboardActionButton
            icon={<Activity size={28} />}
            label="Executar Agente"
            to="/dashboard/agente"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <DashboardActionButton
            icon={<Clock size={28} />}
            label="Histórico"
            to="/dashboard/historico"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <DashboardActionButton
            icon={<Wallet size={28} />}
            label="Minhas Moedas"
            to="/dashboard/moedas"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <DashboardActionButton
            icon={<User size={28} />}
            label="Perfil"
            to="/dashboard/perfil"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
