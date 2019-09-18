const Product = require('./models.js');

module.exports = {
    reroute: (req, res)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    },
    findall: (req, res)=>{
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    findone: (req, res)=>{
        Product.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) =>{
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: (req, res) =>{
        Product.updateOne({
            _id: req.params.id},
            {$set: {title: req.body.title, price: req.body.price, image_url: req.body.image_url}},
            {runValidators: true}
        )
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: (req, res) =>{
        Product.findOneAndRemove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}