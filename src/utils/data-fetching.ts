import { useEffect, useState } from "react";

export const useService = <T extends (...args: any[]) => Promise<any>>(
  fn: T
) => {
  type TResponse = T extends (...args: any[]) => Promise<infer T> ? T : never;
  const [data, setData] = useState<TResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setIsLoading(true);
    fn()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};
