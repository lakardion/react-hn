const baseUri = "https://api.hackerwebapp.com";
export const getNews = async ({ page }: { page?: number } = {}) => {
  const res = await fetch(`${baseUri}/news${page ? "?page=" + page : ""}`);
  const json = await res.json();
  return json;
};

export const getItem = async (id: string) => {
  const res = await fetch(`${baseUri}/items/${id}`);
  const json = await res.json();
  return json;
};

const getOfficialUriUser = (id: string) =>
  `https://hacker-news.firebaseio.com/v0/user/${id}`;

export const getUser = async (id: string) => {
  const res = await fetch(getOfficialUriUser(id));
  const json = await res.json();
  return json;
};
