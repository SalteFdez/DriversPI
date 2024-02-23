const { Driver } = require ("../db");
const axios = require('axios');

const allDrivers = async (req, res) => {
    try {
        // Hacer la solicitud a la API en el puerto 5000
        const response = await axios.get('http://localhost:5000/drivers');
        const driversData = response.data;
        // Transformar la estructura de datos si es necesario
        const transformedData = driversData.map(driver => ({
            name: driver.name.forename,
            lastName: driver.name.surname,
            image: driver.image.url,
            nationality: driver.nationality,
            bornDate: driver.dob,
            description: driver.description,
          }));
        // Guardar o actualizar los datos en la base de datos
        await Driver.bulkCreate(transformedData, { updateOnDuplicate: ['name', 'lastName'] })

        const driversFromDB = await Driver.findAll();
        /*
        driversData.map((driver) => {
            if (!driver.image.url) {
                driver.image.url = "../public/F1.svg"
            }
        });
        */
        return res.status(200).json(driversFromDB);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = allDrivers;