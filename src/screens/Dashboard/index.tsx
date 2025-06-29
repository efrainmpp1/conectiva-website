import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip,
  Badge,
  Button,
  LinearProgress,
  Menu as MuiMenu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LayoutDashboard,
  PlayCircle,
  History,
  Coins,
  User,
  Search,
  BrainCircuit,
} from "lucide-react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../libs/context/AuthContext";

const drawerWidth = 240;

const menuItems = [
  { label: "Dashboard", to: "/dashboard", icon: <LayoutDashboard size={20} /> },
  { label: "Executar Agente", to: "/dashboard/agente", icon: <PlayCircle size={20} /> },
  { label: "Prospecção Inteligente", to: "/dashboard/prospeccao-inteligente", icon: <Search size={20} /> },
  { label: "Histórico", to: "/dashboard/historico", icon: <History size={20} /> },
  { label: "Minhas Moedas", to: "/dashboard/moedas", icon: <Coins size={20} /> },
  { label: "Perfil", to: "/dashboard/perfil", icon: <User size={20} /> },
];

const DashboardLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const plan = "Free";
  const progress = 30;
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    handleMenuClose();
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <BrainCircuit size={28} style={{ marginRight: 8 }} />
        <Typography variant="h6" noWrap sx={{ fontWeight: 700 }}>
          Conectiva
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.to}
            component={RouterLink}
            to={item.to}
            onClick={() => isMobile && setOpen(false)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          ml: { md: `${drawerWidth}px` },
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setOpen(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BrainCircuit size={28} style={{ marginRight: 8 }} />
              <Typography variant="h6" noWrap sx={{ fontWeight: 700, mr: 1 }}>
                Conectiva
              </Typography>
              <Typography variant="subtitle1">
                Painel do Usuário
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end", gap: 2 }}>
            <Box sx={{ textAlign: { xs: "center", md: "right" }, mr: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: theme.palette.gradients.purplePink,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {`${getGreeting()}, ${(user?.displayName || user?.email || "").split(" ")[0]}! Pronto para gerar novos leads hoje?`}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ height: 6, borderRadius: 3, mt: 0.5, bgcolor: "grey.800" }}
              />
            </Box>
            <Tooltip title={`Plano ${plan}`}> 
              <IconButton onClick={handleMenuOpen} color="inherit" aria-label="Perfil do usuário">
                <Badge
                  overlap="circular"
                  badgeContent={plan}
                  color="secondary"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  sx={{
                    "& .MuiBadge-badge": { fontSize: "0.6rem", height: 16, minWidth: 16 }
                  }}
                >
                  {user?.photoURL ? (
                    <Avatar src={user.photoURL} alt={user.displayName || user.email || "Usuário"} />
                  ) : (
                    <Avatar>{(user?.displayName || user?.email || "").charAt(0).toUpperCase()}</Avatar>
                  )}
                </Badge>
              </IconButton>
            </Tooltip>
            <MuiMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={RouterLink} to="/dashboard/perfil" onClick={handleMenuClose}>
                Ver Perfil
              </MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MuiMenu>
            <Button
              variant="contained"
              aria-label="Adicionar créditos"
              sx={(theme) => ({
                ml: 1,
                background: theme.palette.gradients.purplePink,
                boxShadow: theme.customShadows.neon,
                '&:hover': { background: theme.palette.gradients.bluePurple },
              })}
            >
              Adicionar Créditos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? open : true}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
