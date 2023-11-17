const baseUrl = "http://127.0.0.1:3030/jsonstore/cars";

export const getAll = async () => {
  const response = await fetch(baseUrl);

  const result = await response.json();
  return Object.values(result);
};

export const getSingleCar = async (carId) => {
  const response = await fetch(`${baseUrl}/${carId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch car details for car with id ${carId}`);
  }

  const data = await response.json();
  return data;
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
