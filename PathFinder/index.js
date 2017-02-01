var PathFinder = require('geojson-path-finder'),
geojson = require('./G-100/CORRIDOR-G-1000.json');
var pathfinder = new PathFinder(geojson);

 var fs = require('fs');
 var start = findLocal("G-169");
 var finish = findLocal("G-119");
 var path = pathfinder.findPath(start, finish);

  function findLocal(toFind) {
    var file = fs.readFileSync('./G-100/CORRIDOR-G-1000.json');
    var obj = JSON.parse(file);
    for(var i=0;i<obj.features.length;i++){
    if(obj.features[i].geometry.type == "Point" && obj.features[i].properties.ref != null && obj.features[i].properties.ref == toFind){
    return obj.features[i];
    }
    }
}
