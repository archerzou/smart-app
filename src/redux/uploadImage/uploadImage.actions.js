import axios from 'axios';
import uploadImageActionTypes from './uploadImage.actionTypes';

const uploadImageStart = () => ({
  type: uploadImageActionTypes.UPLOAD_IMAGE_START,
});
const uploadImageSuccess = (imageUrl) => ({
  type: uploadImageActionTypes.UPLOAD_IMAGE_SUCCESS,
  payload: imageUrl,
});
const uploadImageFailure = (errorMsg) => ({
  type: uploadImageActionTypes.UPLOAD_IMAGE_FAILURE,
  payload: errorMsg,
});

export const setImageDimensions = (width, height) => ({
  type: uploadImageActionTypes.SET_IMAGE_DIMENSIONS,
  payload: { width, height },
});

export const uploadImage = (imageFile) => {
  return async (dispatch) => {
    dispatch(uploadImageStart());
    const imgbbKey = '6f77a99ffbaac30362cfda6a41c0fc8d';
    try {
      const file = imageFile;
      const fileName = file.name;
      const idxDot = fileName.lastIndexOf('.');
      const extFreeName = fileName.substr(0, idxDot).toLowerCase();

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const encoded = await reader.result
          .toString()
          .replace(/^data:(.*,)?/, '');

        const bodyFormData = new FormData();
        bodyFormData.append('image', encoded);
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbbKey}&name=${extFreeName}`,
          bodyFormData
        );
        const imageUrl = response.data.data.url;
        dispatch(uploadImageSuccess(imageUrl));
      };
    } catch (error) {
      dispatch(uploadImageFailure(error.message));
    }
  };
};