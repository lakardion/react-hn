import { Outlet, ReactRouter, RootRoute, Route } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { getNews } from "./services/hn";
import { useService } from "./utils/data-fetching";

const News = () => {
  const [page, setPage] = useState(1);
  const getNewsByPage = useCallback(() => {
    return getNews({ page });
  }, [page]);
  const { data: news } = useService(getNewsByPage);

  return (
    <section className="flex-grow">
      <ul className="flex flex-col gap-3">
        {Array.isArray(news)
          ? news.map((n) => <li key={n.id}>{n.title}</li>)
          : null}
      </ul>
    </section>
  );
};

const Layout = () => {
  return (
    <main>
      <header className="bg-orange-600 flex gap-1 p-1 items-center">
        <div className="border border-white px-1">
          <p className="text-white text-xs">Y</p>
        </div>
        <section className="flex flex-col gap-1">
          <p className="font-bold text-xs">Hacker News</p>
          <ul className="flex gap-2"></ul>
        </section>
      </header>
      <Outlet />
    </main>
  );
};

const rootRoute = new RootRoute();
const layoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: News,
});
const newsRoute = new Route({
  getParentRoute: () => layoutRoute,
  component: News,
  path: "/news",
});

const routeTree = rootRoute.addChildren([indexRoute, newsRoute]);

export const router = new ReactRouter({ routeTree });

// embrace TS
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
