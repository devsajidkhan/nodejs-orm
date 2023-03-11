
const { City } = require('./models/city')
const {getRecordFromDatabase} = require('./database')

try {
  let call = async () => {

  let methodName = 'findAll';
  let methodObj = {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    // where: {
      // name: 'Kabul'
    // }
  };

  let result = await getRecordFromDatabase(City, methodName, methodObj);
  const cites = result.map(city => {
    return city.dataValues;
  });
  console.log(cites)
  // console.log(result);
  };
  call();
} catch (error) {
  console.log(error);
}
