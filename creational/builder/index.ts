interface Builder {
    reset(): void;
    setSeats(seats: number): Builder;
    setEngine(engine: string): Builder;
    setTripComputer(tripConputer: string): Builder;
    setGPS(gps: string): Builder;
}

interface Car {
    seats: number;
    engine: string;
    tripComputer: string;
    gps: string;
}

class CarBuilder implements Builder {
    private result: Car = {} as Car;

    reset(): void {
        this.result = {} as Car;
    }

    setSeats(seats: number): Builder {
       this.result.seats = seats;
        return this;
    }

    setEngine(engine: string): Builder {
        this.result.engine = engine;
        return this;
    }

    setTripComputer(tripConputer: string): Builder {
        this.result.tripComputer = tripConputer;
        return this;
    }

    setGPS(gps: string): Builder {
        this.result.gps = gps;
        return this;
    }
    
    getResult(): Car {
        return this.result;
    }
}

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    changeBuilder(builder: Builder): void {
        this.builder = builder;
    }

    make(type: string): void {
        this.builder.reset();
        if (type === '1.0') {
            this.builder
            .setEngine('1.0')
            .setGPS('GPS 1.1')
            .setSeats(5);
        } else {
            this.builder
            .setEngine('2.0')
            .setGPS('GPS 2.4.3')
            .setSeats(2);
        }
    }
}

const car = new CarBuilder();
const diretor = new Director(car);
diretor.make('1.0');
console.log(car.getResult());