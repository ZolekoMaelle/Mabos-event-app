const express=require('express')
const app=express();
const port=3000;

app.use(express.json());

const clientRoutes=require('./routes/client');
app.use('/client', clientRoutes);

const administrateurRoutes=require('./routes/admin');
app.use('/admin', administrateurRoutes);

const profilRoutes=require('./routes/profil');
app.use('/profil', profilRoutes);

const salleRoutes=require('./routes/salle');
app.use('/salle', salleRoutes);

const reservationRoutes=require('./routes/reservation');
app.use('/reservation', reservationRoutes);

const reservationsalleRoutes=require('./routes/reservationsalle');
app.use('/reservationsalle', reservationsalleRoutes);

const serviceRoutes=require('./routes/service');
app.use('/service', serviceRoutes);



app.listen(port, ()=>{
    console.log(`le serveur en cours sur le port http://localhost:${port}`);
});