const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM reservation', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const reservationId = req.params.id;
  db.query('SELECT * FROM reservation WHERE id_reservation = ?', [reservationId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('reservation existe pas');
    }
    res.json(results[0]);
  });
});

  router.post('/', (req, res) => {
    const { id_client, nom_reservation, email_reservation, telephone_reservation, nbre_place } = req.body;
    const query = 'INSERT INTO reservation (id_client, nom_reservation, email_reservation, telephone_reservation, nbre_place) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id_client, nom_reservation, adresse_salle, nombre_place, description_salle, prix_salle, image_salle ], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, id_client, nom_reservation, email_reservation, telephone_reservation, nbre_place });
    });
  });
  
  router.put('/:id', (req, res) => {
    const reservationId = req.params.id;
    const updatedreservation = req.body;
    db.query('UPDATE reservation SET ? WHERE id_reservation = ?', [updatedreservation, reservationId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('reservation existe pas');
      }
      res.send('reservation Ajouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const reservationId = req.params.id;
    db.query('DELETE FROM reservation WHERE salle = ?', [reservationId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('reservation existe pas');
      }
      res.send('reservation supprimé avec succès');
    });
  });
  
  module.exports=router;