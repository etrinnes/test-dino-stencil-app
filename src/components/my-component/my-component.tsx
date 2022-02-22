import { Component, Prop, h, Watch, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() userName: string = "Pepper";
  // private _dinosaur: Dinosaur = {name: "", description: ""};

  // The spread operator should also be used to update objects. 
  // As with arrays, mutating an object will not trigger a view update in Stencil, 
  // but returning a new copy of the object will.

  @State() dinosaur: Dinosaur = {name: "", description: ""};

  @Watch('dinosaur')
  watchStateHandler(newValue: Dinosaur, oldValue: Dinosaur){
    console.log('the new value of dinosaur is ' + JSON.stringify(newValue));
  }

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  private getUsername(): string {
    return this.userName;
  }

  private getDinosaurName(): string{
    return this.dinosaur?.name;
  }

  private getDinosaurDescription(): string{
    return this.dinosaur?.description;
  }

  private getDinosaur(): void {
    fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs/random')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        this.dinosaur = {name: data.Name, description: data.Description} as Dinosaur;
      });
  }

  /*
    In order for the component to render something to the screen, 
    we must declare a render function that returns JSX.
    The quick idea is that our render function needs to 
    return a representation of the HTML we want to push to the DOM.
  */
  render() {
    return <div>
      <h3 id="userName">Hello, {this.getUsername()}!</h3>
      {/* Arrow function used below to preserve this */}
      {/* https://stenciljs.com/docs/templating-jsx/#handling-user-input */}
      {/* May not want to use arrow functions - could have performance issues with function recreated on each render */}
      <button id="clickedButton" onClick={() => this.getDinosaur()}>Give Me a Random Dinosaur</button>
      <h2>Name</h2>
      <p id='dinoName'>{this.getDinosaurName()}</p>
      <h2>Description</h2>
      <p id='dinoDescription'>{this.getDinosaurDescription()}</p>
    </div>;
  }
}

class Dinosaur{
  name: string;
  description: string;
}
