const baseUrl = "http://127.0.0.1:3030/jsonstore/cars";

export const getAll = async () => {
  const response = await fetch(baseUrl, { method: "GET" });

  const result = await response.json();
  return Object.values(result);
};

export const sell = async (carData) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });
  const result = await response.json();
  return result;
};
