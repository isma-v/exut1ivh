import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import { useState } from 'react';

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




export default function ModalDialog({ handleClose, open, text }) {

  const handleClickWhatsapp = () => {

    console.log("Enviando por Whatsapp ...");
   
    handleClose();
  };

  const handleClickTelegram = () => {

    console.log("Enviando por Telegram ...");
   
    handleClose();
  };

 

  


  return (
    <React.Fragment>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"COMPARTIR"}
        </DialogTitle>
        <DialogContent>
        <Typography variant="h7" component="div">
        ¿A través de qué plataforma quieres compartir?
          
        </Typography>
      
        </DialogContent>
        <DialogActions>
        <IconButton onClick={handleClickWhatsapp} autoFocus aria-label="whatsapp">
          <WhatsAppIcon />
        </IconButton>
        <IconButton onClick={handleClickTelegram} autoFocus aria-label="telegram">
          <TelegramIcon />
        </IconButton>
  
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}