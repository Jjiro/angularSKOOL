import { Component, OnInit } from '@angular/core';
import { TeacherService } from './data/teacher.service';
import { Teacher } from './model/teacher';
import { Utils } from '../commons/utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers = [];

  constructor(private teacherService: TeacherService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe((data: any[]) => {
      this.teachers = data;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'teacherModalLabel'});
  }

  onSubmit(f) {
    const utilsInstance = new Utils();
    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.teacherService.createTeacher(new Teacher(f.value.name, new Date(joinDateString),
      utilsInstance.getSchoolName(f.value.school), this.getSpecializedFields(f.value.fields), f.value.isactive === true));

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


