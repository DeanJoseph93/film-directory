/**
 *	@file	:	workshop1.js
 *	@course	:	AJAX
 *	@author	:	Training Dragon
 *  @geo-url:   https://raw.githubusercontent.com/icyrockcom/country-capitals/master/data/country-list-with-ids.json
 *  @plugin :   jquery-autocomplete
 *  @opts   :   source[], openOnFocus, closeOnBlur, limit
 *  @api-url:   http://api.apixu.com/v1/forecast.json
 *  @params :   ?key    =__  grab api key
 *              &q      =__  country name
 *              &days   =__  number of days
 */

(() => {
    let



      // newDom = "",

        prepareWeatherMarkup = (data) => {
        //console.log(data);


            let  newDom = "\
<tr>\
    <td class='localtime'>" + data.location.localtime + "</td><!-- location > localtime-->\
    <td class='name'>" + data.location.name  + "</td><!-- location.name-->\
    <td class='region'>" + data.location.region + "</td><!-- location.region-->\
    <td class='country'>" + data.location.country + "</td><!-- location.country-->\
    <td class='latlon'>" + data.location.lat + "</td><!-- location.lat / location.lon-->\
    <td class='text'>" + data.current.condition.text + "</td><!-- current.condition.text -->\
    <td class='temp_c'>" + data.current.temp_c + "</td><!-- current.temp_c-->\
    <td class='wind_kph'>" + data.current.wind_kph + "</td><!-- current.wind_kph-->\
    <td class='icon'><img width='40' src='" + data.current.condition.icon + "' alt=''></td><!-- current.condition.icon-->\
</tr>";

//console.log(data);

    $("#weatherTable")
        .fadeIn()
        .append(newDom)
        ;

      }, //prepareWeatherMarkup



        setAutocomplete = (countries, capitals) => {


            $("#countryInput")
                .autocomplete({
                    source      :   [countries, capitals ],
                    openOnFocus :   false,
                    closeOnBlur :   true,
                    limit       :   500
                });
        }, //setAutocomplete


        getWeather = () => {

            let
                newCapital = $("#countryInput").val(),
                params = {
                    url         :   "http://api.apixu.com/v1/current.json?key=fc223133825e488096b114632172811&q=" + newCapital +"",
                    dataType    :   "json",
                    type        :   "get"
                },
                promise = $.ajax(params)
            ;

            promise
                .done( (data, status, promise) => {
                    //console.log( data);

                    prepareWeatherMarkup(data);

                })// done
                .fail( (promise, status, error) => {
                    console.log( error );
                })// fail
            ;



        }, //getWeather

        /**
         * @name    :   getCountries
         * @desc    :   this will send and handle a jQuery AJAX request
         */
        getCountries = () => {
            let
                params = {
                    url         :   "https://raw.githubusercontent.com/icyrockcom/country-capitals/master/data/country-list-with-ids.json",
                    type        :   "get",
                    dataType    :   "json"

                },

                promise = $.ajax(params)
            ;


            promise
                .done( (data, status, promise) => {
                     console.log(data);
                    let
                        newCountries = [],
                        newCapitals = []
                    ;
                    for(let country of data){
                        newCountries.push(country.country);
                        newCapitals.push(country.capital);
                    }
                    // console.log(newCountries);
                    setAutocomplete(newCountries, newCapitals);
                })
                .fail( (promise, status, error) => {
                    console.log(error);
                })
            ;




        }, // getCountries


        /**
         * initialising foo
         */
        init = () => {
            $("#forecastForm").on("submit", ()=>{return false;});
            $("#forecastBtn").on("click", getWeather);
            getCountries();
        }// init

    ;
    window.addEventListener("load", init);
})();


