
import React from 'react';

import { useNavigate } from 'react-router';
import { Typography,CardActionArea ,Button,ButtonProps} from '@mui/material';
import { styled } from '@mui/material/styles';

import classnames from 'classnames/bind';
import styles from '../../home/Home.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import { Grid } from '@mui/material';

const cx = classnames.bind(styles);

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    marginLeft:1000,
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
const Core = () => {
    const navigate = useNavigate();

    const smiles = {
        "core_smiles": [
            "$o*c1nc(C)c(-c2ccnc(N(*)*)n2)s1 |$R3;;;;;;;;;;;;R1;R2;;$|",
            "*c1ccc2c(-c3ccnc(Nc4ccc(*)c(*)c4)n3)c(*)nn2n1 |$R2;;;;;;;;;;;;;;;;R4;;R3;;;;R1;;;$|",
            "*c1nc(*)c(*)c(*)c1* |$R1;;;;R5;;R4;;R3;;R2$|",
            "*c1ccnnc1* |$R1;;;;;;;R2$|",
            "*C1CC(*)OC(*)C1 |$R2;;;;R1;;;R3;$|",
            "*N1CCN(C2(c3ccccc3)CCN(*)CC2)CC1 |$R2;;;;;;;;;;;;;;;R1;;;;$|",
            "*c1ccc2c(c1*)CC(*)C2 |$R3;;;;;;;R2;;;R1;$|",
            "*CC(*)NC(=O)c1cc(C(=O)O)c2cc(*)ccc2n1 |$R1;;;R2;;;;;;;;;;;;;R3;;;;$|",
            "*c1cc(-c2ccc(I)cc2)n(-c2ccc(S(C)(=O)=O)c(*)c2)n1 |$R1;;;;;;;;;;;;;;;;;;;;;R2;;$|",
            "*Cc1c(-c2ccccc2)nc(*)n1* |$R3;;;;;;;;;;;;R1;;R2$|",
            "*C(=O)N1CCC(N(*)Cc2ccccc2)C1 |$R2;;;;;;;;R1;;;;;;;;$|",
            "*CCNC(=O)c1cccc2c1CN(*)C2=O |$R1;;;;;;;;;;;;;;R2;;$|"
        ],
        "R_smiles": [
            "*N1CCCC1",
            "*O",
            "*C",
            "*Cl",
            "*C1CCCNC1",
            "CC(-*)=O",
            "*-C1CCNC1",
            "*C(=O)NO",
            "*-C1CNCN1",
            "*CC(=O)C",
            "*-C1CCC2=CC=CC=C12",
            "*-C1CNC2=CC=CC=C12",
            "*-N1C=CC=C1"
        ]
    }
    const handleNewPage = () => {
        navigate('/enumeration/core/R-group-one');
      };
    return (
        <div className={cx('home-container')}>
      <Typography variant="h2" fontWeight={700} color="primary">
      {"Select Cores"}
        <br />
      </Typography>
      <Grid container spacing={4}>
  <Grid item md={4}>
 
                   <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/images/core_0.svg" alt={'image'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Smiles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            {smiles.core_smiles[0]}
          </Typography>
          <Checkbox  defaultChecked  />
          
        </CardContent>
      </CardActionArea>
    </Card>

                </Grid>
  <Grid item md={4}>
 
                     <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/images/core_1.svg" alt={'image'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Smiles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            {smiles.core_smiles[1]}
          </Typography>
          <Checkbox  defaultChecked  />
          
        </CardContent>
      </CardActionArea>
    </Card>

  </Grid>
  <Grid item md={4}>
 
                   <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/images/core_2.svg" alt={'image'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Smiles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            {smiles.core_smiles[2]}
          </Typography>
          <Checkbox  defaultChecked  />
          
        </CardContent>
      </CardActionArea>
    </Card>
  
  </Grid>
 
</Grid>
 
    <span></span>

                   <BootstrapButton   onClick={() => {
                    // alert('clicked');
                    handleNewPage()
                  }} 
                  variant="contained" disableRipple>
        Go Next
      </BootstrapButton>
    </div>
    );
};

export default Core;