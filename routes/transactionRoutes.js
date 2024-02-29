const express = require('express');
const router = express.Router();
const { getAllTransactions, createTransaction, updateTransaction, deleteTransaction, getTransaction } = require('../controllers/transactionController');

// Route pour récupérer toutes les transactions
router.get('/', getAllTransactions);

// Route pour ajouter une nouvelle transaction
router.post('/', createTransaction);

// Route pour récupérer une transaction spécifique
router.get('/:id', getTransaction);

// Route pour mettre à jour une transaction
router.put('/:id', updateTransaction);

// Route pour supprimer une transaction
router.delete('/:id', deleteTransaction);

module.exports = router;
