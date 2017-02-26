import Styles from '../Generation/Styles';
import Chain from '../Generation/Chain';
import Body from '../Generation/Elements/Body';
import RouteUtils from './RouteUtils';

export function DefaultRoute(start: (element: Body, style: Styles, children: Chain<Body>) => void){
   RouteHandling.DefaultRoute(start);
}

export function Route(name: string, start: (element: Body, style: Styles, children: Chain<Body>) => void) {
    RouteHandling.Route(name, start);
}

export class RouteHandling {
    static RouteInPlace: boolean = false;
    static All: RouteHandling[] = [];
    static Def?: RouteHandling;

    private _params?: any;
    private _paramsSet?: boolean = false;

    get Params(){
        if (this._paramsSet)
            return this._params;
        return false;
    }

    set Params(val: any){
        if (!val){
            this._paramsSet = false;
        }
        this._paramsSet = true;
        this._params = val;
    }

    static RouteExists(name: string) : RouteHandling {
        name = name.replace("\\", "").replace("/", "");
        for(var i = 0; i < RouteHandling.All.length; i++){
            var r = RouteHandling.All[i];
            if (r.Route.replace("\\", "").replace("/", "") === name)
                return r;
        }
        return undefined;
    }

    static DefaultRoute(start: (element: Body, style: Styles, children: Chain<Body>, route?: RouteHandling) => void){
        var route = new RouteHandling(null, start);
        RouteHandling.Def = route;
        window.onhashchange = () => RouteHandling.FigureRoute();
                if (!RouteHandling.RouteInPlace){
            RouteHandling.FigureRoute();
        }
    }

    static Route(name: string, start: (element: Body, style: Styles, children: Chain<Body>, route?: RouteHandling) => void){
        var route = new RouteHandling(name, start);
        RouteHandling.All.push(route);
    }

    static FigureRoute(params?:any) {
        if (!RouteHandling.Def){
            throw new Error('Default Route is not defined.');
        }

        var uri = RouteUtils.RouteName();
        if (typeof uri === 'undefined'){
            if (params)
                RouteHandling.Def.Params = params;
            RouteHandling.Def.build();
            RouteHandling.RouteInPlace = true;
            return;
        }

        var route = RouteHandling.RouteExists(uri);
        if (route) {
            if (params)
                route.Params = params;
            route.build();
            RouteHandling.RouteInPlace = true;
            return;
        }

        if (!RouteHandling.RouteInPlace) {
            if (params)
                RouteHandling.Def.Params = params;
            RouteHandling.Def.build();
            RouteHandling.RouteInPlace = true;
        }
    }

    constructor (public Route: string, public View: (e: Body, s: Styles, c: Chain<Body>, route?: RouteHandling) => void){
        
    }

    reroute(name?: string, parameters?: any) : boolean{
        var route = name ? RouteHandling.RouteExists(name) : RouteHandling.Def;
        if (!route)
            return false;
        if (parameters)
            route.Params = parameters;
        route.build();
        RouteHandling.RouteInPlace = true;
        return true;
    }

    build() {
        var body = new Body();
        var chain = new Chain(body);
        var params = RouteUtils.RouteParams();
        if (typeof params !== 'undefined')
            this.Params = params;
        this.View(body, body.style, chain, this);
        body.children = chain.getChildren();
        body.generate();
    }
}