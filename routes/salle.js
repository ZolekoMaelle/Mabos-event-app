const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM salle', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const salleId = req.params.id;
  db.query('SELECT * FROM salle WHERE id_client = ?', [salleId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('salle existe pas');
    }
    res.json(results[0]);
  });
});

  router.post('/', (req, res) => {
    const { id_admin, nom_salle, adresse_salle, nombre_place, description_salle, prix_salle, image_salle } = req.body;
    const query = 'INSERT INTO salle (id_admin, nom_salle, adresse_salle, nombre_place, description_salle, prix_salle, image_salle) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [id_admin, nom_salle, adresse_salle, nombre_place, description_salle, prix_salle, image_salle ], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, id_admin, nom_salle, adresse_salle, nombre_place, description_salle, prix_salle, image_salle });
    });
  });
  
  router.put('/:id', (req, res) => {
    const salleId = req.params.id;
    const updatedsalle = req.body;
    db.query('UPDATE salle SET ? WHERE id_salle = ?', [updatedsalle, salleId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('salle existe pas');
      }
      res.send('salle Ajouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const salleId = req.params.id;
    db.query('DELETE FROM salle WHERE salle = ?', [salleId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('salle existe pas');
      }
      res.send('salle supprimé avec succès');
    });
  });
  
  module.exports=router;