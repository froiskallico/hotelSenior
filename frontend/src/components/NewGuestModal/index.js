import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import DefaultButton from "../DefaultButton";

import InputMask from 'react-input-mask';

import api from '../../services/api';

import './styles.css';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 0,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: "32px",
    width: "50%",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [nome, setNome] = React.useState();
  const [documento, setDocumento] = React.useState();
  const [telefone, setTelefone] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const data = {
      nome,
      documento,
      telefone
    }

    try {
      const response = await api.post('/guests', data);

      console.log(response);
      if (response) {
        window.alert("Sucesso. Hóspede cadastrado com sucesso!")
        handleClose()
      } else {
        window.alert("ERRO")
      }
    } catch(err) {
      window.alert(err.message)
    }
  }

  return (
    <div>
      <DefaultButton title="Incluir pessoa" onClick={handleOpen}/>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

            <h3 className="modalTitle">Cadastrar Novo Hóspede</h3>
            
            <div className="input textInput">
              <label htmlFor="nomePessoa">Pessoa</label>
              <input
                name="nomePessoa"
                id="nomePessoa"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </div>
          
            <div className="input textInput">
              <label htmlFor="documento">Documento</label>
              <InputMask
                name="documento"
                id="documento"
                value={documento}
                mask="999.999.999-99"
                onChange={e => setDocumento(e.target.value)}
                required
              />
            </div>
          
            <div className="input textInput">
              <label htmlFor="telefone">Telefone</label>
              <InputMask
                name="telefone"
                id="telefone"
                value={telefone}
                mask="(99) 99999 9999"
                onChange={e => setTelefone(e.target.value)}
                required
              />
            </div>

            <DefaultButton title="Salvar" onClick={handleSubmit}/>  
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
