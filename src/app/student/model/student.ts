import {Utils} from '../../commons/utils';

export class Student {
  studentId: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  grade: number;
​
  constructor(name, joinDate, isActive, school, grade) {
    const utilsInstance = new Utils();
    this.studentId = 'S' + utilsInstance.getRandomID();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.grade = grade;
  }

}

/*export class Student{

  studentId: string;
  name: string;
  joinedDate: Date;
  school: string;
  specialistFields: string[];
  isActive: boolean;

  constructor(name: string, joinedDate: Date, school: string, specialistFields: string[], isActive: boolean) {
    const utilInstance = new Utils();
    this.studentId = 'S' + utilInstance.getRandomID();
    this.name = name;
    this.joinedDate = joinedDate;
    this.school = school;
    this.specialistFields = specialistFields;
    this.isActive = isActive;
  }*/
