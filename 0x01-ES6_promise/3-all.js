import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const responsePhoto = await uploadPhoto();
    const responseUser = await createUser();

    console.log(`${responsePhoto.body} ${responseUser.firstName} ${responseUser.lastName}`);
  } catch (error) {
    console.log("Signup system offline");
  }
}
