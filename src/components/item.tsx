import { FC } from "react";

export const Item: FC<{
  position: number;
  comments: number;
  title: string;
  url: string;
  user: string;
  points: number;
  time_ago: string;
  domain: string;
  id: number;
}> = ({
  comments,
  domain,
  id,
  points,
  position,
  time_ago,
  title,
  url,
  user,
}) => {
  return (
    <li className="flex gap-2">
      <section></section>
    </li>
  );
};
