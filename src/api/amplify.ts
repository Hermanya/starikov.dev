import { useSuspense } from "use-suspense-today";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";

export const useAmlifyApi = () => {
  const [suspended, setSuspended] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const promise = API.get("starikovDev", "/userData/object/Herman", {});

    promise.then((response) => {
      setData(JSON.parse(response.PushUps || "[]"));
      setSuspended(false);
    });
    setSuspended(true);
  }, []);

  useSuspense(suspended);

  return data;
};
