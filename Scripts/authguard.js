/*
* Student: Deivid Santos
* ID: 100731640
*/

"use strict";

(() =>{
    // check if the user is not logged in
    if(!sessionStorage.getItem("user"))
    {
    // redirect back to login page
    location.href = "login.html";
    }
})();

