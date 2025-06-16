import React from "react";
import { Box, Grid } from "@mui/material";
import { Wallet, Clock, Activity, User } from "lucide-react";
import DashboardStatCard from "./DashboardStatCard";
import DashboardActionButton from "./DashboardActionButton";
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

  const creditsColor =
    creditsUsedPercent >= 80
      ? "error"
      : creditsUsedPercent >= 50
      ? "warning"
      : "success";

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
