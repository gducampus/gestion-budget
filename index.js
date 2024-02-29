const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware standard pour parser les requêtes en JSON
app.use(express.json());

// Utilisation des routes
app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);

// Middleware d'erreur global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose s\'est mal passé !');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur http://localhost:${port}`));