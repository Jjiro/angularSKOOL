import {Utils} from '../../commons/utils';

export class Teacher {

  teacherId: string;
  name: string;
  joinedDate: Date;
  school: string;
  specialistFields: string[];
  isActive: boolean;

  constructor(name: string, joinedDate: Date, school: string, specialistFields: string[], isActive: boolean) {
    const utilInstance = new Utils();
    this.teacherId = 'T' + utilInstance.getRandomID();
    this.name = name;
    this.joinedDate = joinedDate;
    this.school = school;
    this.specialistFields = specialistFields;
    this.isActive = isActive;
  }

}
