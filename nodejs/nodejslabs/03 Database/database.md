# Database commands used:
- GRANT ALL PRIVILEGES ON *.* TO websova@localhost IDENTIFIED BY 'websova' WITH GRANT OPTION;
- source C:\temp\CreateTestDatabase.sql
- insert into location values ('1', 'Tavastia', 'Urho Kekkosen katu', 'Helsinki', '00100', 'Finland');
- insert into event values ('1', 'Maustetytöt', 'Musiikki','1');
- insert into event_date values ('2020-05-20', '1');