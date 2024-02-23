import Axios from 'axios';

export const uploadImage = (data) =>
  Axios.post(
    'https://api.cloudinary.com/v1_1/learnhowtocode/image/upload',
    data
  );
