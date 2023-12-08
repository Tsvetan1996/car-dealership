const baseUrl = "http://127.0.0.1:3030/data/cars";

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
  const token = localStorage.getItem("accessToken");
  if (!token) return;

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(carData),
  });
  const result = await response.json();
  return result;
};

export const edit = async (carId, carData) => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;

  const response = await fetch(`${baseUrl}/${carId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(carData),
  });

  const result = await response.json();
  return result;
};

export const remove = async (carId) => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;

  const response = await fetch(`${baseUrl}/${carId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });

  const result = await response.json();
  return result;
};

export const getUserListings = async (userId) => {
  const response = await fetch(baseUrl);

  const result = await response.json();

  return Object.values(result.filter((car) => car._ownerId === userId));
};
