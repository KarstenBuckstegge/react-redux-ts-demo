import * as React from 'react';

import { ListItem } from '../../containers/ListItemContainer';

import { Course } from '../../types';

import styles from './list.module.scss';

interface Props {
    courseList: Course[]
}

export const ListComponent: React.FC<Props> = props => (
    <div className={styles.list}>
        {props.courseList.map(course => {
            return (
                <ListItem course={course} key={course.courseId} />
            )
        })}
    </div>
);