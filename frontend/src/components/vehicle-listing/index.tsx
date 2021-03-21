import { useState, useEffect } from 'react';
import { CircularProgress, Fade, Grid, Grow, Container, Typography, Snackbar, Slide } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { getAllVehicles } from '../../requester';
import VehicleCard from '../vehicle-card';
import { FavoriteBorderRounded } from '@material-ui/icons';

const VehicleListing = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);
    const [showVehicles, setShowVehicles] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

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
                                        <VehicleCard data={vehicle} />
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
        </div>
    )
}

export default VehicleListing;