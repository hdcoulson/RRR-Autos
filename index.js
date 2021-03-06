var express = require('express')
var app = express()
app.use(express.static('public'))
var bodyParser = require('body-parser')

app.use(bodyParser.json())


var cars = [
  {
    vehicleId: 1,
    make: 'Honda',
    model: 'CR-V',
    description: 'The Honda CR-V has been totally revamped for 2017, further polishing a formula of practicality, efficiency, refinement and value that has made it the best-selling SUV over the past 20 years.',
    photo: 'images/honda-crv.jpg',
    proReview: 'The 2017 Honda CR-V is the right choice for a compact SUV. True, it isn’t as much fun to drive as the Mazda CX-5, and the RAV4 comes with more standard safety features. Still, no other vehicle in the compact SUV class hits all the marks most people are looking for in this type of ride: an upscale, comfortable interior; a smooth ride; superior cargo space; good gas mileage; and good reliability. Its base price is higher than some competitors, but the CR-V EX trim provides as many features as the CX-5 and RAV4, while adding more cargo and passenger space. If you can afford just a little bit more, the CR-V returns a whole lot.'
  },
  {
    vehicleId: 2,
    make: 'Toyota',
    model: 'RAV4',
    description: 'Despite the sea of competitors swimming in the compact-SUV pool, the 2017 Toyota RAV4 remains the gold medal champ with its legendary quality, reliability and dependability.',
    photo: 'images/toyota-rav4.jpg',
    proReview:'Though you won’t find the RAV4 at the top of our compact SUV rankings, it should still be on your shopping list. The RAV4 is a reliable family hauler that comes with a generous list of features, with a particular focus on safety to keep your mind at ease when carting your family around. Its performance and interior styling won’t wow you like the Ford Escape or the Nissan Rogue will, but the intuitive infotainment system, organized layout, and spacious cabin and cargo area make the RAV4 an appealing SUV in a competitive class. Sure, you may find rival SUVs at lower prices with nicer interiors, but they may not have the long list of standard features or near top-of-the-class cargo space that the RAV4 does.'
  },
  {
    vehicleId: 3,
    make: 'Nissan',
    model: 'Murano',
    description: 'Although the 2017 Nissan Murano SUV can faithfully carry out its duties as a family-hauling crossover SUV, its art-house exterior styling makes it different than anything else in the segment.',
    photo: 'images/nissan-murano.jpg',
    proReview:'Its below-class-average starting price of $29,770 and appealing standard and available features and packages make the Nissan Murano a vehicle that should be near the top of your shopping list for a midsize SUV. It has an upscale interior, excellent fuel economy, the latest technology and safety features, and an intuitive infotainment system. It also has a composed and smooth ride. It sails over most surfaces with little disturbance, but it could use more steering feedback and less body roll. The Ford Edge offers better handling and overall performance, and the Nissan Pathfinder and Rogue both offer more cargo and seating space, but none can match the Muranos overall package.'
  },
  {
    vehicleId: 4,
    make: 'Mazda',
    model: 'CX5',
    description: 'The 2016 Mazda CX-5 has the versatility, taller ride height and economic sensibility of other compact SUVs like the Honda CR-V, Toyota RAV4 and Ford Escape. Yet it stands apart from it\'s rivals.',
    photo: 'images/mazda-cx5.jpg',
    proReview: 'The new 2017 Mazda CX-5 may look like the outgoing model, but the changes go deep and are, indeed, substantial. Although the styling updates may seem subtle, the new CX-5 is both longer and lower than the previous version. The 2.5-liter four-cylinder engine mostly carries over; output for the 2017 model is 187 horsepower. Mazda has hinted that a diesel engine will come to the U.S. Mazda says the 2017 models also get an enhanced stability control system. A six-speed automatic is the only available transmission. The previous CX-5 was a strong competitor in the compact SUV category. Mazda’s approach always highlighted the fun-to-drive factor but also brought a noisy cabin, a somewhat rough ride, and a confusing infotainment system. Pricing starts from $24,000 and reaches over $30,000 with the top trim.'
  },
  {
    vehicleId: 5,
    make: 'Mini',
    model: 'Countryman',
    description: 'The Mini Cooper Countryman is the most practical member of the Mini family. With the largest cargo area, highest ground clearance and most interior space, it\'s the Mini that\'s most ideal for fun.',
    photo: 'images/mini-countryman.jpg',
    proReview: 'The redesigned Countryman is now based on the Clubman and offers Cooper and Cooper S versions. Engine choices are a base 1.5-liter turbo three-cylinder and a 2.0-liter turbo four-cylinder for the S. Front- and all-wheel drives are offered. In June an all-wheel-drive plug-in hybrid version follows, with a promised all-electric range of 24 miles. This SUV-like Countryman has grown longer than the original, bringing in more interior space and flexibility. The optional Mini Driving Assistant system includes forward-collision warning with low-speed automatic emergency braking, pedestrian warning with brake assist, and automatic high beams.'
  },
  {
    vehicleId: 6,
    make: 'Hyundai',
    model: 'Tucson',
    description: 'Third generation is charmed for the Hyundai Tucson, as this version of the compact SUV gets just about everything right. Previous versions were competent, but not quite competitive.',
    photo: 'images/hyundai-tucson.jpg',
    proReview: 'The Tucson is one of the better small SUVs, although neither of its powertrains is ideal. The base SE version gets a 164-hp, 2.0-liter four-cylinder engine, routing through a six-speed automatic. This version is rather slow and can feel strained. More expensive trims get a 1.6-liter turbo four-cylinder that uses a seven-speed automated manual transmission. This more powerful setup returned 26 mpg overall, but it suffers from a vibration at very low speeds, such as in parking maneuvers. Ride comfort, handling agility, and noise suppression are commendable. The rear seat is roomy, and controls are easy to use. Advanced safety features, including automatic emergency braking and blind-spot monitoring, are optional.'
  },

]

