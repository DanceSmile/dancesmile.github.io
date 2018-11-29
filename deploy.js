#!/usr/bin node
var  exec  = require('child_process').exec

var cmdStr = "git add .  && git commit -m 'update docs'  && git push "


exec(cmdStr, function(err, stdout, stderr){

    if(err){
        console.log('has a lot of error: ' + JSON.encode(stderr) )
    }else{
        console.log('deploy done')
    }

})
