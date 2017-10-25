const {Subject} = require('rxjs');

let subject = new Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(2);
subject.next(3);
