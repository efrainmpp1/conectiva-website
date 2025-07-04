import React, { useState } from 'react';
import type { FirebaseError } from 'firebase/app';
import { Box, Paper, TextField, Button, Typography, Alert, Link } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../libs/context/AuthContext';
import { registerUser } from '../../services/users';
import { deleteUser } from 'firebase/auth';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

const RegisterPage: React.FC = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const getErrorMessage = (error: unknown): string => {
    if (typeof error === 'object' && error && (error as FirebaseError).code) {
      const code = (error as FirebaseError).code;
      switch (code) {
        case 'auth/email-already-in-use':
          return 'E-mail já cadastrado';
        case 'auth/invalid-email':
          return 'E-mail inválido';
        case 'auth/weak-password':
          return 'Senha deve ter pelo menos 6 caracteres';
        case 'auth/network-request-failed':
          return 'Problema de rede. Tente novamente';
        default:
          return 'Falha ao criar conta';
      }
    }
    return 'Falha ao criar conta';
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      valid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirme a senha';
      valid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Senhas não conferem';
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
      const newUser = await signUp(name, email, password);
      const firebaseUid = newUser.uid;

      const response = await registerUser({ firebase_uid: firebaseUid, name, email });
      if (!response) {
        await deleteUser(newUser);
        throw new Error('Erro ao registrar usuário no servidor');
      }

      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setErrors({ general: getErrorMessage(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <Paper elevation={2} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Criar Conta
        </Typography>
        {errors.general && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.general}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Nome completo"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
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
          <TextField
            fullWidth
            label="Confirmar senha"
            type="password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? 'Carregando...' : 'Criar Conta'}
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Já tem uma conta?{' '}
          <Link component={RouterLink} to="/login">
            Faça login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
