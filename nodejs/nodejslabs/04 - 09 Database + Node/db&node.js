let mysql = require('mysql');
let express = require('express');
let url = require('url');
let util = require('util');
let path = require('path');
let fs = require('fs');
let app = express();

let bodyParser = require('body-parser');
let urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let con = mysql.createConnection({
    host: "localhost",
    user: "websova",
    password: "websova",
    database: "example_db"
});

const query = util.promisify(con.query).bind(con);

con.connect(function (err){
    if (err) throw err;
    console.log("Connected to MySQL!")
});

// http://localhost:8081/
app.get('/', function (req, res){
    console.log("Get all events from database (/)");
    let values;
    let alteredResult;
    let sql = "SELECT * FROM location";

    (async () => {
        console.log('Starting async');
        try {
            const result = await query(sql);
            values = JSON.parse(JSON.stringify(result));
            alteredResult = 'Results from the database: <br>' +
                'Location name: ' + values[0].Location_name + '<br>' +
                'Street address: ' + values[0].Street_address + '<br>' +
                'City: ' + values[0].City;
            console.log('Sending results to browser');
            res.send(alteredResult);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            console.log('Ending async')
        }
    })()
})

// http://localhost:8081/api/events?start=2019-11-01&end=2020-11-29
app.get("/api/events", function (req, res) {
    console.log("Get events from a certain period (/api/events)");
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
        console.log('Starting async');
        try {
            const rows = await query(sql,[startDate, endDate]);
            string = JSON.stringify(rows);
            alteredResult = '{"numOfRows":'+rows.length+',"rows":'+string+'}';
            console.log('Sending results to browser');
            res.send(alteredResult);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            console.log('Ending async')
        }
    })()
});

// http://localhost:8081/api/location?name=Tavastia
app.get("/api/location", function (req, res) {
    console.log("Get events from a certain location (/api/location)");
    let q = url.parse(req.url, true).query;
    let location = q.name;
    let alteredResult;
    let string;

    let sql = "SELECT * FROM location WHERE location_name like ?";

    (async () => {
        console.log('Starting async');
        try {
            const rows = await query(sql,[location]);
            string = JSON.stringify(rows);
            alteredResult = '{"numOfRows":'+rows.length+',"rows":'+string+'}';
            console.log('Sending results to browser');
            res.send(alteredResult);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            console.log('Ending async');
        }
    })()
});

// http://localhost:8081/api/event
app.post("/api/event", urlEncodedParser, function (req, res){
    console.log('Post request');
    console.log('body: %j', req.body);

    let json = req.body;

    let sql, latestId, idLoc, idEvt;

    if(json.eventLocation > 0){
        console.log('Creating an event in an existing place');
        (async () => {
            console.log('Starting async');
            try{
                sql = "SELECT MAX(event_id) AS max FROM event";
                latestId = await query(sql);
                id = JSON.parse(JSON.stringify(latestId));
                id = id[0].max;
                id++;

                sql = "INSERT INTO event (Event_id, Name, Type, Location_Location_id) VALUES (?, ?, ?, ?)";
                const resultEvent = await query(sql, [id, json.eventName, json.eventType, json.eventLocation]);

                sql = "INSERT INTO event_date (Date, Event_id) VALUES (?, ?)";
                const resultEvent_id = await query(sql, [json.eventDate, id]);

                res.send('Post was successful. Added a new event to an existing place!');

            }catch(err){
                console.log("Database error!" + err);
            }
            finally {
                console.log('Ending async');
            }
        })()
    }else{
        console.log('Creating an event in a new location');
        (async () => {
            console.log('Starting async');
            try{
                sql = "SELECT MAX(location_id) AS max FROM location";
                latestId = await query(sql);
                idLoc = JSON.parse(JSON.stringify(latestId));
                idLoc = idLoc[0].max;
                idLoc++;

                sql = "INSERT INTO location (Location_id, Location_name, Street_address, City, Zip, Country) " +
                    "VALUES (?, ?, ?, ?, ?, ?)";
                const resultLocation = await query(sql, [idLoc, json.locPlaceName, json.locStreetAddress,
                    json.locCity, json.locZip, json.locCountry]);

                sql = "SELECT MAX(event_id) AS max FROM event";
                latestId = await query(sql);
                idEvt = JSON.parse(JSON.stringify(latestId));
                idEvt = idEvt[0].max;
                idEvt++;

                sql = "INSERT INTO event (Event_id, Name, Type, Location_Location_id) VALUES (?, ?, ?, ?)";
                const resultEvent = await query(sql, [idEvt, json.eventName, json.eventType, idLoc]);

                sql = "INSERT INTO event_date (Date, Event_id) VALUES (?, ?)";
                const resultEvent_id = await query(sql, [json.eventDate, idEvt]);

                res.send('Post was successful. Added a new event with a new location!');

            }catch(err){
                console.log("Database error!" + err);
            }
            finally {
                console.log('Ending async');
            }
        })()
    }

});

app.get("/events", function (req, res){
    console.log("Sending form to browser...");
    res.sendFile(path.join('C:/Users/Eric Keränen/Desktop/AMK/Web-sovelluskehitys/WebstormExercises/WebstormExercises/' +
        'nodejs/nodejslabs/07 Database + Form/eventListing.html'));
});

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
