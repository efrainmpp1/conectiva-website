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
import { Link as ScrollLink } from "react-scroll";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "Home", to: "home" },
  { label: "Sobre Nós", to: "about" },
  { label: "Serviços", to: "services" },
  { label: "FAQ", to: "faq" },
  { label: "Contato", to: "contact" },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          {/* Logo and Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: "auto",
              cursor: "pointer",
            }}
            onClick={scrollToTop}
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

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
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
                </ScrollLink>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <ListItem button>
                  <ListItemText primary={item.label} />
                </ListItem>
              </ScrollLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
