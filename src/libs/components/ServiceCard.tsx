import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { GanttChart, Mail, Search } from "lucide-react";
import { Service } from "../interfaces/Service";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleServiceClick = () => {
    navigate(`/service/${service.id}`);
    window.scrollTo(0, 51);
  };

  const getIcon = () => {
    switch (service.icon) {
      case "GanttChart":
        return <GanttChart size={40} color={theme.palette.primary.main} />;
      case "Mail":
        return <Mail size={40} color={theme.palette.primary.main} />;
      case "Search":
        return <Search size={40} color={theme.palette.primary.main} />;
      default:
        return <GanttChart size={40} color={theme.palette.primary.main} />;
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          backgroundColor: alpha(theme.palette.primary.main, 0.05),
        }}
      >
        {getIcon()}
      </Box>
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 600 }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, flexGrow: 1 }}
        >
          {service.shortDescription}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleServiceClick}
          sx={{ alignSelf: "flex-start", mt: "auto" }}
        >
          Ver Mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
