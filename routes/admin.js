const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM administrateur', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const administrateurId = req.params.id;
  db.query('SELECT * FROM administrateur WHERE id_admin = ?', [administrateurId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('administrateur existe pas');
    }
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
    const { nom_admin, email_admin, adresse_admin, telephone_admin, mot_de_passe } = req.body;
    const query = 'INSERT INTO administrateur (nom_admin, email_admin, adresse_admin, telephone_admin, mot_de_passe) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nom_admin, email_admin, adresse_admin, telephone_admin, mot_de_passe], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, nom_admin, email_admin, adresse_admin, telephone_admin, mot_de_passe });
    });
  });
  
  router.put('/:id', (req, res) => {
    const administrateurId = req.params.id;
    const updatedadministrateur = req.body;
    db.query('UPDATE administrateur SET ? WHERE id_admin = ?', [updatedadministrateur, administrateurId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('administrateur existe pas');
      }
      res.send('administrateur Ajouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const administrateurId = req.params.id;
    db.query('DELETE FROM administrateur WHERE id = ?', [administrateurId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('administrateur existe pas');
      }
      res.send('administrateur supprimé avec succès');
    });
  });
  
  module.exports=router;