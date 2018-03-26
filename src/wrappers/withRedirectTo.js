import { lifecycle, pure, compose } from "recompose";
import { redirectTo, anyKeysExist } from "../helpers";

const doRedirect = (path, props, predicate) => {
  if (path && predicate(props)) {
    redirectTo(path);
  }
};

export const withRedirectTo = (path, predicate) =>
  compose(
    pure,
    lifecycle({
      componentDidMount() {
        doRedirect(path, this.props, predicate);
      },
      componentWillReceiveProps(nextProps) {
        doRedirect(path, nextProps, predicate);
      }
    })
  );
