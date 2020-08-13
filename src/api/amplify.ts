import { API } from "aws-amplify";
import React from "react";

const promises: {
  [login: string]: {
    [key: string]: {
      status?: "resolved" | "rejected";
      value?: any;
      promise?: Promise<any>;
    };
  };
} = {};

export const fetchUserData = (login: string, ProjectionExpression: string) => {
  const promise = API.get("starikovDev", `/userData/object/${login}`, {
    queryStringParameters: { ProjectionExpression },
  });

  ProjectionExpression.split(", ").forEach((key) => {
    promises[login] = promises[login] || {};
    promises[login][key] = {
      promise,
    };
  });

  promise.then((response) => {
    ProjectionExpression.split(", ").forEach((key) => {
      promises[login][key].status = "resolved";
      promises[login][key].value = response[key];
    });
  });
  return promise;
};

export const useAmlifyApi = (login: string, ProjectionExpression: string) => {
  const updateData = React.useCallback(
    (newData) => {
      API.put("starikovDev", "/userData", {
        body: {
          id: login,
          ...newData,
          AccessKey: localStorage.AccessKey,
        },
      });
      Object.keys(newData).forEach((key) => {
        promises[login][key].value = newData[key];
      });
    },
    [login]
  );
  const keys = ProjectionExpression.split(", ");
  const ableToResolve = keys.every((key) => {
    return promises[login]?.[key]?.status === "resolved";
  });

  if (!ableToResolve) {
    throw fetchUserData(login, ProjectionExpression);
  }
  return [
    keys.reduce((response, key) => {
      response[key] = promises[login][key].value;
      return response;
    }, {} as any),
    updateData,
  ];
};
