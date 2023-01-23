import { ROOT_URL } from '@/constants/urls';
import { useCopy } from '@/hooks/use-copy';
import { UploadedFile } from '@/state/reducers/app-reducer';
import Indicators from './indicators';

type Props = {
  file: UploadedFile;
  transformLoading?: boolean;
};

export default function Video({ file, transformLoading }: Props) {
  const copyToClipboard = useCopy();

  const isVideo = file?.file.endsWith('.mp4');

  const src = file?.file.startsWith('/') ? ROOT_URL + file.file : file?.file;

  return (
    <div className="w-full bg-[#101214] text-white py-4 px-4 rounded-md mt-5">
      {isVideo ? (
        <video src={src} width="100%" style={{ maxHeight: '500px' }} controls />
      ) : (
        <audio src={src} controls muted />
      )}
      <Indicators title={file.title} transformLoading={transformLoading} />
      <div className="text-base font-medium border-[1px] border-[#212528] p-2 my-2">
        <div className="mb-2 text-sm">Transcript</div>
        <p className="text-sm">{file.transcript}</p>
      </div>
      <button
        onClick={() => copyToClipboard(file?.transcript)}
        className="bg-slate-800 hover:bg-slate-700 text-sm text-white py-1 px-2 rounded transition duration-500 ease-in-out"
      >
        Copy
      </button>
    </div>
  );
}
