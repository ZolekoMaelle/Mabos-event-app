const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM reservation_salle', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const reservationId = req.params.id;
  db.query('SELECT * FROM reservation_salle WHERE id_reservation = ?', [reservationId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('reservation salle existe pas');
    }
    res.json(results[0]);
  });
});

  router.post('/', (req, res) => {
    const { id_salle, type_evenement, date_evenement } = req.body;
    const query = 'INSERT INTO reservation_salle (id_salle, type_evenement, date_evenement) VALUES (?, ?, ?)';
    db.query(query, [id_salle, type_evenement, date_evenement], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, id_salle, type_evenement, date_evenement });
    });
  });
  
  router.put('/:id', (req, res) => {
    const reservation_salleId = req.params.id;
    const updatedreservation_salleId = req.body;
    db.query('UPDATE reservation_salle SET ? WHERE id_reservation_salle = ?', [updatedreservation_salleId, reservation_salleId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('updatedreservation salle existe pas');
      }
      res.send('updatedreservation salle Ajouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const profilId = req.params.id;
    db.query('DELETE FROM reservation_salle WHERE id_updatedreservation_salle = ?', [updatedreservation_salleId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('updatedreservation salle existe pas');
      }
      res.send('updatedreservation salle supprimé avec succès');
    });
  });
  
  module.exports=router;