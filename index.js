const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const User = require('./models/User');
const Category = require('./models/Category');
const Transaction = require('./models/Transaction');
const sequelize = require('./config/database');

// Associations
User.hasMany(Category);
Category.belongsTo(User);

User.hasMany(Transaction);
Transaction.belongsTo(User);

Category.hasMany(Transaction);
Transaction.belongsTo(Category);

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

//synchronisation des tables avec sequelize
sequelize.sync({ force: false }).then(() => {
  console.log("Les tables ont été créées avec succès.");
}).catch((error) => {
  console.error("Erreur lors de la création des tables :", error);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur http://localhost:${port}`));