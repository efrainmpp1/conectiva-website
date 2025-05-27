import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, BrainCircuit } from "lucide-react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Sobre Nós", to: "/sobre" },
  { label: "Serviços", to: "/service" },
  { label: "Planos", to: "/planos" },
  { label: "Contato", to: "/contato" },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppBar
      position="fixed"
      color={trigger ? "primary" : "transparent"}
      sx={{
        boxShadow: trigger ? 1 : 0,
        transition: "all 0.3s ease",
        bgcolor: trigger ? "primary.main" : "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: "auto",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
          >
            <BrainCircuit
              size={32}
              color={trigger || isMobile ? "#FFFFFF" : "#1976D2"}
              style={{ marginRight: "8px" }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: trigger || isMobile ? "white" : "primary.main",
              }}
            >
              Conectiva
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  color="inherit"
                  sx={{
                    mx: 1,
                    color: trigger ? "white" : "primary.main",
                    border: "0.2px solid",
                    borderColor: trigger ? "white" : "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto", color: trigger ? "white" : "primary.main" }}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.to}
                component={RouterLink}
                to={item.to}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;