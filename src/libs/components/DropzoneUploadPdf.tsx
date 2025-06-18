import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { analyzeEdital } from '../../services/edital';

const DropzoneUploadPdf: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (file.type !== 'application/pdf') {
      setError('Somente arquivos .pdf são aceitos.');
      setFileName(null);
      setPdfFile(null);
    } else {
      setFileName(file.name);
      setPdfFile(file);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!pdfFile) return;
    try {
      setLoading(true);
      const blob = await analyzeEdital(pdfFile);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'empresas_interessadas.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      setShowSuccess(true);
    } catch {
      setError('Ocorreu um erro ao enviar o arquivo. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFileName(null);
    setPdfFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <Box
        onClick={openFileDialog}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        tabIndex={0}
        role="button"
        aria-label="Área para upload de PDF"
        sx={{
          maxWidth: 500,
          border: '2px dashed',
          borderColor: isDragOver ? '#9C27B0' : '#B388FF',
          borderRadius: 2,
          p: { xs: 6, sm: 8 },
          m: '0 auto',
          textAlign: 'center',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s',
          '&:hover': {
            boxShadow: 3,
            borderColor: '#B388FF',
          },
        }}
      >
      {fileName ? (
        <>
          <CheckCircleIcon color="success" sx={{ fontSize: 64 }} />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
            {fileName}
          </Typography>
          <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
            Edital carregado com sucesso!
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <Button
              variant="contained"
              onClick={handleAnalyze}
              disabled={loading}
              aria-label="Analisar edital"
            >
              {loading ? <CircularProgress size={24} /> : 'Analisar Edital'}
            </Button>
            <Button variant="outlined" onClick={reset} aria-label="Enviar outro arquivo">
              Enviar outro arquivo
            </Button>
          </Box>
          {error && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'error.main' }}>
              <ErrorOutlineIcon sx={{ mr: 0.5 }} />
              <Typography variant="body2">{error}</Typography>
            </Box>
          )}
        </>
      ) : (
        <>
          {isDragOver ? (
            <PictureAsPdfIcon sx={{ fontSize: 80, color: '#B388FF' }} />
          ) : (
            <CloudUploadIcon sx={{ fontSize: 80, color: '#B388FF' }} />
          )}
          <Typography
            sx={{
              fontSize: '1.75rem',
              fontWeight: 700,
              textAlign: 'center',
              mb: 1,
            }}
          >
            Envie seu Edital em PDF para Análise
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 400,
              color: 'text.secondary',
              maxWidth: '90%',
              mx: 'auto',
            }}
          >
            Clique para selecionar ou arraste e solte aqui o arquivo em PDF
          </Typography>
          {error && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'error.main' }}>
              <ErrorOutlineIcon sx={{ mr: 0.5 }} />
              <Typography variant="body2">{error}</Typography>
            </Box>
          )}
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        style={{ display: 'none' }}
        onChange={handleChange}
        />
      </Box>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
      <Alert
        onClose={() => setShowSuccess(false)}
        severity="success"
        variant="filled"
      >
        Análise concluída. Download iniciado.
        </Alert>
      </Snackbar>
    </>
  );
};

export default DropzoneUploadPdf;
