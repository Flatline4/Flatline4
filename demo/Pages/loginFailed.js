Flatline.Route('login_fail', function (body, styles, children, route){
    AppendNavbar(body, styles, children, route);
    children.div(function (p,s,c) {
        p.className = 'container';
        c.h1(function (p,s,c){
            c.text('Login Failed: ');
        })
        .p(function (p,s,c) {
            c.text(JSON.stringify(route.Params));  
        });
    });
});