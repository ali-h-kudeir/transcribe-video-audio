import { Action } from '@/state/reducers/app-reducer';
import axios, { AxiosProgressEvent } from 'axios';
import { Dispatch } from 'react';
import { FILE_UPLOAD_URL } from '../../constants/urls';

export const fileUpload = async ({
  file,
  fileName,
  dispatch,
}: {
  file: File;
  fileName: string;
  dispatch: Dispatch<Action>;
}) => {
  const formData = new FormData();

  formData.append('title', fileName);

  formData.append('file', file);

  const config = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: async (event: AxiosProgressEvent) => {
      const percent = Math.floor((event.loaded / (event?.total ?? 1)) * 100);
      await dispatch({ type: 'SET_UPLOAD_PERCENTAGE', payload: percent });
    },
  };

  await axios
    .post(FILE_UPLOAD_URL, formData, config)
    .then(async (res) => {
      dispatch({ type: 'SET_UPLOAD_STATUS', payload: res.data });
    })
    .catch(() => {
      dispatch({ type: 'UPLOAD_LOADING', payload: false });
    });
};
