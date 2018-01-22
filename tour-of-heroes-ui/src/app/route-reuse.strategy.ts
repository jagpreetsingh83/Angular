import {ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle} from '@angular/router';

export class CustomRouteReuseStrategy extends RouteReuseStrategy {

  /*
  shouldDetach(route : ActivatedRouteSnapshot) : boolean {return false;}
  store(route : ActivatedRouteSnapshot, detachedTree : DetachedRouteHandle) : void {}
  shouldAttach(route : ActivatedRouteSnapshot) : boolean {return false;}
  retrieve(route : ActivatedRouteSnapshot) : DetachedRouteHandle | null {return null;}
  shouldReuseRoute(future : ActivatedRouteSnapshot, curr : ActivatedRouteSnapshot) : boolean {
    return false; // future.routeConfig === curr.routeConfig;
  }*/

  handlers : {
    [key : string]: DetachedRouteHandle
  } = {};

  calcKey(route : ActivatedRouteSnapshot) {
    let next = route;
    let url = "";
    while (next) {
      if (next.url) {
        url = next
          .url
          .join('/');
      }
      next = next.firstChild;
    }
    console.debug('url', url);
    return url;
  }

  shouldDetach(route : ActivatedRouteSnapshot) : boolean {
    //console.debug('CustomReuseStrategy:shouldDetach', route);
    return true;
  }

  store(route : ActivatedRouteSnapshot, handle : DetachedRouteHandle) : void {
    //console.debug('CustomReuseStrategy:store', route, handle);
    this.handlers[this.calcKey(route)] = handle;

  }

  shouldAttach(route : ActivatedRouteSnapshot) : boolean {
    //console.debug('CustomReuseStrategy:shouldAttach', route);
    return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
  }

  retrieve(route : ActivatedRouteSnapshot) : DetachedRouteHandle {
    //console.debug('CustomReuseStrategy:retrieve', route);
    if(!route.routeConfig) 
      return null;
    return this.handlers[this.calcKey(route)];
  }

  shouldReuseRoute(future : ActivatedRouteSnapshot, curr : ActivatedRouteSnapshot) : boolean {
    //console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
    console.log(this.calcKey(curr), this.calcKey(future));
    return this.calcKey(curr) === this.calcKey(future);
  }
}
