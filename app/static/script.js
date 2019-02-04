var ajaxLoad = function(event){
    $("#main").load(event.data);
}

$("#ledger-app").click("ledger",ajaxLoad);
$("#commuter-app").click("commuter",ajaxLoad);