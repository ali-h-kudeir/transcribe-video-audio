export function useCopy() {
  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value).then(
      function () {
        console.log('Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return copyToClipboard;
}
