import React from "react";
import { Box, Grid } from "@mui/material";
import { Wallet, Clock, Activity, User } from "lucide-react";
import DashboardStatCard from "./DashboardStatCard";
import ActionBlock from "./ActionBlock";

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
          <ActionBlock
            icon={<Activity size={28} />}
            label="Executar Agente"
            to="/dashboard/agente"
            color="primary.light"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ActionBlock
            icon={<Clock size={28} />}
            label="Histórico"
            to="/dashboard/historico"
            color="secondary.light"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ActionBlock
            icon={<Wallet size={28} />}
            label="Minhas Moedas"
            to="/dashboard/moedas"
            color="success.main"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ActionBlock
            icon={<User size={28} />}
            label="Perfil"
            to="/dashboard/perfil"
            color="warning.main"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
