const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM expenses ORDER BY date DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new expense
router.post('/', async (req, res) => {
  const { description, amount, category, date } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO expenses (description, amount, category, date) VALUES (?, ?, ?, ?)',
      [description, amount, category, date]
    );
    res.status(201).json({ id: result.insertId, description, amount, category, date });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an expense
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { description, amount, category, date } = req.body;
  try {
    await db.query(
      'UPDATE expenses SET description = ?, amount = ?, category = ?, date = ? WHERE id = ?',
      [description, amount, category, date, id]
    );
    res.json({ id, description, amount, category, date });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM expenses WHERE id = ?', [id]);
    res.json({ message: 'Dépense supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Dashboard summary
router.get('/dashboard/summary', async (req, res) => {
  try {
    const [total] = await db.query('SELECT SUM(amount) as total FROM expenses');
    const [byCategory] = await db.query('SELECT category, SUM(amount) as total FROM expenses GROUP BY category');
    res.json({ total: total[0].total || 0, byCategory });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
