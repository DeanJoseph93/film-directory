/**
 *	@file	:	autocomplete.js
 *	@course	:	AJAX
 *	@author	:	Training Dragon
 *  @plugin :   jquery-autocomplete
 *  @url    :   "data/json/countries.json"
 *  @opts   :   source: [], openOnFocus, closeOnBlur, limit
 */

(() => {
    let
        /*countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
        ],*/

    setAutocomplete = (countries, codes) => {


        $("#countryInput")
            .autocomplete({
                source      :   [countries, codes ],
                openOnFocus :   false,
                closeOnBlur :   true,
                limit       :   5
            });
    }, //setAutocomplete

    /**
     * @name    :   getCountries
     * @desc    :   this will send and handle a jQuery AJAX request
     */
    getCountries = () => {
        let
            params = {
                url         :   "../data/json/countries.json",
                type        :   "get",
                dataType    :   "json"/*,
                ###########################################
                success and error callbacks are deprecated,
                we want to use $.ajax() and work with the
                promise object it returns
                ###########################################

                success     :   (data) => {
                    console.log(data);
                }, //success callback

                error       :   (error) => {
                    console.log(error);
                } // error callback*/
            },

            promise = $.ajax(params)
        ;

        /**
         *  jQuery methods for $.ajax() promises:
         *
         *  promise
         *      .done(function(data, status, promise){...})
         *      .fail(function(promise, status, error) {...}
         *      .always(
         *          function(
         *              data, status, promise/
         *              promise, status, error
         *              ){...}
         *       )
         *      .then(
         *          doneCallback, failCallback
         *      )
         */

        promise
            .done( (data, status, promise) => {
                // console.log(data);
                let
                    newCountries = [],
                    newCodes = []
                ;
                for(let country of data){
                    newCountries.push(country.name);
                    newCodes.push(country.code);
                }
                // console.log(newCountries);
                setAutocomplete(newCountries, newCodes);
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
        // setAutocomplete();
        getCountries();
    }// init

;
window.addEventListener("load", init);
})();



