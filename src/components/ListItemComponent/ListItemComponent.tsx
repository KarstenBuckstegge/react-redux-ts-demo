import * as React from 'react';
import classnames from 'classnames';

import { Course } from '../../types';

import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
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
            <ListItem className={classnames({[styles.removing]: props.removing})}>
                <ListItemAvatar>
                    <Avatar src="http://placekitten.com/200/300" />
                </ListItemAvatar>
                <ListItemText>{props.course.courseName}</ListItemText>
                    <button type="button" onClick={props.onClickWishList}>
                    {props.course.wishListFlag ? (
                        <Favourite />
                    ) : (
                        <>
                        <FavouriteBorder />
                        </>
                    )}
                </button>
            </ListItem>
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