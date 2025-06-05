import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <AppBar
          position="fixed"
          sx={{
            background: trigger
              ? "rgba(255, 255, 255, 0.9)"
              : "transparent",
            backdropFilter: trigger ? "blur(10px)" : "none",
            boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
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
                    color={trigger ? theme.palette.primary.main : "#FFFFFF"}
                    style={{ marginRight: "8px" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      background: trigger
                        ? "none"
                        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      WebkitBackgroundClip: trigger ? "none" : "text",
                      WebkitTextFillColor: trigger ? "inherit" : "transparent",
                      color: trigger
                        ? theme.palette.primary.main
                        : "transparent",
                    }}
                  >
                    Conectiva
                  </Typography>
                </Box>
              </motion.div>

              {!isMobile && (
                <Box sx={{ display: "flex", gap: 1 }}>
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
                          color: trigger
                            ? theme.palette.primary.main
                            : "#fff",
                          borderRadius: "12px",
                          backgroundColor: trigger
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(4px)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: trigger
                              ? "rgba(33, 150, 243, 0.1)"
                              : "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
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
                    color: trigger
                      ? theme.palette.primary.main
                      : "#fff",
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
            background: "rgba(255, 255, 255, 0.95)",
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
                    backgroundColor: "rgba(33, 150, 243, 0.1)",
                    transform: "translateX(10px)",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AnimatePresence>
  );
};

export default Navbar;