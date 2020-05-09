import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from '../commons/utils';
import { StudentService } from './data/student.service';
import { Student } from './model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];

  constructor(private studentService: StudentService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'studentModalLabel'});
  }

  onSubmit(f) {
    const utilsInstance = new Utils();
    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.studentService.createStudent(new Student(f.value.name, new Date(joinDateString),
       f.value.isactive === true, utilsInstance.getSchoolName(f.value.school), f.value.grade));

    this.modalService.dismissAll();
    setTimeout('location.reload();', 2000);
  }

  getSpecializedFields(fieldsArr) {
    const result = [];

    for (const field of fieldsArr) {
      switch (field) {
        case 'mathematics':
          result.push('Mathematics');
          break;
        case 'english':
          result.push('English');
          break;
        case 'history':
          result.push('History');
          break;
        case 'physics':
          result.push('Physics');
          break;
        case 'chemistry':
          result.push('Chemistry');
          break;
        case 'biology':
          result.push('Biology');
          break;
      }
    }
    return result;
  }

}
