const Tables = require('./../models/TabesModel');


exports.createTables = (req, res) => {
    const tables = new Tables(req.body);

    tables.save((err, sables) => {
        if(err){
            return res.status(400).json({
                error: 'bad Request !'
            })
        }

        res.json({
            tables: tables
        })
    }) 
}

exports.allTables = (req, res) => {

    Tables.find().exec((err, Tables) => {
        if(err){
            return res.status(500).json({
                error: err
            })
        }

        res.json(Tables
            
        )
    })
}

exports.deleteTables = (req, res) => {

    let Tables = req.Tables;

    Tables.remove((err, category) => {

        if(err) {
            return res.status(404).json({
                error: "Tables not found !"
            })
        }

        res.status(204).json({
            message: 'Tables deleted '
        })

    })

}


exports.TableId = (req, res, next, id) => {

    Tables.findById(id).exec((err, Tables) => {

        if(err || !Tables) {
            return res.status(404).json({
                error: "Tables not found !"
            })
        }

        req.Tables = Tables;
        next()
    })

} 



