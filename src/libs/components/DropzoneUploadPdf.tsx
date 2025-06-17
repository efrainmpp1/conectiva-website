import React, { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const DropzoneUploadPdf: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (file.type !== 'application/pdf') {
      setError('Somente arquivos .pdf são aceitos.');
      setFileName(null);
    } else {
      setFileName(file.name);
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

  const reset = () => {
    setFileName(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Box
      onClick={openFileDialog}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      tabIndex={0}
      aria-label="Área para upload de PDF"
      sx={{
        maxWidth: 400,
        border: '2px dashed',
        borderColor: isDragOver ? 'primary.main' : 'grey.500',
        borderRadius: 2,
        p: 4,
        m: '0 auto',
        textAlign: 'center',
        cursor: 'pointer',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        transition: 'border-color 0.2s ease-in-out',
      }}
    >
      {fileName ? (
        <>
          <CheckCircleIcon color="success" sx={{ fontSize: 48 }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            {fileName}
          </Typography>
          <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
            Edital carregado com sucesso!
          </Typography>
          <Button variant="outlined" onClick={reset} aria-label="Enviar outro arquivo">
            Enviar outro arquivo
          </Button>
        </>
      ) : (
        <>
          {isDragOver ? (
            <PictureAsPdfIcon color="primary" sx={{ fontSize: 48 }} />
          ) : (
            <CloudUploadIcon sx={{ fontSize: 48 }} color="action" />
          )}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Envie seu Edital em PDF para Análise
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Clique para selecionar o arquivo ou arraste e solte aqui o edital
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
  );
};

export default DropzoneUploadPdf;