var comments = [
  {
    vehicleId: 1,
    name: 'Rick Astley',
    comments: 'The CR-V is no stranger to love. It knows the rules and so do I. A full commitment is what it needs. You wouldnt get this from any other small SUV. I just want to tell you how I\'m feeling. Gotta make you understand. It will never give you up, never let you down. It will never run around and desert you. The CR-V will never make you cry, never say goodbye. It will never tell a lie and hurt you.',
    stars: 5
  },
  {
    vehicleId: 2,
    name: 'Jules Winnfield',
    comments: 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you.',
    stars: 4
  },
  {
    vehicleId: 3,
    name: 'Hodor',
    comments: 'Hodor! Hodor. Hodor. Hodor? Hodor!!! Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. Hodor. ',
    stars: 3
  },
  {
    vehicleId: 1,
    name: 'Dr. Emmett Brown',
    comments: 'If my calculations are correct, when this baby hits 88 miles per hour... you\'re gonna see some serious shit.',
    stars: 4
  },
  {
    vehicleId: 4,
    name: 'Paul Walker',
    comments: 'It\'s so safe, you don\'t even need to wear a seatbelt!',
    stars: 3
  },
  {
    vehicleId: 5,
    name: 'Batman',
    comments: ' It must be the car. Chick\'s always dig the car.',
    stars: 4
  },
  {
    vehicleId: 6,
    name: 'Kevin Klein',
    comments: 'This is difficult stuff. Making a left turn in L.A. is one of the harder things you\'ll learn in life.',
    stars: 2
  }
]

app.get('/cars',(req, res) => {
  res.json(cars)
})

app.get('/cars/:vehicleId',(req, res) => {
  function getCar(car) {
    var reqId = req.params.vehicleId
    return car.vehicleId.toString() === reqId
  }
  var selectedCar = cars.filter(getCar)
  res.json(selectedCar[0])
})

app.post('/comments',(req, res) => {
  var comment = req.body
  comments.push(comment)
  res.sendStatus(201)
})

app.get('/comments',(req, res) => {
  res.json(comments)
})

app.get('/comments/:vehicleId',(req, res) => {
  function isVehicleComment(comment) {
    if (req.params.vehicleId === comment.vehicleId.toString()) {
      return true
    }
    return false
  }
  var vehicleComments = comments.filter(isVehicleComment)
  res.json(vehicleComments)
})


app.listen(3000)
