const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

global.requestAnimationFrame = callback => {
    setTimeout(callback, 0)
}
enzyme.configure({ adapter: new Adapter() });