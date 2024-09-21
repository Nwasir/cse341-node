const awesomeFunction = ( req, res, next) => {
    res.json('Sandra Agomuo');
}

const returnAwesomePerson = (req, res, next) => {
    res.json('Sandra Agomuo is an awesome person')
}

module.exports = { awesomeFunction, returnAwesomePerson };