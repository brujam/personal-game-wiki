function add_to_db () {
  window.db.add({name: document.field1.value, desc: document.field2.value});
}

function dump_db () {
  console.log("Begin dump; \n---\n");
  window.db.find({}, function(err, doc) {
    doc.forEach(function(document) {
        console.log("db.insert(" + JSON.stringify(document) + ")")
    })
  });
  console.log("\n---\nEnd dump;");
}

$("#dump_js_button").click(dump_db);
