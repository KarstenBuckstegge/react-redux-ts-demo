import * as React from 'react';

import { ListItem } from '../../containers/ListItemContainer';

import { Course } from '../../types';

interface Props {
    courseList: Course[]
}

export const ListComponent: React.FC<Props> = props => (
    <ul>
        {props.courseList.map(course => {
            return (
                <ListItem course={course} />
            )
        })}
    </ul>
);