export const api = {
  post: (url, body) =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: { url, body },
          }),
        5000
      )
    ),
};

export const pay = async (data) => {
  try {
    const res = await api.post('/pagar', data);
    return [null, res];
  } catch (err) {
    return [err];
  }
};
