const express = require('express');
const { model } = require('mongoose');

const router = express.Router();

const {createSouCategory, deleteSouCategory, updateSouCategory, allSouCategories, souCategoryId} = require('./../controllers/souCategoryController')

router.post('/create', createSouCategory)
router.delete('/:souCategoryId', deleteSouCategory)
router.put('/:souCategoryId', updateSouCategory)
router.get('/', allSouCategories)


router.param('souCategoryId', souCategoryId)

module.exports = router