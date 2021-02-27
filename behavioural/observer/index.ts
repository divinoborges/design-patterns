interface Subject {
    state: number;
    subscribe(subscriber: Observer): void;
    unsubscribe(subscriber: Observer): void;
    notify(): void;
}

interface Observer {
    update(subject: Subject): void
}

class Publisher implements Subject {
    public state: number = 0;

    private subscribers: Array<Observer> = [];

    subscribe(subscriber: Observer): void {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Observer): void {
        const subscriberIndex = this.subscribers.indexOf(subscriber);
        if (subscriberIndex === -1) {
            console.log('Publisher: Nonexistent subscriber.');
        } else {
            this.subscribers.splice(subscriberIndex, 1);
            console.log('Publisher: Subscriber removed.');
        }
    }

    notify(): void {
        this.subscribers.forEach((value) => {
            value.update(this);
        });
    }

    someBusinessRule(): void {
        this.state = parseInt((Math.random() * 100).toFixed(2), 10);
        this.notify();
    }
}

class ConcreteSubscriberA implements Observer {
    update(subject: Subject): void {
        console.log('Concrete A: ', subject.state);
    }
}

class ConcreteSubscriberB implements Observer {
    update(subject: Subject): void {
        console.log('Concrete B: ', subject.state);
    }
}

class ConcreteSubscriberC implements Observer {
    update(subject: Subject): void {
        console.log('Concrete C: ', subject.state);
    }
}

const publisher = new Publisher();

const subscriberA = new ConcreteSubscriberA();
const subscriberB = new ConcreteSubscriberB();
const subscriberC = new ConcreteSubscriberC();

publisher.subscribe(subscriberA);
publisher.subscribe(subscriberB);
publisher.subscribe(subscriberC);

publisher.someBusinessRule();

publisher.unsubscribe(subscriberC);

publisher.someBusinessRule();
