const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories); // Route pour afficher la liste 
router.post('/', categoryController.createCategory); // Route pour créer une catégorie
router.put('/:id', categoryController.updateCategory); // Route pour mettre à jour une catégorie
router.delete('/:id', categoryController.deleteCategory); // Route pour supprimer une catégorie

module.exports = router;