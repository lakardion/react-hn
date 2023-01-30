import { useEffect, useState } from "react";

export const useService = <TResponse, T extends () => Promise<TResponse>>(
  fn: T
) => {
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
