import { Component } from '@angular/core';

export interface MyUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  role: string;
}

@Component({
  selector: 'app-exercise5',
  imports: [],
  templateUrl: './exercise5.html',
  standalone: true,
  styleUrl: './exercise5.scss'
})
export class Exercise5 {
  protected readonly usersRaw: MyUser[] = [
    {
      id: 1,
      firstName: 'Emily',
      lastName: 'Johnson',
      age: 28,
      gender: 'female',
      role: 'admin'
    },
    {
      id: 2,
      firstName: 'Michael',
      lastName: 'Williams',
      age: 35,
      gender: 'male',
      role: 'admin'
    },
    {
      id: 3,
      firstName: 'Sophia',
      lastName: 'Brown',
      age: 42,
      gender: 'female',
      role: 'admin'
    },
    {
      id: 4,
      firstName: 'James',
      lastName: 'Davis',
      age: 45,
      gender: 'male',
      role: 'admin'
    },
    {
      id: 5,
      firstName: 'Emma',
      lastName: 'Miller',
      age: 30,
      gender: 'female',
      role: 'admin'
    },
    {
      id: 6,
      firstName: 'Olivia',
      lastName: 'Wilson',
      age: 22,
      gender: 'female',
      role: 'moderator'
    },
    {
      id: 7,
      firstName: 'Alexander',
      lastName: 'Jones',
      age: 38,
      gender: 'male',
      role: 'moderator'
    },
    {
      id: 8,
      firstName: 'Ava',
      lastName: 'Taylor',
      age: 27,
      gender: 'female',
      role: 'moderator'
    },
    {
      id: 9,
      firstName: 'Ethan',
      lastName: 'Martinez',
      age: 33,
      gender: 'male',
      role: 'moderator'
    },
    {
      id: 10,
      firstName: 'Isabella',
      lastName: 'Anderson',
      age: 31,
      gender: 'female',
      role: 'moderator'
    }
  ];
  protected users: MyUser[] = [...this.usersRaw];
  protected readonly fields: string[] = Object.keys(this.usersRaw[0]);

  protected onSelectionChange(event: any): void {
    if (event.target.value) {
      const selectedField: string = event.target.value;
      this.sortArrayOfObjects(this.users, selectedField);
    }
  }

  private sortArrayOfObjects(theArray: any, key: string): void {
    theArray.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB);
      } else {
        return valA - valB;
      }
    });
  }
}
