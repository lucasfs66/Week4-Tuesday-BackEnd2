const houses = require('./db.json')

let newHouseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
     },
    deleteHouse: (req, res) => {
        console.log('delete')
        const deleteId = req.params.id
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        console.log('create house')
        const {address, price, imageURL} = req.body
        
        
        let newHouse = {
            id : newHouseId,
            address,
            price,
            imageURL,
        }
        
        houses.push(newHouse)
        res.status(200).send(houses)
        newHouseId = newHouseId + 1
    },
    updateHouse: (req, res) => {
        console.log('update')
        const id = req.params.id
        const type = req.body.type

        let index = houses.findIndex(element => element.id === +id)
        if(type === 'plus') {
            houses[index].price = houses[index].price + 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price - 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    },
}