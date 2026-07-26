// Here we are going to create a directory with fs.mkdir 
const fs = require('fs');

if(!fs.existsSync('./new')){ //Here we are using existsSync method to look if the folder exists or not
    fs.mkdir('./new',(err) => {
        if (err) throw err;
        console.log('Directory Created')
        })
}


// Code that deletes the new directory
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err) => {
        if (err) throw err;
        console.log('Directory Removed')
        })
}