import { useSuspense } from "use-suspense-today";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";

export const useAmlifyApi = (login: string) => {
  const [suspended, setSuspended] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const promise = API.get("starikovDev", `/userData/object/${login}`, {});

    promise.then((response) => {
      setData(response);
      setSuspended(false);
    });
    setSuspended(true);
  }, [login]);

  useSuspense(suspended);

  return data;
};
