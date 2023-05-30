export const load = ({ fetch }) => {
  const fetchCars = async () => {
    const res = await fetch(
      'http://localhost:5173/vast2021_gps_coordinates.json'
    );
    const data = await res.json();
    return data;
  };
  const fetchPOI = async () => {
    const res = await fetch('http://localhost:5173/vast2021_businesses.json');
    const data = await res.json();
    return data;
  };

  return {
    cars: fetchCars(),
    poi: fetchPOI(),
  };
};
