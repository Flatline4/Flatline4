import Styles from '../Generation/Styles';
import Chain from '../Generation/Chain';
import Body from '../Generation/Elements/Body';

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

    static RouteExists(name: string) : RouteHandling {
        name = name.replace("\\", "").replace("/", "");
        for(var i = 0; i < RouteHandling.All.length; i++){
            var r = RouteHandling.All[i];
            if (r.Route.replace("\\", "").replace("/", "") === name)
                return r;
        }
        return undefined;
    }

    static DefaultRoute(start: (element: Body, style: Styles, children: Chain<Body>) => void){
        var route = new RouteHandling(null, start);
        RouteHandling.Def = route;
        window.onhashchange = () => RouteHandling.FigureRoute();
        if (!RouteHandling.RouteInPlace){
            RouteHandling.FigureRoute();
        }
    }

    static Route(name: string, start: (element: Body, style: Styles, children: Chain<Body>) => void){
        var route = new RouteHandling(name, start);
        RouteHandling.All.push(route);
    }

    static FigureRoute() {
        if (!RouteHandling.Def){
            throw new Error('Default Route is not defined.');
        }

        var fullUrl = document.URL;
        if (fullUrl.indexOf('#') === -1 || 
            fullUrl.indexOf('#') === fullUrl.length - 1){
            RouteHandling.Def.build();
            RouteHandling.RouteInPlace = true;
            return;
        }

        var uri = document.URL.split('#')[1];
        var route = RouteHandling.RouteExists(uri);
        if (route) {
            route.build();
            RouteHandling.RouteInPlace = true;
            return;
        }

        if (!RouteHandling.RouteInPlace) {
            RouteHandling.Def.build();
            RouteHandling.RouteInPlace = true;
        }
    }

    constructor (public Route: string, public View: (e: Body, s: Styles, c: Chain<Body>) => void){
        
    }

    build() {
        var body = new Body();
        var chain = new Chain(body);
        this.View(body, body.style, chain);
        body.children = chain.getChildren();
        body.generate();
    }
}