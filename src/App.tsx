import { useCallback, useState } from "react";
import ItemList from "./components/item-list";
import { News } from "./models/news";
import { getNews } from "./services/hn";
import { useService } from "./utils/data-fetching";

function App() {
  const [page, setPage] = useState(1);
  const getNewsByPage = useCallback(() => {
    return getNews({ page });
  }, [page]);
  const { data: news } = useService(getNewsByPage);
  console.log(news);
  return (
    <main className="p-1.5">
      <header className="bg-orange-600 flex gap-1 p-1 items-center">
        <div className="border-2 border-white px-1.5">
          <p className="text-white">Y</p>
        </div>
        <p className="bg-orange-100/50">Hacker News</p>
      </header>
      <section className="flex-grow">
        <ItemList newsList={news} />
      </section>
    </main>
  );
}

export default App;
