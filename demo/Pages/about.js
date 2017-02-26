Flatline.Route('About', function(body, style, children, route){
    AppendNavbar(body, style, children, route)
    children.div(function(p, s, c){
        p.className = 'container';
        c.div(function(p, s, c){
            p.className = 'row';
            c.div(function(p, s, c){
                p.className = 'col-lg-12';
                c.h1(function(parent, style, children) {
                        children
                            .text('About Us');
                })
                .p(function(parent, style, children) {
                        children
                            .text('We are the devs behind flatline4! It\'s to die 4!');
                    })
            })
        }).div(function (p, s, c){
            p.className = 'row';
            c.div(function (p,s,c) {
                p.className = 'col-lg-12';
                c.h2(function(parent, style, children) {
                        children
                            .text('Our Team');
                })
            })
            var users = ['Joe', 'Brian', 'Christian'];
            for(var usr of users){
                c.div(function (p,s,c){
                    p.className = 'col-lg-4 col-sm-6 text-center';
                    c.img(function (p, s, c){
                        p.className = 'img-circle img-responsive img-center';
                        s.height = '200px';
                        s.width = '200px';
                        p.src = '../logo/Logo.png';
                    }).h3(function (p,s,c){
                        c.text(usr);
                    }).p(function (p,s,c){
                        c.text('A Developer')
                    });
                })
            }
        })
    });
});