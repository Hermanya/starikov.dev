import { useSuspense } from "use-suspense-today";
import { useState, useEffect, useCallback } from "react";
import { API } from "aws-amplify";

export const useAmlifyApi = (login: string, ProjectionExpression: string) => {
  const [suspended, setSuspended] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const promise = API.get("starikovDev", `/userData/object/${login}`, {
      queryStringParameters: { ProjectionExpression },
    });

    promise.then((response) => {
      setData(response);
      setSuspended(false);
    });
    setSuspended(true);
  }, [ProjectionExpression, login]);

  useSuspense(suspended);

  const updateData = useCallback(
    (newData) => {
      API.put("starikovDev", "/userData", {
        body: {
          id: login,
          ...newData,
          AccessKey: localStorage.AccessKey,
        },
      });
      setData({
        ...data,
        ...newData,
      });
    },
    [data, login]
  );

  return [data, updateData];
};
