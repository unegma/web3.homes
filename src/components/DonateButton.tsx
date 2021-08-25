import React, {useState} from "react";
import { useWeb3React } from "@web3-react/core";
import {Button, FormControl, InputAdornment, InputLabel, Modal, OutlinedInput, Typography} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      marginBottom: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignContent: 'center'
    },
  }),
);


export default function DonateButton() {
  const { account } = useWeb3React();
  const [modalOpen, setModalOpen] = useState(false);
  const [ethDonation, setEthDonation] = useState<number>(1);
  const classes = useStyles();
  const classes2 = useStyles2();
  const [modalStyle] = useState(getModalStyle);

  const showModal = () => {
    setModalOpen(true);
  }

  const hideModal = () => {
    setModalOpen(false);
  };

  const handleChange = (value: any) => {
    console.log(value)
    setEthDonation(value);
  };

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={hideModal}
      >
        <div style={modalStyle} className={`modalBoxContainer ${classes2.paper}`} >
          <h2 className="modalTitle">Choose Amount</h2>

          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              type="number"
              id="outlined-adornment-amount"
              value={ethDonation}
              onChange={(e) => handleChange(e.target.value)}
              startAdornment={<InputAdornment position="start">&#8801;</InputAdornment>}
              labelWidth={60}
            />
          </FormControl>

          <Button className="donateButton" variant="contained" color="primary" onClick={showModal}>
            Donate
          </Button>
        </div>
      </Modal>

      {(account) && (
        <Button className="donateButton" variant="contained" color="primary" onClick={showModal}>
          Donate
        </Button>
      )}
    </>
  )
}
