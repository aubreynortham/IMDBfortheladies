import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  var url = "https://omdbapi.com?s=" + term;
  //var bechurl = "http://cors.io/?u=http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term;

  return $.getJSON(url).then(function(response) {
    //var imdbObjs = response["Search"]
    //console.log("Hiya: ", imdbObjs);

   //return $.getJSON(bechurl).then(function(response2){
      //console.log(response2);
      //for(var i=0; i<response2.length; i++){
        //console.log(response2[i]["imdbid"]);
      //}
      return response["Search"]
    //})
    //response["Search"][0].rating = 0 //except in a loop to apply to each object in the array
  });
}
