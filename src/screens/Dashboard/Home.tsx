import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Wallet, Clock, Activity, User } from 'lucide-react';
import DashboardStatCard from './DashboardStatCard';
import DashboardActionButton from './DashboardActionButton';
import RecentActivityItem from './RecentActivityItem';
import NextStepItem from './NextStepItem';
import DashboardAlert from './DashboardAlert';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../libs/context/AuthContext';
import {
  getLastServiceUsedByUserId,
  getNumberOfHistoricalServicesByUserId,
  getUserByFirebaseUid,
} from '../../services/users';
import type { User as AppUser } from '../../libs/interfaces/User';
import { calculateCreditUsage } from '../../utils/creditUtils';
import { ServiceBackendSimplify } from '../../libs/interfaces/Service';

const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<AppUser | null>(null);
  const [numberOfExecutions, setNumberOfExecutions] = useState<number>(0);
  const [lastServiceUsed, setLastServiceUsed] = useState<ServiceBackendSimplify | null>(null);

  const MAX_CREDITS = 10;
  const creditsRemaining = userData?.coins ?? MAX_CREDITS;
  const plan = userData?.plan ?? 'Free';
  const creditsUsed = MAX_CREDITS - creditsRemaining;
  const creditsUsedPercent = calculateCreditUsage(creditsRemaining, MAX_CREDITS);

  useEffect(() => {
    const fetchLastServiceUsed = async () => {
      if (!userData) return;
      try {
        const lastService = await getLastServiceUsedByUserId(userData.id);
        setLastServiceUsed(lastService);
      } catch (err) {
        console.error('Erro ao buscar último serviço usado', err);
      }
    };
    fetchLastServiceUsed();
  }, [userData]);

  const recentActivities = [
    {
      icon: <Activity size={18} />,
      description: 'Executou LeadGen',
      date: '10/06/2025 14:00',
      statusColor: 'success' as const,
      actionLabel: 'Ver',
      actionTo: '/dashboard/historico',
    },
    {
      icon: <Wallet size={18} />,
      description: 'Adicionou 20 créditos',
      date: '08/06/2025 12:30',
      statusColor: 'secondary' as const,
    },
    {
      icon: <User size={18} />,
      description: 'Upgrade para plano Pro',
      date: '05/06/2025 09:00',
      statusColor: 'primary' as const,
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const data = await getUserByFirebaseUid(user.uid);
        setUserData(data);
      } catch (err) {
        console.error('Erro ao buscar dados do usu\u00e1rio', err);
      }
    };
    fetchUserData();
  }, [user]);

  useEffect(() => {
    const fetchExecutions = async () => {
      if (!userData) return;
      try {
        const count = await getNumberOfHistoricalServicesByUserId(userData.id);
        console.log('Número de execuções:', count);
        setNumberOfExecutions(count);
      } catch (err) {
        console.error('Erro ao buscar n\u00famero de execu\u00e7\u00f5es', err);
      }
    };
    fetchExecutions();
  }, [userData]);

  let creditsColor: 'error' | 'warning' | 'success';
  if (creditsUsedPercent >= 80) {
    creditsColor = 'error';
  } else if (creditsUsedPercent >= 50) {
    creditsColor = 'warning';
  } else {
    creditsColor = 'success';
  }

  const [alerts, setAlerts] = useState(() => {
    const items = [] as {
      id: number;
      severity: 'error' | 'success' | 'info' | 'warning';
      message: string;
      dismissible?: boolean;
    }[];
    if (creditsRemaining < 5) {
      items.push({
        id: 1,
        severity: 'error',
        message: 'Seus créditos estão quase acabando. Adicione mais para continuar.',
      });
    }
    if (numberOfExecutions >= 4) {
      items.push({
        id: 2,
        severity: 'success',
        message: `Parabéns, você executou ${numberOfExecutions} agentes este mês!`,
        dismissible: true,
      });
    }
    items.push({
      id: 3,
      severity: 'info',
      message: 'Confira as novidades e recursos que acabamos de lançar.',
      dismissible: true,
    });
    return items;
  });

  const handleCloseAlert = (id: number) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const nextSteps = [
    {
      icon: <Activity size={18} />,
      text: 'Execute um agente agora',
      actionLabel: 'Executar',
      actionTo: '/dashboard/agente',
    },
    {
      icon: <Wallet size={18} />,
      text: 'Adicione créditos e continue prospectando',
      actionLabel: 'Adicionar',
      actionTo: '/dashboard/moedas',
    },
    {
      icon: <User size={18} />,
      text: 'Veja dicas para melhorar seus resultados',
      actionLabel: 'Ver dicas',
      actionTo: '/ajuda',
    },
  ];

  return (
    <Box>
      {alerts.map((alert) => (
        <DashboardAlert
          key={alert.id}
          severity={alert.severity}
          message={alert.message}
          onClose={alert.dismissible ? () => handleCloseAlert(alert.id) : undefined}
        />
      ))}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<Wallet size={20} />}
            label="Créditos Restantes"
            value={
              <Box component="span">
                {creditsRemaining}
                <Typography component="span" variant="caption" sx={{ ml: 1 }}>
                  Usados: {creditsUsed}
                </Typography>
              </Box>
            }
            progress={creditsUsedPercent}
            statusColor={creditsColor}
            //actionLabel="Adicionar"
            //actionTo="/dashboard/moedas"
            //chartData={creditsTrend}
            chartColor="#00e676"
            chartArea
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {/*<DashboardStatCard
            icon={<Activity size={20} />}
            label="Execuções"
            value={numberOfExecutions}
            statusColor="primary"
            actionLabel="Ver histórico"
            actionTo="/dashboard/historico"
            chartData={executionsTrend}
            chartColor="#ff9100"
          />*/}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<Clock size={20} />}
            label="Última Execução"
            value={lastServiceUsed ? `${lastServiceUsed.name}` : '-'}
            //statusColor={lastExecution.success ? 'success' : 'error'}
            //actionLabel="Detalhes"
            //actionTo="/dashboard/historico"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardStatCard
            icon={<User size={20} />}
            label="Plano Atual"
            value={plan}
            //actionLabel="Upgrade"
            //actionTo="/planos"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          height: 2,
          background: (theme) => theme.palette.gradients.purplePink,
          borderRadius: 1,
          mb: 4,
        }}
      />
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: (theme) => theme.palette.gradients.purplePink,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
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
      <Box
        sx={{
          height: 2,
          background: (theme) => theme.palette.gradients.purplePink,
          borderRadius: 1,
          mb: 4,
        }}
      />
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: (theme) => theme.palette.gradients.purplePink,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
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
          <DashboardActionButton icon={<User size={28} />} label="Perfil" to="/dashboard/perfil" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
