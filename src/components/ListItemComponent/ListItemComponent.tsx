import * as React from 'react';
import classnames from 'classnames';

import { Course } from '../../types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Favourite from '@material-ui/icons/Favorite';
import FavouriteBorder from '@material-ui/icons/FavoriteBorder';

import styles from './listItem.module.scss';

interface Props {
    course: Course,
    removing: boolean,
    onClickWishList: () => void,
    onClickUndo: () => void
}

export const ListItemComponent: React.FC<Props> = props => {
    return (
        <>
            <Card className={classnames(styles.card, {[styles.removing]: props.removing})}>
                <CardMedia
                    image="http://placekitten.com/200/300"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {props.course.courseName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button className={styles.heart} type="button" onClick={props.onClickWishList}>
                    {props.course.wishListFlag ? (
                        <Favourite />
                    ) : (
                        <>
                        <FavouriteBorder />
                        </>
                    )}
                </button>
                </CardActions>
            </Card>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={props.removing}
                message={<span>Removed from Favorites</span>}
                action={
                    <Button key="undo" color="secondary" size="small" onClick={props.onClickUndo}>
                        UNDO
                    </Button>
                }
            />
        </>
    );
}