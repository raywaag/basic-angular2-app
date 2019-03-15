import { Component } from '@angular/core';

@Component({
  selector: 'write',
  template: `
  <h1>Write a story</h1>
  <p>Change this text</p>
  <form>
    <input />
  </form>
  `,
})
export class WriteComponent  {
  story: string;

}
