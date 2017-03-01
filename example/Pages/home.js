Flatline.DefaultRoute(function (body, style, children, route){
    AppendNavbar(body, style, children, route)
    children.div(function(parent, style, children) {
        parent.className = 'container';
        children
            .div(function(parent, style, children) {
                parent.className = 'jumbotron';
                children
                    .h1(function(parent, style, children) {
                        children
                            .text('Welcome to Flatline4');
                    })
                    .p(function(parent, style, children) {
                        children
                            .text('A whole new world of web development awaits (and no one said it was better).');
                    })
                    .button(function(parent, style, children) {
                        parent.className = 'btn btn-primary';
                        children
                            .text('Learn more');
                    });
            })
            .div(function(parent, style, children) {
                children
                    .h1(function(parent, style, children) {
                        children
                            .text('Log in');
                    })
                    .div(function(parent, style, children) {
                        parent.className = 'form-group';
                        children
                            .label(function(parent, style, children) {
                                parent.for = 'inputUsername';
                                children
                                    .text('Username');
                            })
                            .input(function(parent, style, children) {
                                parent.type = 'text';
                                parent.className = 'form-control';
                                parent.id = 'inputUsername';
                                parent.placeholder = 'Username';
                            });
                    })
                    .div(function(parent, style, children) {
                        parent.className = 'form-group';
                        children
                            .label(function(parent, style, children) {
                                parent.for = 'inputPassword';
                                children
                                    .text('Password');
                            })
                            .input(function(parent, style, children) {
                                parent.type = 'password';
                                parent.className = 'form-control';
                                parent.id = 'inputPassword';
                                parent.placeholder = 'Password';
                            });
                    })
                    .button(function(parent, style, children) {
                        parent.type = 'submit';
                        parent.className = 'btn btn-default';
                        
                        parent.click = function (){
                            var usr = document.getElementById('inputUsername').value;
                            var pwd = document.getElementById('inputPassword').value;
                            Flatline.post('http://localhost:3000/Login', { username: usr, password: pwd }, function (res){
                                if (res.message){
                                    route.reroute('login_fail', res);
                                } else {
                                    route.reroute('login_success', res);
                                }
                            }, function (res){
                                alert(res);
                            });
                        }
                        children
                            .text('Submit');

                    });
            });
    });
});