// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class x
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class x
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class x
  // TODO: The constructor should call the constructor of the parent class, Vehicle 
  // TODO: The constructor should initialize the properties of the Motorbike class 
  // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    super();

    if (wheels.length === 2) {
      this.wheels = wheels;
    } else {
      this.wheels = [new Wheel(), new Wheel()];
    }

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
  }

  // TODO: Implement the wheelie method x
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }
  // TODO: Override the printDetails method from the Vehicle class x
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class x
    super.printDetails();
    // TODO: The method should log the details of the Motorbike x
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    console.log(`vin: ${this.vin}`);
    console.log(`make: ${this.make}`);
    console.log(`model: ${this.model}`);
    console.log(`year: ${this.year}`);
    console.log(`weight: ${this.weight}`);
    console.log(`top speed: ${this.topSpeed}`);
    console.log(`color: ${this.color}`);
    console.log(`wheels: ${this.wheels.length}`);
  }
}
// Export the Motorbike class as the default export
export default Motorbike;