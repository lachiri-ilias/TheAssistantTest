import { Component } from '@angular/core';
import {
    CommonModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  } from '@angular/common';
  import {FormsModule} from '@angular/forms';
  
  import {HOGWARTS} from '../mock-hogwarts';

@Component({
  standalone: true,
  selector: 'app-hogwarts',
  templateUrl: './hogwarts.component.html',
  styleUrls: ['./hogwarts.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe
  ],
})


export class HogwartsComponent {
  hogwarts = HOGWARTS;

    teacher = this.hogwarts.filter(p => p.isTeacher);
    teachers = this.teacher.sort((a, b) => new Date(a.arrivalDate).getTime() - new Date(b.arrivalDate).getTime());

    student = this.hogwarts.filter(p => !p.isTeacher);
    students = this.student.sort((a, b) => {
      if (a.house === b.house) {
        return a.firstName.localeCompare(b.firstName);
      }
      return a.house.localeCompare(b.house); 
    });
    

    getHouseColor(house: string): string {
        const houseColors: {[key: string]: string} = {
            'Gryffindor': '#E9131F',
            'Slytherin': '#18A874',
            'Ravenclaw': '#1D79CD',
            'Hufflepuff': '#C7B514',
        };
        return houseColors[house] || '#e0e0e0';
    }

    calculateStudyYear(arrivalDate: string): string {
      const arrivalYear = new Date(arrivalDate).getFullYear();
      const years = 1991 - arrivalYear;
    
      switch (years) {
        case 0:
          return 'First Year';
        case 1:
          return 'Second Year';
        case 2:
          return 'Third Year';

        default:
          return `${years} Years`;
      }
    }
    
}


