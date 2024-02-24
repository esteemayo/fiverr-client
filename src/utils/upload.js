import { uploadImage } from '../services/uploadService';

export const upload = async (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'fiverr');

  try {
    const res = await uploadImage(data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
