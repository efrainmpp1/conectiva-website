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
  BrainCircuit,
} from "lucide-react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../libs/context/AuthContext";

const drawerWidth = 240;

const menuItems = [
  { label: "Dashboard", to: "/dashboard", icon: <LayoutDashboard size={20} /> },
  { label: "Executar Agente", to: "/dashboard/agente", icon: <PlayCircle size={20} /> },
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
          borderBottom: 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "64px",
            px: 4,
          }}
        >
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
              <Typography variant="subtitle1">Painel do Usuário</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={handleMenuOpen}
              color="inherit"
              sx={{ display: "flex", alignItems: "center", p: 0 }}
            >
              {user?.photoURL ? (
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName || user.email || "Usuário"}
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
              ) : (
                <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
                  {(user?.displayName || user?.email || "").charAt(0).toUpperCase()}
                </Avatar>
              )}
              <Typography variant="subtitle1" noWrap>
                {user?.displayName || user?.email}
              </Typography>
            </IconButton>
            <MuiMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={RouterLink} to="/dashboard/perfil" onClick={handleMenuClose}>
                Ver Perfil
              </MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MuiMenu>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
