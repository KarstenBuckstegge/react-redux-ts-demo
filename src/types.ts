export interface ApplicationState {
    courseList: Course[];
}

export interface Course {
    courseId: number,
    courseName: string,
    wishListFlag: boolean
}

export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST'

interface ToggleWishlistAction {
  type: typeof TOGGLE_WISHLIST
  payload: { courseId: number }
}

export type ListActionTypes = ToggleWishlistAction;