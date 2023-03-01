import { FC } from "react";
import { News } from "../models/news";

export const Item: FC<News> = (news) => {
  
  const handleOnTitleClick = () => {
    console.log('handle on title click');
  };

  const handleOnUserClick = () => {
    console.log('handle on user click');
  };

  const handleOnCommentsClick = () => {
    console.log('handle on comments click');
  };

  return (
    <li className="flex gap-2 p-1">
      <section className="flex flex-col items-left">
        <div className="flex items-center">
          <p className="text-md text-black cursor-pointer" onClick={handleOnTitleClick}>{news.title}</p>
          <p className="text-xs text-gray-400 ml-1 cursor-pointer hover:underline">{'(' + news.domain + ')'}</p>
        </div>
        <div className="flex items-center">
          <p className="text-xs text-gray-400">{news.points + ' points'}</p>
          <p className="text-xs text-gray-400 ml-1" onClick={handleOnUserClick}>{'by ' + news.user}</p>
          <p className="text-xs text-gray-400 ml-1 cursor-pointer hover:underline">{' ' + news.time_ago}</p>
          <p className="text-xs text-gray-400 ml-1">{'|'}</p>
          <p className="text-xs text-gray-400 ml-1 cursor-pointer hover:underline" onClick={handleOnCommentsClick}>
            {news.comments_count + ' comments'}
          </p>
        </div>
      </section>
    </li>
  );
};
