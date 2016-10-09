First create an NEDB datastore;

```javascript
var db = new Nedb();
```

Then store something in it;

```javascript
db.insert([{ _id: "this is some json" }]);
```

Then echo that out;

```javascript
db.find({}, function (err, doc) {alert(doc[0]._id)});
```

How to dump the DB;

```javascript
db.find({}, function(err, doc) {
    doc.forEach(function(document) {
        console.log("db.insert(" + JSON.stringify(document) + ")")
    })
});
```
