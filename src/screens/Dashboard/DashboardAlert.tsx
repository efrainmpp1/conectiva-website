import React from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DashboardAlertProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  onClose?: () => void;
}

const DashboardAlert: React.FC<DashboardAlertProps> = ({
  severity,
  message,
  onClose,
}) => (
  <Collapse in>
    <Alert
      severity={severity}
      sx={{ mb: 2 }}
      action={
        onClose ? (
          <IconButton
            aria-label="Fechar alerta"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        ) : undefined
      }
    >
      {message}
    </Alert>
  </Collapse>
);

export default DashboardAlert;
