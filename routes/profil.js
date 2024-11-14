const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM profil', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const profilId = req.params.id;
  db.query('SELECT * FROM profil WHERE id_profil = ?', [profilId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('profil existe pas');
    }
    res.json(results[0]);
  });
});

  router.post('/', (req, res) => {
    const { id_client, id_admin, type_profil } = req.body;
    const query = 'INSERT INTO profil (id_client, id_admin, type_profil) VALUES (?, ?, ?)';
    db.query(query, [id_client, id_admin, type_profil], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(201).json({ id: result.insertId, id_client, id_admin, type_profil });
    });
  });
  
  router.put('/:id', (req, res) => {
    const profilId = req.params.id;
    const updatedprofil = req.body;
    db.query('UPDATE profil SET ? WHERE id_profil = ?', [updatedprofil, profilId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('profil existe pas');
      }
      res.send('Profil Ajouté avec succès');
    });
  });

  router.delete('/:id', (req, res) => {
    const profilId = req.params.id;
    db.query('DELETE FROM profil WHERE id_profil = ?', [profilId], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send('profil existe pas');
      }
      res.send('profil supprimé avec succès');
    });
  });
  
  module.exports=router;