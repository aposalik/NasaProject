const http = require("http");
const app = require("./app");
const {loadPlnetData} = require("../src/module/planet.model")

//port setup 
const PORT = process.env.PORT || 8000;

async function startServer(){
    await loadPlnetData();
    const server = http.createServer(app);
    server.listen(PORT, ()=>{
        console.log(`Lsitening PORT ${PORT}`)
    });
}

startServer();