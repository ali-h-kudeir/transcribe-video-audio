export type UploadedFile = {
  file: string;
  id: number;
  transcript: string;
  title: string;
};

export type State = {
  files: UploadedFile[];
  allFilesLoading: boolean;
  uploadedFile: null | UploadedFile;
  uploadLoading: boolean;
  uploadPercentage: number;
  transformLoading: boolean;
};

export type Action =
  | { type: 'ALL_FILES'; payload: boolean }
  | { type: 'ALL_FILES_LOADING'; payload: boolean }
  | { type: 'UPLOAD_LOADING'; payload: boolean }
  | { type: 'SET_UPLOAD_PERCENTAGE'; payload: unknown }
  | { type: 'SET_UPLOAD_STATUS'; payload: unknown }
  | { type: 'TRANSFORM'; payload: unknown }
  | { type: 'TRANSFORM_LOADING'; payload: boolean };

export const initialState: State = {
  files: [],
  allFilesLoading: false,
  uploadedFile: null,
  uploadLoading: false,
  uploadPercentage: 0,
  transformLoading: false,
};

export const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case 'ALL_FILES':
      return { ...state, files: payload };
    case 'ALL_FILES_LOADING':
      return { ...state, allFilesLoading: payload };
    case 'UPLOAD_LOADING':
      return { ...state, uploadLoading: payload };
    case 'SET_UPLOAD_PERCENTAGE':
      return { ...state, uploadPercentage: payload };
    case 'SET_UPLOAD_STATUS':
      return { ...state, uploadLoading: false, uploadedFile: payload };
    case 'TRANSFORM':
      return { ...state, uploadedFile: payload };
    case 'TRANSFORM_LOADING':
      return { ...state, transformLoading: payload };
    default:
      return state;
  }
};
