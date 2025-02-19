import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://img2.rtve.es/i/?w=1600&i=1614352806474.png" alt="" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero
      voluptates hic doloribus. Debitis repellendus, autem qui maiores impedit
      iste repudiandae ut doloribus culpa illum numquam vitae odit laboriosam
      fuga.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
