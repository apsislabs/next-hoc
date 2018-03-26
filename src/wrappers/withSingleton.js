import { getContext, withContext } from "recompose";

export const SingletonProvider = key => BaseComponent =>
  withContext({ [key]: PropTypes.object }, props => ({ [key]: props }))(props =>
    React.Children.only(props.children)
  )(BaseComponent);

export const withSingleton = key => BaseComponent =>
  getContext({ [key]: PropTypes.object })(BaseComponent);
