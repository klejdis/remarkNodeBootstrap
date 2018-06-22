var Models = require('../../../models');
var exports = module.exports;


exports.sayHello = function(req, res) {

  var name = req.query.name || "";

  var context = {
    siteTitle: "Node.js Bootstrap Demo Page",
  	partialsDir : process.env.NBS_CURR_PROJECT_PATH +'views/partials',
    req : req
  };

  var template = __dirname + '/../views/hello';


  Models.User.findAll().then((user) => console.log('yeee'));



  //res.send('Hello World');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
};
