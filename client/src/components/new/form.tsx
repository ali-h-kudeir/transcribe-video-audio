'use client';
import { fileUpload } from '@/state/actions/file-upload';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import Loading from '../loading';
import { AppContext } from '../../providers/new-provider';

export default function Form() {
  const [file, setFile] = useState<File | null>(null);
  const [{ uploadLoading, uploadPercentage, uploadedFile }, dispatch] = useContext(AppContext);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  }

  async function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (!file) {
      return;
    }
    e.preventDefault();
    dispatch({ type: 'UPLOAD_LOADING', payload: true });
    await fileUpload({ file, fileName: file?.name, dispatch });
    setFile(null);
  }

  const disabled = uploadLoading || !!uploadedFile?.file;

  return (
    <div className="relative rounded-md w-full my-3">
      <form className="w-full grid place-items-center">
        <input
          type="file"
          disabled={disabled}
          accept=".mp3, .mp4"
          onChange={handleFileChange}
          className={`${
            disabled ? 'opacity-50' : 'opacity-100'
          } form-input py-3 px-4 w-full border-none leading-5 rounded-md transition duration-150 ease-in-out bg-[#101214] border placeholder-grey-600 text-white focus:outline-none`}
          placeholder="Video/Audio File"
        />
        <div className="mt-2 " />
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${uploadPercentage}%` }}
          >
            {uploadPercentage}%
          </div>
        </div>
        {!uploadedFile?.file ? (
          <button
            disabled={disabled}
            onClick={handleClick}
            type="submit"
            className={`flex items-center mt-4 bg-indigo-500 text-white py-1 px-4 rounded hover:bg-indigo-700 transition duration-500 ease-in-out `}
          >
            {uploadLoading ? <Loading /> : null}
            Upload Video/Audio
          </button>
        ) : null}
      </form>
    </div>
  );
}
