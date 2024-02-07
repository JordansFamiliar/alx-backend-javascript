import { signupUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const myPromise = new promise((resolve, reject) {
    const responsePhotoUpload = await uploadPhoto(filename);
    const responseUserSignup = await signupUser(firstName, lastName);

    
  });
}
