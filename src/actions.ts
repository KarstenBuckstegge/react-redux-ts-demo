import { TOGGLE_WISHLIST, ListActionTypes } from './types';

export function toggleWishlist(courseId: number): ListActionTypes {
    return {
      type: TOGGLE_WISHLIST,
      payload: { courseId }
    }
  }