const router = require("express").Router();


const {createCode,
    allCode, 
    CodeId, 
    deleteCode} = require('../controllers/codeController')

router.post('/create', createCode)
router.delete('/:codeId', deleteCode)
// router.put('/:tableId', updateTables)
router.get('/', allCode)


router.param('codeId', CodeId)

module.exports = router