import Card from '../Card/Card';

export default function Cards({ drivers }) {

  const uuidToNumber = (uuid) => {
    const hex = uuid.toString().replace(/-/g, '');
    const number = parseInt(hex, 16);
    return number;
  };

  const cardComponents = drivers.map((driver) => {
    if (typeof driver !== undefined) {
      if (driver.name.forename) {
        return (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name.forename}
            teams={driver.teams}
            image={driver.image.url}
          />
        );
      }
      else {
        driver.id = uuidToNumber(driver.id);
        driver.id = driver.id % 1000 + 600;
        console.log(driver)
        return (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            teams={driver.teams}
            image={driver.image}
          />
        );
      }
    }
    return null;
  });

  return (
    <div>
      {cardComponents}
    </div>
  );
}
