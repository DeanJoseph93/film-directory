/**
 *	@file	:	2_jquery_xml.js
 *	@course	:	AJAX
 *	@author	:	Training Dragon
 *  @desc   :   using jQuery and basic $.ajax()
 *  @params :   ?inc=name,email,picture,nat
 *              &format=xml
 *              &results=8
 *
 */

(()=>{
let
    usersData = {
        titles  :   [],
        firsts  :   [],
        lasts   :   [],
        emails  :   [],
        pics    :   [],
        nats    :   []
    },
    userSkeleton =
        "<div class='user col-xs-12 col-sm-6 col-md-4 col-lg-3'>\
            <div class='userInner'>\
                <p>\
                    <img src='pic.jpg' alt='' class='pic img-circle'>\
                </p>\
                <p>\
                    <span class='title'>Mr</span>\
                    <span class='first'>John</span>\
                    <span class='last'>Doe</span>\
                </p>\
                <p><span class='email'>email</span></p>\
                <p>Nationality: <strong class='nat'>NL</strong></p>\
            </div><!--/userInner-->\
        </div><!--/user-->"
    ,

    newDom = "",

    /**
     * @name : setMarkup
     * @desc : this will generate markuo as a string and inject it only once, then it will add
     */
    setMarkup = () => {
        for ( let i in usersData.firsts) {
            newDom +=
                "<div class='user col-xs-12 col-sm-6 col-md-4 col-lg-3'>\
            <div class='userInner'>\
                <p>\
                    <img src='" + $.trim(usersData.pics[i]) + "' alt='' class='pic img-circle'>\
                </p>\
                <p>\
                    <span class='title'>" + usersData.titles[i] + "</span>\
                    <span class='first'>" + usersData.firsts[i] + "</span>\
                    <span class='last'>" + usersData.lasts[i] + "</span>\
                </p>\
                <p><span class='email'>" + usersData.emails[i] + "</span></p>\
                <p>Nationality: <strong class='nat'>" + usersData.nats[i] + "</strong></p>\
            </div><!--/userInner-->\
        </div><!--/user-->"
        } //for

        //console.log(newDom);

        /**
         * manipulate your dom string and append it
         * only once instead of appending many small
         * divs and populating them one by one
         */

        $("#usersContainer").html(newDom);
        let delayTime = 10;
        $(".user")/*.fadeIn();*/
            .each(function () {
                delayTime += 300;
                $(this)
                    .delay(delayTime)
                    .fadeIn();
            }) //each

    }, //setMarkup(;


    /**
     * @name    :   getUsers
     * @desc    :   sending and handling ajax requests
     *                  to xml docs using jQuery
     */
    getUsers = () => {
        let
            params = {
                url         :   "data/xml/dummy_users.xml",
                dataType    :   "xml",
                type        :   "get"
            },
            promise = $.ajax(params)
        ;

        promise
            .done( (data, status, promise) => {
                //console.log( data );

                $(data)
                    .find("title")
                        .each( function() {
                                usersData.titles.push( $(this).text() );
                        })
                        .end()
                    .find("first")
                        .each( function() {
                            usersData.firsts.push( $(this).text() );
                        })
                        .end()
                    .find("last")
                        .each( function() {
                            usersData.lasts.push( $(this).text() );
                        })
                        .end()
                    .find("email")
                        .each( function() {
                            usersData.emails.push( $(this).text() );
                        })
                        .end()
                    .find("thumbnail")
                        .each( function() {
                            usersData.pics.push( $(this).text() );
                        })
                        .end()
                    .find("nat")
                        .each( function() {
                            usersData.nats.push( $(this).text() );
                        })
                        .end()
                ;
                console.log(usersData);

                setMarkup();
            })// done
            .fail( (promise, status, error) => {
                console.log( error );
            })// fail
        ;
    }, // getUsers


    init = () => {
        $("#usersBtn").on("click", getUsers);
    }// init
;

    window.addEventListener("load", init);

})();