import { Action } from '@/state/reducers/app-reducer';
import axios from 'axios';
import { Dispatch } from 'react';
import { ALL_FILES_URL } from '../../constants/urls';

export const getAllFiles = async ({ dispatch }: { dispatch: Dispatch<Action> }) => {
  await axios
    .get(ALL_FILES_URL)
    .then(async (res) => {
      dispatch({ type: 'ALL_FILES', payload: res.data });
      dispatch({ type: 'ALL_FILES_LOADING', payload: false });
    })
    .catch(() => {
      dispatch({ type: 'ALL_FILES_LOADING', payload: false });
    });
};
