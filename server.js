var connect = require('connect'),
    app = connect()
      .use(connect.logger('dev'))
      .use(connect.static('source'))
      .use(function(req, res){
        res.end('it is my simple calculator\n');
      })
      .listen( process.env.PORT || 5000 );
