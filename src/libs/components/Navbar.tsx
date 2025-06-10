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
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
            backdropFilter: "blur(8px)",
            boxShadow: theme.customShadows.card,
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
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                          borderRadius: theme.shape.borderRadius * 1.5,
                          background: theme.palette.gradients.bluePurple,
                          boxShadow: theme.customShadows.card,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: theme.palette.gradients.purplePink,
                            boxShadow: theme.customShadows.neon,
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      startIcon={<LogIn size={18} />}
                      component={RouterLink}
                      to="/login"
                      sx={{
                        ml: 2,
                        borderRadius: theme.shape.borderRadius * 1.5,
                        fontWeight: 600,
                        color: '#fff',
                        background: theme.palette.gradients.purplePink,
                        boxShadow: theme.customShadows.neon,
                      }}
                    >
                      Entrar
                    </Button>
                  </motion.div>
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
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            backdropFilter: "blur(8px)",
            boxShadow: theme.customShadows.card,
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
              <motion.div key={item.to} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <ListItem
                  button
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    my: 1,
                    borderRadius: theme.shape.borderRadius * 1.5,
                    background: theme.palette.gradients.bluePurple,
                    boxShadow: theme.customShadows.card,
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: theme.palette.gradients.purplePink,
                      boxShadow: theme.customShadows.neon,
                      transform: 'translateX(10px)',
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              </motion.div>
            ))}
          </List>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                startIcon={<LogIn size={18} />}
                component={RouterLink}
                to="/login"
                sx={{
                  borderRadius: theme.shape.borderRadius * 1.5,
                  fontWeight: 600,
                  color: '#fff',
                  background: theme.palette.gradients.purplePink,
                  boxShadow: theme.customShadows.neon,
                }}
              >
                Entrar
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Drawer>
    </AnimatePresence>
  );
};

export default Navbar;
