import { FC } from "react";
import { News } from "../models/News";

export const Item: FC<News> = (news) => {
  return (
    <li className="flex gap-2">
      <section className="flex flex-col items-left">
        <div className="flex items-center">
          <p className="text-md text-black">{news.title}</p>
          <p className="text-xs text-gray-400 ml-1">{'(' + news.domain + ')'}</p>
        </div>
        <p className="text-xs text-gray-400">
          { news.points + ' points by ' + news.user + ' ' + news.time_ago }
        </p>
      </section>
    </li>
  );
};
