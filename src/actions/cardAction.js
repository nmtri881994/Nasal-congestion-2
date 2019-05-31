import { CLOSE_MEDIA_DISPLAY, DISPLAY_MEDIA } from './types';

export const viewMedia = (media) => {
    return {
        type: DISPLAY_MEDIA,
        payload: media
    };
};

export const closeMediaDisplay = () => {
    return {
        type: CLOSE_MEDIA_DISPLAY
    };
}