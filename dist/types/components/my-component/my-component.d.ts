export declare class MyComponent {
  userName: string;
  dinosaur: Dinosaur;
  watchStateHandler(newValue: Dinosaur, oldValue: Dinosaur): void;
  private getUsername;
  private getDinosaurName;
  private getDinosaurDescription;
  private getDinosaur;
  render(): any;
}
declare class Dinosaur {
  name: string;
  description: string;
}
export {};
