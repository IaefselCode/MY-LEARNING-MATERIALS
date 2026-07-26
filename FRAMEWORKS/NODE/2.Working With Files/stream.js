//So me times if you have a larger file it is good to not to grab all of the data at once 
//It could be too much 
//So we take small small rather than attempting to take everything at once
//This could be more efficient and a littlebit easier in the application

const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' }) //Here you could use path it could be more efficient but because of time lits just continue with these
//So we have created a readable stream And we have specified the encoding in the options

//Now lets specify a writable stream
const ws = fs.createWriteStream('./files/new-lorem.txt')


// //After then we need to listen for the data comming from the stream
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })
//Now we are listening for the data thats comming in 
//And here lets say its a dataChunk
// and inside we could console log the dataChunk or write it to a WritableStream and passin that data chunk

// So after running it we will get new-lorem document

// Even a better way to do it instead of the listener
rs.pipe(ws)
//Youcan just say readableStream and then .pipe and then pass in writtableStream