function AppendNavbar(body, style, children, route){
    var links = ['Home', 'About', 'Documentation'];
    return children
        .nav(function(parent, style, children) {
            parent.className = 'navbar navbar-default';
            children
                .div(function(parent, style, children) {
                    parent.className = 'container';
                    children
                        .div(function(parent, style, children) {
                            parent.className = 'navbar-header';
                            children
                                .a(function(parent, style, children) {
                                    parent.className = 'navbar-brand';
                                    parent.href = '#';
                                    children
                                        .text('Flatline');
                                });
                        })
                        .div(function(parent, style, children) {
                            parent.className = 'collapse navbar-collapse';
                            children
                                .ul(function(parent, style, children) {
                                    parent.className = 'nav navbar-nav';
                                    for (var i of links) {
                                        children.li(function(parent, style, children) {
                                            children
                                                .a(function(parent, style, children) {
                                                    parent.href = i == 'Home' ? '#': '#' + i;
                                                    children
                                                        .text(i);
                                                });
                                        });
                                    }
                                });
                        });
                });
        });
}