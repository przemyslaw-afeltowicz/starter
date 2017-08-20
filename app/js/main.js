import { Subject } from 'rxjs/Rx';

let subject = new Subject();

window.setTimeout(() => {
    subject.next();
}, 200);
