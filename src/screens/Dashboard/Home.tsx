import React from "react";
import { Box, Grid } from "@mui/material";
import { Wallet, Clock, Activity, User } from "lucide-react";
import DashboardStatCard from "./DashboardStatCard";
import DashboardActionButton from "./DashboardActionButton";

const DashboardHome: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardStatCard icon={<Wallet size={20} />} label="Créditos" value="0" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardStatCard icon={<Activity size={20} />} label="Execuções" value="0" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardStatCard icon={<Clock size={20} />} label="Última Execução" value="-" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardStatCard icon={<User size={20} />} label="Plano" value="Free" />
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
