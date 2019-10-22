import * as React from 'react';
import { connect } from 'react-redux';

import { ListItemComponent } from '../components/ListItemComponent/ListItemComponent';

import { toggleWishlist } from '../actions';
import { Course } from '../types';

interface OwnProps {
    course: Course
}

interface DispatchProps {
    toggleWishlist: typeof toggleWishlist
}

type Props = DispatchProps & OwnProps;

interface State {
    removing: boolean;
}

class ListItemContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            removing: false
        }

        this.onClickWishList = this.onClickWishList.bind(this);
    }

    componentWillUpdate(prevProps: Props) {
        if (!prevProps.course.wishListFlag && this.props.course.wishListFlag) {
            this.setState({
                removing: true
            });

            setTimeout(() => {
                this.setState({
                    removing: false
                });
            }, 5000);
        }
    }

    render() {
        return (
            <ListItemComponent course={this.props.course} onClickWishList={this.onClickWishList} removing={this.state.removing} />
        );
    }

    onClickWishList() {
        this.props.toggleWishlist(this.props.course.courseId);
    }
}

const mapDispatchToProps = { toggleWishlist }

export const ListItem = connect(null, mapDispatchToProps)(ListItemContainer);