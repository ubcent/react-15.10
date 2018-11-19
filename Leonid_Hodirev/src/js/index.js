import Human from './human';
import Developer from "./developer";

const h = new Human('Dmitry', 'Bondarchuk');
const d = new Developer('Dmitry', 'Bondarchuk', 'Dmitrievich');
console.log(h.sayHi());
console.log(d.getDeveloper());