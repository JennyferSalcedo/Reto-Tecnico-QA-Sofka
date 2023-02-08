// Nave Espacial
export interface Spaceship {
  name: string;
  weight: number;
  createSpaceShip: () => void
}

// Nave Espacial con empuje
export interface ThrustSpaceship extends Spaceship {
  pushingPower: number;
}

// Vehículo lanzadera
export interface ShuttleVehicle extends ThrustSpaceship {
  loadedWeight: number;
  height: number;
  fuel: string;
}

// Naves espaciales no tripuladas
export interface UnmannedSpaceCraft extends ThrustSpaceship {
  speed: string;
  hasCells: boolean;
}

// Naves espaciales tripuladas
export interface MannedSpaceCraft extends Spaceship {
  groundClearance: string;
  numberOfSeats: number;
}


// Petición HTTP a backend
export interface SpaceshipCreateRequest {
  name:            string;
  weight:          string;
  pushingPower?:   number;
  loadedWeight?:   string;
  height?:          number;
  fuel?:            string;
  speed?:           string;
  hasCells?:        boolean;
  groundClearance?: null | string;
  numberOfSeats?:  number | null;
}

