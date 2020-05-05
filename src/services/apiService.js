export const pay = async (data) => {
  try {
    const config = {
      method: 'POST',
      body: JSON.stringify(data),
    };

    const res = await fetch('https://api.com/pagar', config);
    const content = await res.json();

    return [null, content];
  } catch (err) {
    return [err];
  }
};
