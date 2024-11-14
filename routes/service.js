const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM service', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const serviceId = req.params.id;
  db.query('SELECT * FROM service WHERE id_client = ?', [serviceId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('service existe pas');
    }
    res.json(results[0]);
  });
});

  router.post('/', (req, res) => {
    const { id_admin, nom_service, description_service, prix_service, image_service } = req.body;
    const query = 'INSERT INTO service (id_admin, nom_service, description_service, prix_service, image_service) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id_admin, nom_service, description_service, prix_service, image_service ], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, id_admin, nom_service, description_service, prix_service, image_service });
    });
  });
  
  router.put('/:id', (req, res) => {
    const serviceId = req.params.id;
    const updatedservice = req.body;
    db.query('UPDATE service SET ? WHERE id_service = ?', [updatedservice, serviceId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('service existe pas');
      }
      res.send('service Ajouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const serviceId = req.params.id;
    db.query('DELETE FROM service WHERE salle = ?', [serviceId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('service existe pas');
      }
      res.send('service supprimé avec succès');
    });
  });
  
  module.exports=router;