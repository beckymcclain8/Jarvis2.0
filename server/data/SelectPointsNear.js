db.getCollection("new418").find(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ -86.42149916, 34.36320006  ] },
             $minDistance: 1000,
            $maxDistance: 5000
          
          }
       }
   }
)