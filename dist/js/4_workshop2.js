/**
 *	@file	:	workshop2.js
 *	@course	:	AJAX
 *  @url	:   php/workshop2.php
 *  @param  :   no
 *	@author	:	Training Dragon
 */
(() => {

    let
        count = 0,

        blogMarkUp  = (data) => {

        let newDom =
                '<div class="post">' +
                '<h2 class="title">' + data.title + '</h2>' +
                '<div class="body text-justify">' + data.body + '</div>' +
                '<hr>' +
                '</div><!--/post-->';



           // hide last post and fade it in
            $("#blog")
                .append(newDom);
            $(".post:last-child")
                .hide()
                .fadeIn()
            ;


        },


        populateBlog    =  () => {

            let
                $w = $(window),
                $d = $(document)
            ;

            if ( $w.scrollTop() === $d.height() - $w.height() ) {

                count ++;
                getPosts(count);

            } // end if






        }, //populateBlog





        getPosts    =   (count) => {

            let
                keyParam = {
                     no : count
                },

                params = {
                    url         : "data/php/workshop2.php",
                    type        : "get",
                    dataType    : "json",
                    data        : $.param(keyParam)
                },


                promise = $.ajax(params);


            promise
                .done( (data, status, promise) => {
                    //console.log(data);

                    blogMarkUp(data);
                })
                .fail( (promise, status, error) => {
                    console.log(error);
                })
            ;

        }, //getPosts















   init = () => {
       $(window).on("scroll", populateBlog);
       getPosts(count);
   } //init


   ;

  window.addEventListener("load", init)
   ;
})();