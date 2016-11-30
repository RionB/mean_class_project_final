./mongod --repair 
if broken
./mongod
in new terminal 
mongod

curl -i -H "Accept: application/json" https://mean-class-project-rionb.c9users.io/api/locations/123/ where 123 is ID
57f2b441f86e3521353d7dc5
curl -i -H "Accept: application/json" https://mean-class-project-rionb.c9users.io/api/locations/57f2b441f86e3521353d7dc5/

with reviews
curl -i -H "Accept: application/json" https://mean-class-project-rionb.c9users.io/api/locations/57f2b441f86e3521353d7dc5/reviews/abc

Airplane data is in Loc8r DB. Simons locations is in Chapter6 DB

one terminal - run npm start in the getting-mean  ////////// nodemon
second terminal - run ./mongod
third terminal - run mongo
fourth terminal - use for the CURL operations.


flap curl
curl -i -H "Accept: application/json" https://mean-class-project-rionb.c9users.io/api/flap/57ec2adef7d9ffeb397270c1
flapv curl
curl -i -H "Accept: application/json" https://mean-class-project-rionb.c9users.io/api/flapv/57ec2ac0f7d9ffeb39726fc5
vfri curl
curl -i -H "Accept: application/json" https://mean-class-project-rionb.c9users.io/api/vfri/57ec297cf7d9ffeb39726fab

