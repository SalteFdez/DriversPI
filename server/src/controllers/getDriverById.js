const axios = require("axios");

const getDriverById = async (req, res) => {
    try {
        const id = req.params.idDriver; // cambiar
        const drivers = [];
        const APIDriverResponse = await axios.get(`http://localhost:5000/drivers/${id}`);
        const APIDriver = APIDriverResponse.data;
        console.log(APIDriver)
        if (APIDriver) {
            drivers.push(APIDriver);
        };
        if (drivers.length > 0) {
            return res.status(200).json(drivers);
        }
        return res.status(401).send("No existe un driver con ese id.");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getDriverById;