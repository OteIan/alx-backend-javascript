export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstname: `${firstName}`,
      lastName: `${lastName}`,
    });
  });
}
