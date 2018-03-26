import Router from "next/router";
import some from "lodash.some";
import has from "lodash.has";

export const anyKeysExist = (obj, keys) => {
  return some(keys, k => _.has(obj, k));
};

export const redirectTo = path => {
  if (process.browser) {
    Router.replace({
      pathname: path
    });
  }
};
