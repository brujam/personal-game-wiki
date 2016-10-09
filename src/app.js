function add_to_db() {
    window.db.insert({
        name: $("#field1").val(),
        desc: $("#field2").val()
    });
}

function dump_db() {
  console.log("Begin dump; \n---\n");
  window.db.find({}, function(err, doc) {
    doc.forEach(function(document) {
        console.log("db.insert(" + JSON.stringify(document) + ");")
    })
  });
  window.setTimeout(function () {console.log("\n---\nEnd dump;");}, 1000);
}

$("#dump_js_button").click(dump_db);
