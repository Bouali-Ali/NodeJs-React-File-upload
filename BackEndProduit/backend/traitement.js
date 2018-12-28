const fs = require('fs')
var path = require('path')
var formidable = require('formidable');

const dossier = 'upload/'
var Onlyname;

exports.traiter = function traitement(req) {
  var monFichier = new formidable.IncomingForm();
  monFichier.parse(req);
  
  try {
    if (!fs.existsSync(dossier)){
          fs.mkdirSync(dossier)
        }
    }catch(err) {
        console.error(err)
    }

  monFichier.on('fileBegin', function (name, file){
        console.log(file);
            let extension =  path.extname(file.name)
        Onlyname = path.basename(file.name, extension);
        rec(file,0)
    });
}


function rec(file,sub){

    let extension =  path.extname(file.name)

                          var Name=Onlyname+'('+(sub+1)+')'+extension;

        try {
              if (!fs.existsSync(__dirname + '/' + dossier + file.name)) {
                file.path = __dirname + '/' + dossier + file.name; 
              }

              else { 
                 file.name = Name; 
          rec(file,sub+1)        
           }

            } catch(err) { console.error(err) }
  

}