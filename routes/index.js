
/*
 * Pegar pagina principal.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};