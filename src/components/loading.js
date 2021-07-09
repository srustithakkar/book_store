import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing(2),
    },
});

const Loading = (props) => {
        const { classes } = props;
        return (
            <div className="container h-100 w-100  position-fixed" style={{ top: 0, left: 0, right: 0 }}>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <CircularProgress style={{width:50}} className={classes.progress} />
                        <p>Have some patience buddy!!!</p>
                    </div>
                </div>
            </div>
        );
    }

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);