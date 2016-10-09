function add_to_db() {
    window.db.insert({
        name: $("#field1").val(),
        desc: $("#field2").val()
    });
    
    $("#end_of_table").before("<tr><td>" + $("#field1").val() + "</td><td>" + $("#field2").val() + "</td></tr>");
}

function dump_db() {
  console.log("Begin dump; \n---\n");
    
  var dump = "";
  dump = dump + '<div id="dump">';
  window.db.find({}, function(err, doc) {
    doc.forEach(function(document) {
        console.log("db.insert(" + JSON.stringify(document) + ");");
        
        dump = dump + "db.insert(" + JSON.stringify(document) + "); <br/>";
    })
  });
  dump = dump + "</div>";
    
  $("#dump").replaceWith(dump);
  window.setTimeout(function () {console.log("\n---\nEnd dump;");}, 1000);
}

$("#dump_js_button").click(dump_db);
