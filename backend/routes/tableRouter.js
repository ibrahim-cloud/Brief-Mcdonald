
const router = require("express").Router();


const {createTables,
    allTables, 
    TableId, 
    deleteTables,relatedTables} = require('./../controllers/TablesController')

router.post('/create', createTables)
router.delete('/:tableId', deleteTables)
// router.put('/:tableId', updateTables)
router.get('/', allTables)


router.param('tableId', TableId)

module.exports = router