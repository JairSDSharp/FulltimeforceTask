import React from "react";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
}));

function Home () {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <Typography variant='h6' className={classes.title}>
                Commite Tittle
            </Typography>
            <CardContent>
                <Typography variant='boddy2' component='p'>
                    Author
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label='link'>
                    <CallMadeIcon />
                </IconButton>
            </CardActions>
        </Card>
    )

}

export default Home;