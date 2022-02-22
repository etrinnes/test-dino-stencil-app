import { r as registerInstance, h } from './index-19bb2f26.js';

const myComponentCss = ":host{display:block}div{color:#007DE3;background-color:#E5F3FF;font-family:sans-serif;padding:20px}p{color:#007DE3;font-size:20px}button{padding:10px;font-size:20px;border-radius:8px;font-family:sans-serif;background:#007DE3;color:white}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.userName = "Pepper";
    // private _dinosaur: Dinosaur = {name: "", description: ""};
    // The spread operator should also be used to update objects. 
    // As with arrays, mutating an object will not trigger a view update in Stencil, 
    // but returning a new copy of the object will.
    this.dinosaur = { name: "", description: "" };
  }
  watchStateHandler(newValue, oldValue) {
    console.log('the new value of dinosaur is ' + JSON.stringify(newValue));
  }
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }
  getUsername() {
    return this.userName;
  }
  getDinosaurName() {
    var _a;
    return (_a = this.dinosaur) === null || _a === void 0 ? void 0 : _a.name;
  }
  getDinosaurDescription() {
    var _a;
    return (_a = this.dinosaur) === null || _a === void 0 ? void 0 : _a.description;
  }
  getDinosaur() {
    fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs/random')
      .then(response => response.json())
      .then((data) => {
      console.log(data);
      this.dinosaur = { name: data.Name, description: data.Description };
    });
  }
  /*
    In order for the component to render something to the screen,
    we must declare a render function that returns JSX.
    The quick idea is that our render function needs to
    return a representation of the HTML we want to push to the DOM.
  */
  render() {
    return h("div", null, h("h3", { id: "userName" }, "Hello, ", this.getUsername(), "!"), h("button", { id: "clickedButton", onClick: () => this.getDinosaur() }, "Give Me a Random Dinosaur"), h("h2", null, "Name"), h("p", { id: 'dinoName' }, this.getDinosaurName()), h("h2", null, "Description"), h("p", { id: 'dinoDescription' }, this.getDinosaurDescription()));
  }
  static get watchers() { return {
    "dinosaur": ["watchStateHandler"]
  }; }
};
class Dinosaur {
}
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
