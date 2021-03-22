import { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Grid,
    Typography,
    CardActionArea,
    makeStyles
} from '@material-ui/core';
import notFound from '../../assets/Car-Not-Found.png';

const useStyle = makeStyles({
    root: {
        '&:hover': {
            transform: 'scale(1.03)',
        }
    }
})

const VehicleCard = ({ data }: any) => {
    const classes = useStyle();

    const [selected, setSelection] = useState(false);

    return (
            <Card
                className={classes.root}
                onClick={(ev) => {
                    setSelection(!selected)
                }}
            >
                <CardActionArea className={selected ? 'selected' : ''} component='a'>
                    <CardMedia
                        component="img"
                        alt={`${data.make} ${data.model}`}
                        title={`${data.make} ${data.model}`}
                        image={data.image}
                        height="180"
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
                </CardActionArea>
            </Card>
    )
}

export default VehicleCard;