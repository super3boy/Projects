/*var myRequest = new XMLHttpRequest();
var posts = [];
myRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
myRequest.send();
myRequest.addEventListener("readystatechange",function(){
    if (myRequest.readyState == 4 && myRequest.status == 200){
        console.log(myRequest.response);
        posts = JSON.parse(myRequest.response);
        displayPosts();
    }
})
function displayPosts(){
    var cartoona =``
    for(var i=0; i< posts.length; i++){
        cartoona +=`
        <div class="col-md-4">
        <div class="posts"
            <h4>`+posts[i].title + `</h4>
            <p>`+ posts[i].body +`</p>
        </div>
    </div>`
    }
    document.getElementById("myRow").innerHTML = cartoona;
}
*/
var myHttp = new XMLHttpRequest();
var allPosts;
myHttp.open("GET","https://api.themoviedb.org/3/trending/movie/day?api_key=ae5ace4241bb4511950a424484d8dd8b");
myHttp.send();

myHttp.addEventListener("readystatechange",function(){

    if(myHttp.readyState == 4 && myHttp.status == 200){
        allPosts = JSON.parse(myHttp.response).results;
        displayPosts();
}});

function displayPosts(){
    var cartoona = ``
    for(i=1;i<allPosts.length;i++){
        cartoona += `<div class="col-md-3">
                        <div>
                            <div class="pic-layer">
                                <div class="pic">
                                    <img src="https://image.tmdb.org/t/p/w500/${allPosts[i].poster_path}" class="w-100">
                                </div>
                                <div class="layer d-flex justify-content-center align-items-lg-center text-light ">
                                <p class="overview text-white text-center p-3">${allPosts[i].overview.split(" ").slice(0,40).join(" ")}</p>
                                <div class="vote bg-warning p-2 font-weight-bolder position-absolute">${allPosts[i].vote_average}</div>
                                </div>
                            </div>
                            <h4 class="title text-white text-center py-3">${allPosts[i].title}</h4>
                        </div>
                    </div>`;
    }
    document.getElementById("rowData").innerHTML = cartoona;
}