export const load = ({ fetch }) => {
  const fetchCars = async () => {
    const res = await fetch(
      'https://vda-lab.github.io/assets/vast2021_gps_coordinates.json',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const fetchPOI = async () => {
    const res = await fetch(
      'https://vda-lab.github.io/assets/vast2021_businesses.json',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    const data = await res.json();
    return data;
  };

  return {
    cars: fetchCars(),
    poi: fetchPOI(),
  };
};
