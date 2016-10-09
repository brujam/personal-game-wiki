First create an NEDB datastore;

* var db = new Nedb();

Then store something in it;

* db.insert([{ _id: "this is some json" }]);

Then echo that out;

* db.find({}, function (err, doc) {alert(doc[0]._id)});
