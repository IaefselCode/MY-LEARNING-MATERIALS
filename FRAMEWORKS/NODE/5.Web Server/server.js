//Lets Import common Core module that we will need for server
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

//Modules for Event Emitter
const logEvents = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter { };

//initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg,fileName));


//Now we will define the port of our web server so not only we will have the address of localhost because it will just be a developent server for our local machine but we need to define a specific port for our webserver
const PORT = process.env.PORT || 3500; //If we host it it would use "process.env.PORT" but here locally "3500"


//Here we server files
const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf8' : ''
        );

        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
            { 'Content-Type': contentType }
        );

        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );

    } catch (err) {
        console.log(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
        response.statusCode = 500;
        response.end();
    }
}

//Now lets create a minimal server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    //WHAT ELSE WE CAN PUT IN THE SERVER Is build path and server the files
    // let path;

    // if (req.url === '/' || req.url === 'index.html'){
    // res.statusCode = 200; 
    // res.setHeader('Content-Type' ,'text/html');
    // path = path.join(_dirname, 'views', 'index.html');
    // fs.readFile(path, 'utf8', (err, data) => {
    // res.end(data);
    // }); 
    // }

    // // You can also use a switch statement
    // switch (req.url) {
    //     case '/':
    //         res.statusCode = 200;
    //         path = path.join(_dirname, 'views', 'index.html');
    //         fs.readFile(path, 'utf8', (err, data) => {
    //             res.end(data);
    //         });
    //         break;
    // }

    //Emit Event
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');

    const extension = path.extname(req.url);//Extension of the request url that we get but if its a "/" then there will not be an extension name and we will handle it

    let contentType;

    //Now we will use the switch statement to set the content type (Looking all the different possibilities for extensions)
    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html'; //Simiral to "/"
    }

    //Then we gonna use chained ternary
    let filePath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')//if contentType and req.url are true these path would be served

            : contentType === 'text/html' && req.url.slice(-1) === '/' //if its html file type and the last content is '/ then it would be in the subDirectory
                ? path.join(__dirname, 'views', req.url, 'index.html')

                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)  //These is the default when none of others are true
                    : path.join(__dirname, req.url);
    // NOTE: You can also use if/else statement

    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';//So here is if there is no extension(Meaning its probably a '/' and didn't have a file extension extension) and last character of URL is not equal to '/'
    //So may be we just requested a file Eg. About or new-page but we didnt type .html after wards and this will make that works anyway

    //Now we have our file path and contentType So we are ready to actually check and see if we can actually server the file
    const fileExists = fs.existsSync(filePath)

    if (fileExists) {
        //serve the file
        serveFile(filePath, contentType, res)
    } else {
        //404
        //301 redirect
        console.log(path.parse(filePath))
        //So we can use a switch statement here
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' }); //Now here when we have an oldpage any we want to redirect it to the new page
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res); //Now here we can keep default
        }
    }
});

//Here the server cannot be launched because it still needs to listen for request
//Note: These must be at the end of the server.js file
server.listen(PORT, () => console.log(`Server running on port: localhost:${PORT}`));



// //add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg));

// //Emit Event
// myEmitter.emit('log','log event emitted!'); //First lets find the places we can emit our log event



// Now there is much more like putting in more checks to see if its a post or a get request But EXPRESS JS Can make these more easy
//SO THESE IS THE SERVER THAT WILL SERVE SOME TYPICAL FILES AND ALSO SOME DATA FILES 
