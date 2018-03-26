import { branch, pure, compose, renderComponent } from "recompose";
import { withRedirectTo } from "./withRedirectTo";

const Loading = props => "Loading...";

export const renderIfPermitted = (
  predicate,
  LoadingComponent = Loading
) => BaseComponent =>
  branch(
    p => predicate(p),
    renderComponent(BaseComponent),
    renderComponent(LoadingComponent)
  )(BaseComponent);

export const withPermissionCheck = (
  redirectTo = "/",
  predicate,
  LoadingComponent = Loading
) => BaseComponent =>
  compose(
    pure,
    withRedirectTo(redirectTo, p => predicate(p)),
    renderIfPermitted(predicate, LoadingComponent)
  )(BaseComponent);
