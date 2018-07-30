<h1>Jarvis</h1>

Jarvis 2.0 is a revamp of our previous project (https://github.com/beckymcclain8/Jarvis).  We used the MERN stack -MongoDB, Express, React, and Node.  We also used Google OAuth for user authentication.

Description: Jarvis 2.0 helps people find lower cost alternatives to hospital procedures in their area.  If they’re willing to drive further to have their procedure, we can find the lowest cost in a wider area.

Motivation: Health care costs can vary widely between providers with little transparency. Jarvis 2.0 helps to take some of the guesswork out of the cost of major procedures.

Results: We used data from healthdata.gov that outlines costs of procedures in hospitals across the country and present those to members in an easy to understand format.

### Click this link to take a look at Jarvis 2.0 in action:  https://shrouded-tor-92911.herokuapp.com/

![Jarvis 2.0 Home Page](/assets/images/home.JPG)

![Jarvis 2.0 Search Page](/assets/images/search.JPG)

![Jarvis 2.0 Results](/assets/images/results.JPG)

![Jarvis 2.0 Patient Profile Page](/assets/images/saved.JPG)



<h2> To SEED DB </h2> 
* Install package on global:
    npm install -g mongo-seeding-cli

* Run cmd "mongod" to open default port

* Create a database called "Jarvis" in GUI or in mongo commandline.

* Then navigate to root directory Jarvis2.0 

* Seed the DB with:
    seed -u 'mongodb://127.0.0.1:27017/Jarvis' -d ./server/data 


This app was created and is maintained by Kourtney Reynolds, Patrick Miles, Anibal Campos, and Becky McClain.