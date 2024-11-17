// NOT USED

const carListings = document.getElementById("car-listings");

function displayCars(cars) {
  carListings.innerHTML = "";
  if (cars.length === 0) {
    carListings.innerHTML =
      "<p>No cars match your search criteria. Please try again.</p>";
  } else {
    cars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.classList.add("car-card");
      carCard.innerHTML = `
        <h3>${car.year} ${car.make} ${car.model}</h3>
        <p>Mileage: ${car.mileage} miles</p>
        <p>Price: $${car.price}</p>
        <p>Color: ${car.color}</p>
        <p>Gas Mileage: ${car.gasMileage}</p>
      `;
      carListings.appendChild(carCard);
    });
  }
}

function applyFilters() {
  const minYear = parseInt(document.getElementById("minYear").value) || 0;
  const maxYear =
    parseInt(document.getElementById("maxYear").value) || Infinity;
  const maxMileage =
    parseInt(document.getElementById("maxMileage").value) || Infinity;
  const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("maxPrice").value) || Infinity;

  const make = Array.from(document.getElementById("make").selectedOptions).map(
    (option) => option.value
  );
  const color = Array.from(
    document.getElementById("color").selectedOptions
  ).map((option) => option.value);

  const filteredCars = usedCars.filter(
    (car) =>
      car.year >= minYear &&
      car.year <= maxYear &&
      (make.length === 0 || make.includes(car.make)) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (color.length === 0 || color.includes(car.color))
  );

  displayCars(filteredCars);
}

// Display all cars on initial load
displayCars(usedCars);
