import React from 'react';
import Loader from '../Loader'
import DisplayInfo from '../DisplayInfo'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './FormComponent.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    root: {
        '& .MuiTextField-root': {
            display: 'flex',
            margin: theme.spacing(1),
            width: '80ch',
            'margin-top': '20px'
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    const dictionary = {
        I: 'N',
        am: 'N',
        at: 'N',
        Tempe: 'LOC'
    }

    const [model, setModel] = React.useState('');
    const [submitClicked, setSubmitClick] = React.useState(false);
    const [isLoader, setLoader] = React.useState(false);
    const [textValue, setTextValue] = React.useState('');

    const handleChange = (event) => {
        setModel(event.target.value);
    };

    const getNERC = () => {
        console.log('textVal',textValue)
        console.log('model',model)
        setTimeout(()=>{
            setLoader(false)
        },1000)
    }

    const handleSubmit = () => {
        setSubmitClick(true)
        setLoader(true)
        getNERC() // API call
    }

    const handleTextChange = (event) => {
        setTextValue(event.target.value)
    }

    return (
        <React.Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="textfield">
                    <TextField
                        id="outlined-helperText"
                        label="Text to classify"
                        defaultValue="eg. I am at Tempe"
                        helperText=""
                        variant="outlined"
                        onChange={handleTextChange}
                    />
                </div>
                <div className="selectgroup">
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={model}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="BERT">BERT</MenuItem>
                            <MenuItem value="CRF">CRF</MenuItem>
                            <MenuItem value="LSTM">LSTM</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </form>
            <div class="button">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
            {isLoader &&  <Loader />}
            {submitClicked && !isLoader && <DisplayInfo words={dictionary}/>}
        </React.Fragment>
    );
}