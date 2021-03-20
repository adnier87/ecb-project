import {
    Card,
    CardMedia,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import notFound from '../../assets/Car-Not-Found.png';

const VehicleCard = ({ data }: any) => {
    return (
            <Card>
                <CardMedia
                    component="img"
                    alt={`${data.make} ${data.model}`}
                    title={`${data.make} ${data.model}`}
                    image={data.image}
                    height="140"
                    onError={(ev: any) => {
                        ev.target.src=notFound;
                    }}
                />
                <CardContent>
                    <Grid container>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textPrimary">
                                <strong>Fabricante</strong>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textSecondary">
                                {data.make}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textPrimary">
                                <strong>Modelo</strong>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textSecondary">
                                {data.model}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textPrimary">
                                <strong>Kilometraje</strong>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textSecondary">
                                {data.km ? `${data.km}km` : '--'}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textPrimary">
                                <strong>Fecha</strong>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textSecondary">
                                {data.estimatedate || '--'}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textPrimary">
                                <strong>Descripción</strong>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography variant="body2" component="p" color="textSecondary">
                                {data.description || '--'}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
    )
}

export default VehicleCard;