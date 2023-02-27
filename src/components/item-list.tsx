import { News } from "../models/news";
import { Item } from "./item";

const ItemList = (props: { newsList?: News[] | undefined }) => {
    return (<div>
        <ul className="flex flex-col gap-3">
            {props.newsList ?
                props.newsList.map((news: News) =>
                    <Item
                        position={news.position}
                        comments_count={news.comments_count}
                        title={news.title}
                        url={news.url}
                        user={news.user}
                        points={news.points}
                        time_ago={news.time_ago}
                        domain={news.domain}
                        id={news.id}
                        key={news.id} />)
                : (<p>There is no news</p>)}
        </ul>
    </div>);

};

export default ItemList;