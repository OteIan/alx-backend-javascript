import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ])
    .then((messages) => {
      console.log(`${messages[0].body} ${messages[1].firstName} ${messages[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
