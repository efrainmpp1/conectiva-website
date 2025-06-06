import React from "react";
import { Box, Grid } from "@mui/material";
import { Wallet, Clock, Activity, User } from "lucide-react";
import InfoCard from "./InfoCard";
import ActionBlock from "./ActionBlock";

const DashboardHome: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard icon={<Wallet />} label="Créditos" value="0" color="primary.main" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard icon={<Activity />} label="Execuções" value="0" color="secondary.main" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard icon={<Clock />} label="Última Execução" value="-" color="success.main" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard icon={<User />} label="Plano" value="Free" color="warning.main" />
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
