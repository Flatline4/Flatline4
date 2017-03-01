Flatline.Route('login_success', function (body, styles, children, route){
    AppendNavbar(body, styles, children, route);
    children.div(function (p,s,c) {
        p.className = 'container';
        c.h1(function (p,s,c){
            c.text('Login Success! Welcome back ' + route.Params.name);
        }).div(function (p,s,c){
            p.className = 'row';
            c.div(function (p,s,c){
                p.className = 'col-xs-6';
                c.label(function (p,s,c){
                    c.text('Username: ' + route.Params.name);
                })
            }).div(function (p,s,c){
                p.className = 'col-xs-6';
                c.label(function (p,s,c){
                    c.text('Email: ' + route.Params.email);
                })
            }).div(function (p,s,c){
                p.className = 'col-xs-6';
                c.label(function (p,s,c){
                    c.text('Age: ' + route.Params.age);
                })
            })
        })
    });
});