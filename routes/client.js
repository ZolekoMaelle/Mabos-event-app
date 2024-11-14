const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM client', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const clientId = req.params.id;
  db.query('SELECT * FROM client WHERE id_client = ?', [clientId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('client existe pas');
    }
    res.json(results[0]);
  });
});

  router.post('/', (req, res) => {
    const { nom_client, email_client, adresse_client, telephone_client, mot_de_passe } = req.body;
    const query = 'INSERT INTO client (nom_client, email_client, adresse_client, telephone_client, mot_de_passe) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nom_client, email_client, adresse_client, telephone_client, mot_de_passe], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, nom_client, email_client, adresse_client, telephone_client, mot_de_passe });
    });
  });
  
  router.put('/:id', (req, res) => {
    const clientId = req.params.id;
    const updatedclient = req.body;
    db.query('UPDATE client SET ? WHERE id_client = ?', [updatedclient, clientId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('client existe pas');
      }
      res.send('client AZjouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const clientId = req.params.id;
    db.query('DELETE FROM client WHERE id_client = ?', [clientId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('client existe pas');
      }
      res.send('client supprimé avec succès');
    });
  });
  
  module.exports=router;