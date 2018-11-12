"RGR.js" 

Mongo command:
use rgrjs;
db.createCollection("links");
db.links.insert(
    [
        {title: "React", url: "https://facebook.github.io/react"  
        },
        {title: "Relay", url: "https://facebook.github.io/relay"  
        }
    ]
);
