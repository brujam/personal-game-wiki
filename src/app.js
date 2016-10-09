function add_to_db () {
  window.db.add({name: document.field1.value, desc: document.field2.value});
}

function dump_db () {
  window.db.find({}, function(err, doc) {
    doc.forEach(function(document) {
        console.log("db.insert(" + JSON.stringify(document) + ")")
    })
  });
}
