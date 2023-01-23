import { useContext, useEffect, useRef } from 'react';
import Loading from '../loading';
import Form from './form';
import { AppContext } from '../../providers/new-provider';
import Video from './video';

export default function New() {
  const [{ uploadedFile, transformLoading, uploadLoading }, dispatch] = useContext(AppContext);
  const ws = useRef<WebSocket>();

  useEffect(() => {
    ws.current = new WebSocket('ws://127.0.0.1:8000/ws/transcribe/');

    ws.current.onopen = () => {
      console.log('connected');
    };

    ws.current.onmessage = (evt: MessageEvent) => {
      const data = JSON.parse(evt.data);
      if (data.type === 'TRANSFORM') {
        dispatch({ type: 'TRANSFORM', payload: data?.value });
        dispatch({ type: 'TRANSFORM_LOADING', payload: false });
      }
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [dispatch]);

  function extractTranscriptions() {
    if (!uploadedFile?.id) {
      return;
    }
    ws.current?.send(JSON.stringify({ file: uploadedFile?.id }));
    dispatch({ type: 'TRANSFORM_LOADING', payload: true });
  }

  function handleStartOver() {
    if (!transformLoading || !uploadLoading) {
      window.location.reload();
    }
  }

  return (
    <div className="grid place-items-center">
      <h1 className="text-2xl my-10">Generate high-quality transcripts and summaries of YouTube videos</h1>
      <Form />
      {uploadedFile ? <Video file={uploadedFile} transformLoading={transformLoading} /> : null}
      {uploadedFile ? (
        <button
          onClick={() => extractTranscriptions()}
          className={`mt-4 bg-teal-500 mx-auto flex items-center text-white py-1 px-4 rounded hover:bg-teal-700 transition duration-500 ease-in-out`}
        >
          {transformLoading ? <Loading /> : null}
          Transform
        </button>
      ) : null}
      {uploadedFile?.file ? (
        <button
          onClick={handleStartOver}
          className={`flex items-center mx-auto mt-4 bg-none text-white py-1 px-4 rounded transition duration-500 ease-in-out `}
        >
          Start Over
        </button>
      ) : null}
    </div>
  );
}
