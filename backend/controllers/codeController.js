const CodePromo = require('./../models/CodePromo');


exports.createCode = (req, res) => {
    const codepromo = new CodePromo(req.body);

    codepromo.save((err, codepromo) => {
        if(err){
            return res.status(400).json({
                error: 'bad Request !'
            })
        }

        res.json({
            codepromo: codepromo
        })
    }) 
}

exports.allCode = (req, res) => {

    CodePromo.find().exec((err, CodePromo) => {
        if(err){
            return res.status(500).json({
                error: err
            })
        }

        res.json(CodePromo
            
        )
    })
}

exports.deleteCode = (req, res) => {

    let CodePromo = req.CodePromo;

    CodePromo.remove((err) => {

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


exports.CodeId = (req, res, next, id) => {

    CodePromo.findById(id).exec((err, CodePromo) => {

        if(err || !CodePromo) {
            return res.status(404).json({
                error: "Tables not found !"
            })
        }

        req.CodePromo = CodePromo;
        next()
    })

} 



