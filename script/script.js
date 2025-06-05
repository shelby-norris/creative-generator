fetch("script/data.json")
.then(function(response){
    return response.json();
})
.then(function(ideas) {
    console.log(ideas);
});