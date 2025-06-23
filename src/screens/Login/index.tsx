import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../libs/context/AuthContext";

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

const LoginPage: React.FC = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;

    if (!email.trim()) {
      newErrors.email = "E-mail é obrigatório";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail inválido";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Senha é obrigatória";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await login(email, password, stayLoggedIn);
      navigate("/dashboard");
    } catch (err: any) {
      setErrors({ general: "Falha ao fazer login" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      setErrors({ general: "Falha ao fazer login" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Paper elevation={2} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Entrar
        </Typography>
        {errors.general && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.general}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="E-mail"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
                color="primary"
              />
            }
            label="Manter-me conectado"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? "Carregando..." : "Entrar"}
          </Button>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogle}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          Entrar com Google
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Ainda não tem conta?{' '}
          <Link component={RouterLink} to="/cadastro">
            Cadastre-se
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
