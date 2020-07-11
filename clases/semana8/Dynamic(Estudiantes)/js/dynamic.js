var jq = $(document);
var contadorDIV1 = 0;

var data = [
  {x: 1, y: 2, label: "Corner 1"},  
  {x: 2, y: 1, label: "Vitrine 2"},  
  {x: 2, y: 2, label: "Corner 2"},  
  {x: 1, y: 3, label: "Reserve"},
  {x: 1, y: 1, label: "Vitrine 1"},
    
  {x: 3, y: 2, label: "ELEMENT TEST"},
  {x: 2, y: 3, label: "ELEMENT 2"}
];


/*************************************************************************************/


jq.ready(function () {

    LoadCalendar(".datepicker");

});