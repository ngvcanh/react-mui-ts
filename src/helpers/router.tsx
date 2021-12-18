import { Route } from "react-router-dom";
import { IRoute } from "types/Router";

export const getRoutesComponent = (routes: Partial<IRoute>[]) => {
  return routes.map((route, index) => {
    if (!route.path) return null;

    const routePath = route.path.replace(/\/?(\?.*)*$/g, '/*$1').replace(/\/\*\/\*?/, '/*');

    if (route.children?.length){
      return <Route path={ routePath } key={ index }>
        { getRoutesComponent(route.children) }
      </Route>
    }

    const RouteElement = route.element;
    if (!RouteElement) return null;

    return <Route path={ route.path } element={ <RouteElement /> } key={ index } />
  });
}