const baseUri = "https://api.hackerwebapp.com";
import { z } from "zod";

const newsZod = z.object({
  comments_count: z.number(),
  domain: z.string(),
  id: z.number(),
  points: z.number().nullable(),
  time: z.number(),
  time_ago: z.string(),
  title: z.string(),
  type: z.string(),
  url: z.string(),
  user: z.string().nullable(),
});

const newsArray = z.array(newsZod);

export const getNews = async ({ page }: { page?: number } = {}) => {
  const res = await fetch(`${baseUri}/news${page ? "?page=" + page : ""}`);
  const json = await res.json();

  return newsArray.parse(json);
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
