<h1>Jarvis</h1>

<h2> To SEED DB </h2> 
* Install package on global:
    npm install -g mongo-seeding-cli

* Run cmd "mongod" to open default port

* Create a database called "Jarvis" in GUI or in mongo commandline.

* Then navigate to root directory Jarvis2.0 

* Seed the DB with:
    seed -u 'mongodb://127.0.0.1:27017/Jarvis' -d ./server/data 