exports.getAllCategories = (req, res) => {
    res.send('Liste des catégories');
  };
  
  exports.createCategory = (req, res) => {

    res.send('Catégorie ajoutée');
  };
  
  exports.updateCategory = (req, res) => {
    res.send('Catégorie mise à jour avec succès');
  };
  
  exports.deleteCategory = (req, res) => {
    res.send('Catégorie supprimée avec succès');
};