export function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    if (true) {
      const result = 'Success';
      resolve(result);
    } else {
      const error = new Error('Failed');
      reject(error);
    }
  });

  return myPromise;
}
