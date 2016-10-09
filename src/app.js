function add_to_db () {
  window.db.add(name: document.field1.value, desc: document.field2.value);
}

function dump_db () {
  var db_string = "";
  window.db.find({}, function (err, doc) {
    doc.foreach(function (document) {
      console.log(JSON.stringify(document);
      $("#dump").append(JSON.stringify(document));
    })
  });
}
