import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState, Course } from '../types';

import { ListComponent } from '../components/ListComponent/ListComponent';


interface AppProps {
    courseList: Course[]
}

class ListContainer extends React.Component<AppProps> {
    render() {
        return (
            <ListComponent courseList={this.props.courseList} />
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    courseList: state.courseList
})

export const List = connect(mapStateToProps)(ListContainer);