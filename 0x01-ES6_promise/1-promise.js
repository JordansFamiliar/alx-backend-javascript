export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      const obj = {
        status: 200,
	body: 'Success',
      };
      resolve(obj);
    } else {
      const msg = "The fake API is not working currently";
      reject(msg);
    }
  });

  return myPromise;
}
