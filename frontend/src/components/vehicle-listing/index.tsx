import { useState, useEffect } from 'react';
import { CircularProgress, Fade, Grid, Grow, Container, Typography, Snackbar, Slide, Modal, TextField, Dialog, DialogContent, DialogActions, Button, DialogTitle, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { getAllVehicles } from '../../requester';
import VehicleCard from '../vehicle-card';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const useStyle = makeStyles({
    dialog: {
        position: 'unset'
    }
})

const VehicleListing = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);
    const [showVehicles, setShowVehicles] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState(new Date());
    const [person, setPerson] = useState('');
    const [selectedVehicleId, setSelectedVehicleId] = useState(0);

    const classes = useStyle();

    useEffect((): void => {
        if (alertMessage && !showAlert) {
            setShowAlert(true);
        }
    }, [alertMessage])

    useEffect((): void => {
        getAllVehicles()
            .then((response) => {
                if (response.error) throw response.error;
                setVehicles(response);
                setShowLoader(false);
                setTimeout(() => {
                    setLoading(false);
                }, 5000);
                setShowVehicles(true);

                console.log('All vehicles were gotten');
            })
            .catch(error => {
                console.error(`Error from VehicleListing trying to get vehicles::: ${error}`);
            })
    }, [])

    const showVehicleForm = (id: number): void => {
        setSelectedVehicleId(id);
        setShowForm(true);
    }

    const sendData = (): void => {

    }

    return (
        <div>
            {loading &&
                <Fade in={showLoader}>
                    <div className="loader">
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <CircularProgress size='12rem' />
                        </Grid>
                    </div>
                </Fade>
            }
            <Container>
                <Typography variant="h4" component="h4">
                    Vehiculos en mantenimiento
                </Typography>
                <Grid container spacing={3}>
                    {vehicles.length > 0 &&
                        vehicles.map((vehicle, idx) => {
                            return (
                                <Grow
                                    in={showVehicles}
                                    style={{ transformOrigin: '0 0 0' }}
                                    timeout={1000 * idx}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                    >
                                        <VehicleCard onClickCard={showVehicleForm} data={vehicle} />
                                    </Grid>
                                </Grow>
                            )
                        })
                    }
                </Grid>
            </Container>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={showAlert}
                autoHideDuration={4000}
                TransitionComponent={Slide}
            >
                <Alert onClose={()=>{
                    setShowAlert(false);
                    setTimeout(() => {
                        setAlertMessage('');
                    }, 6000);
                }} severity='success'>{alertMessage}</Alert>
            </Snackbar>

            <Dialog
                open={showForm}
                className="main-dialog"
            >
                <DialogTitle>
                    Ingreso de datos
                </DialogTitle>
                <DialogContent>
                    <TextField required id="person-input" label="Persona" onChange={(ev) => {
                        setPerson(ev.target.value);
                        console.log(person);
                    }} />
                    <DatePicker selected={date} onChange={(d: Date) => {
                        setDate(d);
                    }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setShowForm(false);
                        setPerson('');
                        setDate(new Date);
                    }} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={sendData} color="primary">
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default VehicleListing;