import { uploadPhoto, createUser } from './utils'

export default async function asyncUploadUser() {
    let msg = {};

    try {
        const photo = await uploadPhoto();
        const user = await createUser();

        msg = { photo, user };
    } catch (err) {
        msg = { photo: null, user: null };
    }

    return msg
}