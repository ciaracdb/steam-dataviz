
function steamAPIGet(url, callback) {
    $.get("http://localhost:3000/steam-api"+url, callback);
}

$(function() {
    steamAPIGet('/ISteamUser/ResolveVanityURL/v0001?vanityurl=ciaracdb',  function(data) {
        console.log(data);
    });
});