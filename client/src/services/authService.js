const baseUrl = "http://localhost:3030/users";

const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  const token = localStorage.getItem("accessToken");

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  return options;
};

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/login`, {
    ...buildOptions({ email, password }),
    method: "POST",
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}/logout`, {
    ...buildOptions(),
    method: "GET",
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const register = async (email, password) => {
  const response = await fetch(`${baseUrl}/register`, {
    ...buildOptions({ email, password }),
    method: "POST",
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};
