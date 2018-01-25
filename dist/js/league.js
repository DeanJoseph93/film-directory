/**
 *	@file	:	league.js
 *	@course	:	AJAX
 *	@author	:	Dean Joseph
 *  @geo-url:
 *  @plugin :   jquery-autocomplete
 *  @opts   :   source[], openOnFocus, closeOnBlur, limit
 *  @api-url:
 *  @params :   ?key    =__  grab api key
 *              &q      =__  country name
 *              &days   =__  number of days
 */

( () => {
    let


        /***
         * @name:   movieTable
         * @desc:   collects data and displays movie request
         */

        movieTable = (data) => {

            //console.log(data);

            let newDom = "\
<tr>\
    <td class='text-left'>" + data.Title + "</td><!-- location > localtime-->\
    <td class='text-left'>" + data.Year  + "</td><!-- location.name-->\
    <td class='text-left'>" + data.Rated  + "</td><!-- location.name-->\
    <td class='text-left'>" + data.Genre  + "</td><!-- location.name-->\
    <td class='text-left'>" + data.Director  + "</td><!-- location.name-->\
</tr>";

            let
                movieName = $("#teamInput").val();

            if( movieName == "") {
                //console.log(123);
                $("#teamTable").css( "display", "hidden");

            } else {
                $("#teamTable")
                    .fadeIn()
                    .append(newDom)
                ;

            }//if




        }, //movieTable




    /***
     * @name    : getFixtures
     * @desc    : this will send and handle a jQuery AJAX request
     */


    getMovies = () => {

        let
            movieName = $("#teamInput").val(),



            params = {
/*
                url         :   "../day2/ajax_projects/data/json/countries.json",
*/
                /*url         :   "http://www.omdbapi.com/?i=tt3896198&apikey=2768d20a",*/
                url         :   "http://www.omdbapi.com/?t=" + movieName + "&apikey=2768d20a",
                dataType    :   "json",
                type        :   "get"

            },

            promise = $.ajax(params)
            ;

        promise
            .done( (data, status, promise) => {
                //console.log( data);

                movieTable(data);

            })// done
            .fail( (promise, status, error) => {
                //console.log( error );

            })// fail
        ;

    }, //getFixtures




    init = () => {
        $("#forecastForm").on("submit", ()=>{return false;});
        $("#forecastBtn").on("click", getMovies);
    }

    ;

  window.addEventListener("load", init);
})();