export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          token: 'ber-394012394231423',
          user: {
            name: 'Fulla',
            email: 'fulla@contact.com',
          },
        }),
      1234,
    );
  });
}
