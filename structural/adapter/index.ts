class SquarePeg {
    private readonly width: number;

    constructor(width: number) {
        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }
}

class RoundPeg {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
}

class RoundHole {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    fits(peg: RoundPeg): boolean {
        return (peg.getRadius() <= this.radius);
    }
}

class SquarePegAdapter extends RoundPeg {
    private adaptee: SquarePeg;

    constructor(adaptee: SquarePeg) {
        super(adaptee.getWidth());
        this.adaptee = adaptee;
    }

    getRadius(): number {
        return (this.adaptee.getWidth() * Math.sqrt(2)) / 2;
    }
}

const hole = new RoundHole(10);
const peg1 = new RoundPeg(10);
console.log(hole.fits(peg1));

const peg2 = new SquarePeg(14);
const adapter1 = new SquarePegAdapter(peg2);
console.log(hole.fits(adapter1));

const peg3 = new SquarePeg(15);
const adapter2 = new SquarePegAdapter(peg3);
console.log(hole.fits(adapter2));
