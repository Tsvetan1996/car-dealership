const baseUrl = "http://localhost:3030/data/comments";

const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
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

const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
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

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
    load: `owner=_ownerId:users`,
  });

  const result = await request("GET", `${baseUrl}?${query}`);

  return result;
};

export const create = async (gameId, text) => {
  const newComment = await request("POST", baseUrl, {
    gameId,
    text,
  });

  return newComment;
};
