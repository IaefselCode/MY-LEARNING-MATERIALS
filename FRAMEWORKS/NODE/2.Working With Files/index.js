////////////////////////////////////////////////////////////////
//*************************readFile ***************************/
////////////////////////////////////////////////////////////////

const fsPromises = require("fs").promises;
const fs = require("fs") //Here we bring the fs common core module
const path = require('path')

// // Also Hard Coding the PATH of the files is not a good practice (BECAUSE FILE PATH IN SOME OS DIFFERS)
// //Good practice is to use path module
// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err, data) => { //so here in the path we have joined the dirname we are working with then the files then the name of the file(starter.txt)
//     if (err) throw err;

//     console.log(data)
// }) 
// // So when we log we get utF8 which are numbers that computer understands so to get the string we say toString()
// //Or Defining the Encoding that is "utf8" - <<--fs.readFile('./files/starter.txt','utf8', (err, data) => {-->> 

// console.log('After Reading File.... ');


// // NOTE: __dirname is not available in ES Modules its only available in CommonJS


// // // 🔄 Modern (ES Modules) version (If your project uses "type": "module" in package.json)
// // import fs from 'fs';

// // fs.readFile( './files/starter.txt','utf8', (err, data) => { 
// //     if (err) throw err;
// //     console.log(data);
// // });





// // // ⭐ Even better (modern async/await style)
// // import { readFile } from "fs/promises";

// // try {
// //     const data = await readFile('./files/starter.txt', 'utf8'); //UTF-8 is a way computers encode text (characters) into bytes so they can store and transmit it.
// //     console.log(data);
// // } catch (err) {
// //     console.error(err);
// // }



// // Now notice in the throw err there 
// //According to node doc if we got an ancaught exeption we need to go on and catch that
// // So if we have an uncaught error we should exit node just keeps executing
// process.on('uncaughtException', err =>{
//     console.log(`There was an uncaught error: ${err}`);
//     process.exit(1);
// })
// //So we listen for these uncaughtException using process.on then we pass in the error to the callback here and log it and then we exit the application  
// //Now Process is one of those values that node has them available to us we dont need to import it
// //And these is Direct from the node DOC

// // So now if we keep an error when we are reading file we get the error
// // We can also demostrate node asyc operation by loging a word after reading file but the word is logged first thats because node just keeps on executing other tasks when its waiting for the file 




// ////////////////////////////////////////////////////////////////
// //*************************writeFile ***************************/
// ////////////////////////////////////////////////////////////////
// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice To Meet You.',(err) => {
//     if (err) throw err;

//     console.log('Write Complete')
// }) 
// //Here we are going to create a new file and we dont have to specify the utf8 because its by default now
// // Because we are writing a file to the OS we are not reading it
// // Also we need to specify what we are writing to the file
// //Also the callback will only have error we are not reading anything



// ////////////////////////////////////////////////////////////////
// //*************************appendFile ***************************/
// ////////////////////////////////////////////////////////////////
// fs.appendFile(path.join(__dirname,'files','test.txt'),'Testing the Append Text.',(err) => {
//     if (err) throw err;
//     console.log('Append Complete')
// }) 

// // NOTE:
// // appendFile Updates file but Also Creates new one if it doesent exist


// //Due to NODEJS Asynchronous nature
// // Its a good practice is to create a file and in it append by keeping it inside the callback
// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice To Meet You.',(err) => {  //CREATING FILE
//     if (err) throw err;  
//     console.log('Write Complete')

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n Yes It Is Cunt.',(err) => { //APPENDING FILE
//         if (err) throw err;
//         console.log('Append Complete')

//         fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err) => { //RENAMING FILE
//             if (err) throw err;
//             console.log('Rename Complete')
//         }) 
//     }) 
// })     
// //Putting something inside the callback of another helps us control whats will happen next
// // NOW IF WE NEED TO DO SOMETHING TO THESE FILE AFTER WE ADDED MORE CONTENT AND WE WANTED TO MAKE SURE ITS IN A PERFECT ORDER SUCH AS RENAMING THE FILE
// // Then that needs to be in the callback of the append file


// Now These Seams Its Starting to Look Like CallBack Hell
//We can solve these using Async await

const fileOps = async () => {
    try {
        await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), 'Hey there Its IAEFSEL Here !!!')
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8') //Reading file
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')) //Delete the original file

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data) //Create new file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you')  //Update file
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'),path.join(__dirname, 'files', 'promiseComplete.txt'))  //Rename file

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}

fileOps()





















// NOTE: In the terminal the execution of the processsed can be unpredictable due to NODE Asynchronous Behaviour