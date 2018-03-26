import { getContext, withContext } from "recompose";

const SingletonProvider = key => BaseComponent =>
  withContext({ [key]: PropTypes.object }, props => ({ [key]: props }))(props =>
    React.Children.only(props.children)
  )(BaseComponent);

const withSingleton = key => BaseComponent =>
  getContext({ [key]: PropTypes.object })(BaseComponent);

export { SingletonProvider, withSingleton };
