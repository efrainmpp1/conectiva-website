import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Fade,
  Alert,
  Tooltip,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAnaliseDeEdital } from '../hooks/useAnaliseDeEdital';

const DropzoneUploadPdf: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const {
    statusAnalise,
    csvBlobUrl,
    mensagemErro,
    analisar,
    reset: resetAnalise,
  } = useAnaliseDeEdital();
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
    await analisar(pdfFile);
  };

  const reset = () => {
    setFileName(null);
    setPdfFile(null);
    setError(null);
    resetAnalise();
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              mt: 1,
              width: '100%',
              border: '1px solid',
              borderColor: 'success.light',
              borderRadius: 2,
              backgroundColor: 'background.paper',
            }}
          >
            <InsertDriveFileIcon color="primary" sx={{ fontSize: 40 }} />
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography variant="body1" fontWeight={600} sx={{ wordBreak: 'break-word' }}>
                {fileName}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CheckCircleIcon color="success" fontSize="small" />
                <Typography variant="body2" color="success.main">
                  Arquivo carregado com sucesso!
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" onClick={reset} size="small" aria-label="Trocar arquivo" disabled={statusAnalise === 'processando'}>
              Trocar arquivo
            </Button>
          </Box>
          <Button
            variant="contained"
            onClick={handleAnalyze}
            aria-label="Analisar edital"
            sx={{ mt: 2 }}
            disabled={statusAnalise === 'processando'}
          >
            Analisar Edital
          </Button>
          <Fade in={statusAnalise === 'processando'} timeout={300} unmountOnExit>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              sx={theme => ({
                padding: 2,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                mt: 3,
              })}
              aria-live="polite"
            >
              <CircularProgress color="primary" size={28} />
              <Typography color="text.secondary" fontWeight={500}>
                Estamos analisando seu edital... Isso pode levar alguns segundos.
              </Typography>
            </Box>
          </Fade>
          {statusAnalise === 'concluido' && csvBlobUrl && (
            <>
              <Alert severity="success" sx={{ mt: 3 }} aria-live="polite">
                🎉 Análise concluída com sucesso! Seu arquivo com a lista de empresas está pronto para download.
              </Alert>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                sx={{ mt: 2 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = csvBlobUrl;
                  link.setAttribute('download', 'empresas_compativeis.csv');
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
              >
                Baixar Resultado (.CSV)
              </Button>
            </>
          )}
          {statusAnalise === 'erro' && (
            <Alert severity="error" sx={{ mt: 2 }} aria-live="polite">
              {mensagemErro}
              <Button onClick={handleAnalyze} size="small" sx={{ ml: 2 }}>
                Tentar novamente
              </Button>
            </Alert>
          )}
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
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1,
              gap: 0.5,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.75rem',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Envie seu Edital em PDF para Análise
            </Typography>
            <Tooltip
              title="A IA extrai CNAEs, região e porte, gerando uma lista de empresas compatíveis."
              enterTouchDelay={0}
            >
              <HelpOutlineIcon
                fontSize="small"
                color="action"
                aria-label="Como funciona?"
              />
            </Tooltip>
          </Box>
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
    </>
  );
};

export default DropzoneUploadPdf;
