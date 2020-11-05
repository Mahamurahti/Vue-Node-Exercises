let mysql = require('mysql');
let express = require('express');
let url = require('url');
let util = require('util');
let app = express();

let con = mysql.createConnection({
    host: "localhost",
    user: "websova",
    password: "websova",
    database: "example_db"
});

const query = util.promisify(con.query).bind(con);

// http://localhost:8081/
app.get('/', function (req, res){

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM location", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            let values = JSON.parse(JSON.stringify(result));
            console.log(values);
            res.send(
                'Results from the database: <br>' +
                'Location name: ' + values[0].Location_name + '<br>' +
                'Street address: ' + values[0].Street_address + '<br>' +
                'City: ' + values[0].City
            );
        });
    });
    console.log("Got a request!");
})

// http://localhost:8081/api/events?start=2019-11-01&end=2020-11-29
app.get("/api/events", function (req, res) {
    console.log("Get events from a certain period");
    let q = url.parse(req.url, true).query;
    let startDate = q.start;
    let endDate = q.end;
    let alteredResult;
    let string;

    let sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
        + " FROM event_date, event, location"
        + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
        + " and event_date.Date >= ? and event_date.Date <= ?"
        + " GROUP BY Name"
        + " ORDER BY event_date.Date";

    (async () => {
        try {
            const rows = await query(sql,[startDate, endDate]);
            string = JSON.stringify(rows);
            alteredResult = '{"numOfRows":'+rows.length+',"rows":'+string+'}';
            console.log(rows);
            res.send(alteredResult);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            //conn.end();
        }
    })()
});

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
