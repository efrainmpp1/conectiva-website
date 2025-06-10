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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Menu, BrainCircuit, LogIn } from "lucide-react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Sobre Nós", to: "/sobre" },
  // Navegação para a seção de serviços na página inicial
  { label: "Funcionalidades", to: "/#services" },
  { label: "Planos", to: "/planos" },
  { label: "Contato", to: "/contato" },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

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
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AppBar
          position="static"
          sx={{
            background:
              "linear-gradient(135deg, rgba(26,35,126,0.9) 0%, rgba(13,27,42,0.9) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/");
                    scrollToTop();
                  }}
                >
                  <BrainCircuit
                    size={32}
                    color="#FFFFFF"
                    style={{ marginRight: "8px" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Conectiva
                  </Typography>
                </Box>
              </motion.div>

              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {navItems.map((item) => (
                    <motion.div
                      key={item.to}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        component={RouterLink}
                        to={item.to}
                        sx={{
                          mx: 0.5,
                          px: 2,
                          py: 1,
                          color: "#fff",
                          borderRadius: "12px",
                          backgroundColor: alpha(
                            theme.palette.common.white,
                            0.1
                          ),
                          backdropFilter: "blur(4px)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LogIn size={18} />}
                    component={RouterLink}
                    to="/login"
                    sx={{
                      ml: 2,
                      borderRadius: "12px",
                      fontWeight: 600,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    Entrar
                  </Button>
                </Box>
              )}

              {isMobile && (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{
                    ml: "auto",
                    color: "#fff",
                  }}
                >
                  <Menu />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 250,
            background:
              "linear-gradient(135deg, rgba(26,35,126,0.95) 0%, rgba(13,27,42,0.95) 100%)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
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
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    transform: "translateX(10px)",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LogIn size={18} />}
              component={RouterLink}
              to="/login"
              sx={{
                borderRadius: "12px",
                fontWeight: 600,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AnimatePresence>
  );
};

export default Navbar;
