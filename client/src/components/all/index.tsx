import useJsonDownloader from '@/hooks/use-download-json';
import { getAllFiles } from '@/state/actions/all-files';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../providers/new-provider';
import Video from '../new/video';

export default function AllFiles() {
  const [{ files }, dispatch] = useContext(AppContext);

  const exportJson = useJsonDownloader();

  useEffect(() => {
    getAllFiles({ dispatch });
  }, [dispatch]);

  return (
    <div className="grid place-items-center">
      {files.length > 0 ? (
        <button
          onClick={() => exportJson(files)}
          className={`flex items-center mt-10 bg-teal-500 text-white py-1 px-4 rounded transition duration-500 ease-in-out `}
        >
          Export JSON
        </button>
      ) : null}
      {files.map((file) => (
        <Video file={file} key={file.id} />
      ))}
    </div>
  );
}
