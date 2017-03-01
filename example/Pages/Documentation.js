Flatline.Route('Documentation', function (body, style, c, route){
    AppendNavbar(body, style, c, route);
    c.div(function (p, s, c){
        p.className = 'container';
        c.div(function (p, s, c){
            p.className = 'row';
            c.div(function (p, s, c){
                p.className = 'col-lg-12';
                c.h1(function (p, s, c){
                    c.text('Documentation is coming soon!')
                }).p(function(p,s,c){
                    c.text('After an extensive re-write obviously.');
                })
            })
        })
    });
});