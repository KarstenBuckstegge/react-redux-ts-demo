import {
    ApplicationState,
    ListActionTypes,
    TOGGLE_WISHLIST
  } from './types';
  
  const initialState: ApplicationState = {
    courseList: []
  }
  
  export function listReducer(
    state = initialState,
    action: ListActionTypes
  ): ApplicationState {
    switch (action.type) {
      case TOGGLE_WISHLIST:
        return { courseList:
            state.courseList.map(course => course.courseId === action.payload.courseId ? { ...course, wishListFlag: !course.wishListFlag } : course)
        }

      default:
        return state
    }
  }