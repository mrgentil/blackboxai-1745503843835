const express = require('express');
const cors = require('cors');
const expensesRoutes = require('./routes/expenses');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expensesRoutes);

app.get('/', (req, res) => {
  res.send('API de gestion des dépenses familiales');
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
