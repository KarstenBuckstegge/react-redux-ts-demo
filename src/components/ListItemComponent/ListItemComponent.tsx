import * as React from 'react';

import { Course } from '../../types';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Favourite from '@material-ui/icons/Favorite';
import FavouriteBorder from '@material-ui/icons/FavoriteBorder';

interface Props {
    course: Course,
    removing: boolean,
    onClickWishList: () => void
}

export const ListItemComponent: React.FC<Props> = props => {
    return (
        <ListItem>
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
    );
}