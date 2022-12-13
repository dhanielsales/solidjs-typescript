interface RouteMapping {
  Home: () => string;
  About: () => string;
}

export const routeMapping: RouteMapping = {
  Home: () => '/',
  About: () => '/about',
};
