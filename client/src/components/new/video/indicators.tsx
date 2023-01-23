import Loading from '@/components/loading';

type Props = {
  title?: string;
  transcript?: string;
  transformLoading?: boolean;
};

function Indicators({ title, transcript, transformLoading }: Props) {
  return (
    <div className="flex items-center mt-5">
      <div className="border-[1px] border-[#212528] text-gray-300 py-1 px-2 rounded-md flex-1">
        <a href={title} className="text-[14px] font-medium" target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>

      <div className="flex ml-2">
        <div className="flex items-center">
          {transcript && !transformLoading ? (
            <div className="mr-1">
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : null}
          {transformLoading ? <Loading /> : null}
          <div>
            <p className={`text-sm text-gray-300 ${transcript ? 'opacity-100' : 'opacity-30'}`}>Transcription</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indicators;
