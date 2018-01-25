/**
 *	@file	:	0_xhr.js
 *  @desc   :   using raw JS and XHR
 *	@course	:	AJAX
 *	@author	:	Training Dragon
 */

(() => {
const
    btn1    =   document.getElementById("btn1"),
    btn2    =   document.getElementById("btn2"),
    btn3    =   document.getElementById("btn3"),
    btn4    =   document.getElementById("btn4"),
    btn5    =   document.getElementById("btn5"),

    t1      =   document.getElementById("t1"),
    t2      =   document.getElementById("t2"),
    t3      =   document.getElementById("t3"),
    t4      =   document.getElementById("t4"),
    t5      =   document.getElementById("t5")

;

let


    /**
     * @name    bindBtns
     * @desc    subscribes handlers to click events on our buttons
     *          sends ajax requests
     */
    bindBtns = () => {
        btn1.addEventListener("click", () => {
            // alert(123);
            let
                url =   "data/txt/first.txt",
                // 1. instantiating a new XMLHttpRequest object
                xhr =   new XMLHttpRequest()
            ;

            // 2. openining request
            // xhr.open(method:string, url:string, async:boolean)
            xhr.open("get", url, true);

            // 3. setting onreadystatechange callback
            xhr.onreadystatechange = () => {
                // console.log( xhr.readyState );
                if(
                    xhr.status === 200 &&
                    xhr.readyState === 4
                ){
                    // all good
                    t1.innerHTML = xhr.responseText;
                } else {
                    t1.innerHTML = "Some error occurred.";
                }// orsc if


            }; // orsc

            // 4. sending request
            xhr.send(null);

        }); // btn1

        btn2.addEventListener("click", () => {
            let
                url =   "data/xml/first.xml",
                xmlDoc,
                titles,
                newDom = "",
                // 1. instantiating a new XMLHttpRequest object
                xhr =   new XMLHttpRequest()
            ;

            // 2. opening request
            // xhr.open(method:string, url:string, async:boolean)
            xhr.open("get", url, true);

            // 3. setting onreadystatechange callback
            xhr.onreadystatechange = () => {
                // console.log( xhr.readyState );
                if(
                    xhr.status === 200 &&
                    xhr.readyState === 4
                ){
                    // all good
                    xmlDoc = xhr.responseXML;
                    titles = xmlDoc.getElementsByTagName("TITLE");
                    // console.log(titles);
                    for(let title of titles){
                        newDom +=
                            ("<p>"
                            + title.childNodes[0].nodeValue
                            + "</p>")
                        ;
                    }// for

                    t2.innerHTML = newDom;

                } else {
                    t2.innerHTML = "Some error occurred.";
                }// orsc if


            }; // orsc

            // 4. sending request
            xhr.send(null);

        }); // btn2

        btn3.addEventListener("click", () => {
            let
                url =   "data/json/first.json",
                users,
                newDom = "",
                // 1. instantiating a new XMLHttpRequest object
                xhr =   new XMLHttpRequest()
            ;

            // specifying we are expecting JSON data
            xhr.responseType = "json";

            // 2. opening request
            // xhr.open(method:string, url:string, async:boolean)
            xhr.open("get", url, true);

            // 3. setting onreadystatechange callback
            xhr.onreadystatechange = () => {
                // console.log( xhr.readyState );
                if(
                    xhr.status === 200 &&
                    xhr.readyState === 4
                ){
                    // all good
                    users = xhr.response;
                    // console.log(users);
for(let user of users){
    newDom += (
        "<tr>" +
            "<td>" + user.name      + "</td>" +
            "<td>" + user.lastname  + "</td>" +
            "<td>" + user.email     + "</td>" +
        "</tr>"
    );
}// for

                    document.getElementById("usersTable")
                        .innerHTML += newDom;

/**
 * =========================================
 * read about HTML templates like
 * mustache.js or handlebars.js :)
 * =========================================
 *
 * eg:
 *
 {{#each}}
 <tr>
    <td>{{name}}</td>
    <td>{{lastname}}</td>
    <td>{{email}}</td>
 </tr>
 {{each}}
 *
 */



                    t3.innerHTML = "All good";

                } else {
                    t3.innerHTML = "Some error occurred.";
                }// orsc if


            }; // orsc

            // 4. sending request
            xhr.send(null);

        }); // btn3

        btn4.addEventListener("click", () => {
            let
                url =   "data/php/first.php",
                newDom = "",
                user = document.getElementById("userName").value,
                // 1. instantiating a new XMLHttpRequest object
                xhr =   new XMLHttpRequest()
            ;

            // appending a query string if we need one
            if(user !== ""){
                url += "?user="+user;
            }


            // 2. opening request
            // xhr.open(method:string, url:string, async:boolean)
            xhr.open("get", url, true);

            // 3. setting onreadystatechange callback
            xhr.onreadystatechange = () => {
                // console.log( xhr.readyState );
                if(
                    xhr.status === 200 &&
                    xhr.readyState === 4
                ){
                    // all good

                    newDom = xhr.responseText;

                    t4.innerHTML = newDom;

                } else {
                    t4.innerHTML = "Some error occurred.";
                }// orsc if


            }; // orsc

            // 4. sending request
            xhr.send(null);

        }); // btn4

        btn5.addEventListener("click", () => {
            let
                url =   "data/php/first.php",
                newDom = "",
                user = document.getElementById("userName2").value,
                // data will store parameters to post
                data,
                // 1. instantiating a new XMLHttpRequest object
                xhr =   new XMLHttpRequest()
            ;

            // appending a parameter if we need one
            if(user !== ""){
                data= "user="+user;
            }



            // 2. opening request
            // xhr.open(method:string, url:string, async:boolean)
            xhr.open("post", url, true);

            // 2.1 setting headers for our POST request
            xhr.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded", true
            );


            // 3. setting onreadystatechange callback
            xhr.onreadystatechange = () => {
                // console.log( xhr.readyState );
                if(
                    xhr.status === 200 &&
                    xhr.readyState === 4
                ){
                    // all good

                    newDom = xhr.responseText;

                    t5.innerHTML = newDom;

                } else {
                    t5.innerHTML = "Some error occurred.";
                }// orsc if


            }; // orsc

            // 4. sending request
            xhr.send(data);

        }); // btn5

    }, // bindBtns

    /**
     * initialising function
     */
    init = () => {
        bindBtns();
    } // init
;

window.addEventListener("load", init);
})();