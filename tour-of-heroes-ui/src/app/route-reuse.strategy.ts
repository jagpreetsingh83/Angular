import {ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle} from '@angular/router';

export class CustomRouteReuseStrategy extends RouteReuseStrategy {

  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null { return null; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false; // future.routeConfig === curr.routeConfig;
  }

  /*
  private handlers : {
    [key : string]: DetachedRouteHandle
  } = {};

  shouldDetach(route : ActivatedRouteSnapshot) : boolean {return true;}

  store(route : ActivatedRouteSnapshot, handle : DetachedRouteHandle) : void {
    this.handlers[
      route
        .url
        .join("/") || route
        .parent
        .url
        .join("/")
    ] = handle;
  }

  shouldAttach(route : ActivatedRouteSnapshot) : boolean {
    return !!this.handlers[
      route
        .url
        .join("/")
    ];
  }

  retrieve(route : ActivatedRouteSnapshot) : DetachedRouteHandle {
    return this.handlers[
      route
        .url
        .join("/") || route
        .parent
        .url
        .join("/")
    ];
  }

  shouldReuseRoute(future : ActivatedRouteSnapshot, curr : ActivatedRouteSnapshot) : boolean {
    console.log(future, curr);
    return future.routeConfig === curr.routeConfig;
  }
  */
}
