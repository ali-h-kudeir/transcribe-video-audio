const useJsonDownloader = () => {
  const downloadJson = (json: any) => {
    const jsonData = JSON.stringify(json);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return downloadJson;
};

export default useJsonDownloader;
