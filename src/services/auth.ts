const mockAuthData = {
  token: 'ber-394012394231423',
  user: {
    name: 'Fulla',
    email: 'fulla@contact.com',
  },
};

export function signIn(): Promise<typeof mockAuthData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAuthData), 1234);
  });
}
