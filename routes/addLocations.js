const router = require('express').Router()
let TouristDestination = require('../models/addLocations.models');
var bodyParser =require('body-parser');
router.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " " + req.ip);
  next();
})

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())

router.get("/body-parsed-info")


router.route('/').get((req,res) => {
  TouristDestination.find()
        .then((touristDestinations) =>{res.json(touristDestinations)})
        .catch((err) => {
            console.log(err)
            res.status(400).json("Error:" + err)
        });
});
        router.route('/add').post((req,res) => {
            const name = req.body.name
                const description = req.body.description
                const website = req.body.website
                const imageUrl = req.body.imageUrl
                const address = req.body.location.address
                const city = req.body.location.city
                const state = req.body.location.state
                const zipCode = req.body.location.zipCode
                const familyFriendly = req.body.familyFriendly
                const indoors = req.body.indoors
                const newLocation = new TouristDestination (
                    {
                        name,
                        description,
                        website,
                        imageUrl,
                        location: { address,
                        city,
                        state,
                        zipCode
                      }, 
                        indoors,
                        familyFriendly,
                      }
                )
                newLocation.save()
                .then(() => res.json('Location added!'))
                .catch(err => res.status(400).json('Error: ' + err));
              });
        // add more routes
                router.route('/:id').get((req,res)=>{
                  TouristDestination.findById(req.params.id)
                    .then((touristDestination) => {res.json(touristDestination)})
                    .catch((err) => {res.status(400).json("Error:" + err)
                    })
                 })
                 router.get("/all-locations", (req, res) => {
                    TouristDestination.find()
                    .then((result) => {
                      res.send(result)
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  })
                  
                 
        // end add more routes

        module.exports = router;