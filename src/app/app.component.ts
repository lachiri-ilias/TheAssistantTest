import { Component } from '@angular/core';
import { HogwartsComponent } from './hogwarts/hogwarts.component';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HogwartsComponent]
})
export class AppComponent {
  title = 'TheAssistantTest';
}
