function add_to_db() {
    window.db.insert({
        name: $("#field1").val(),
        desc: $("#field2").val()
    });
    
    $("#end_of_table").before("<tr><td>" + $("#field1").val() + "</td><td>" + $("#field2").val() + "</td></tr>");
}

function dump_db() {
  window.dump = "";
  window.db.find({}, function(err, doc) {
    doc.forEach(function(document) {
      var string = "db.insert(" + JSON.stringify(document) + "); <br/>";
      window.dump = window.dump + string;
    })
  });
  window.setTimeout(function() {
    $("#dump").replaceWith("<div id=\"dump\">" + window.dump + "</div>")
  }, 1000);
}

$("#dump_js_button").click(dump_db);
