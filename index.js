#!/usr/bin/env node
var getFile = require('./getFile.js');
var configs=require('./config.js');
var zip=require('./zip.js');
var configUrl='//raw.githubusercontent.com/gurenGithub/xBuild/master/config.js';
/**
 *{
        url:'http://cdn.jin10.com/test/build/jin10_admin.zip',
        dir:'jin10_admin'
    }
 */

var argvs = process.argv.splice(2);

var module=argvs[0]//模块名称
var dir =argvs[1] //解压路径
var url = argvs[2] //地址||
//console.log(module);
if(module=="zip"){

    
    zip();
    return;
}
var config=configs[module];

if(!config){

    config={
        url:'http://cdn.jin10.com/test/build/'+module+'.zip',
        dir:module
    }
}

var fileName=url;
if(config)
{
    fileName=config.url;
    dir=config.dir;
}
var _fileName=fileName+'?v='+(new Date().getTime());
console.log(_fileName);
getFile(_fileName,dir);