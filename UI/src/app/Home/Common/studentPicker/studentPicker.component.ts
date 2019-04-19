import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { IStudent, nationopt, policyopt } from '../Education.model';
import { ErrorMessageDialogComponent } from '../error-message-dialog/error-message-dialog.component';
import { HomeService } from '../Home.service';

@Component({
  selector: 'app-studentPicker',
  templateUrl: './studentPicker.component.html'
})
export class StudentPickerComponent implements OnInit {

  @ViewChild(ErrorMessageDialogComponent)
  private errMsgDialog: ErrorMessageDialogComponent;

  @Output() pick: EventEmitter<any> = new EventEmitter();

  public display = false;

  public Students: IStudent[] = [];

  public selectStudent: IStudent;

  constructor(
    public service: HomeService
  ) {

  }
  ngOnInit(): void {
    this.roomlist = [];
    for (const key in this.service.SchoolOverview.schoolRooms.baiYangFemale) {
      if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
    }
    for (const key in this.service.SchoolOverview.schoolRooms.baiYangMale) {
      if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
    }
    for (const key in this.service.SchoolOverview.schoolRooms.eastFemale) {
      if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
    }
    for (const key in this.service.SchoolOverview.schoolRooms.eastMale) {
      if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
    }
    this.roomlist.sort();
    this.roomlist = this.roomlist.map(x => { return { 'label': x, 'value': x } });
  }
  show() {
    this.display = true;
    this.selectStudent = null;
    this.Students = [];
  }

  submit() {
    this.display = false;
    this.pick.emit(this.selectStudent);
  }

  close() {
    this.display = false;
  }

  public StudentId: string;
  public RoomNo: string;
  public NationName: string;
  public PolicyName: string;

  public nationlist = nationopt;
  public policylist = policyopt;

  public roomlist = [];

  Campus = [
    { label: '全部', value: '' },
    { label: '白杨', value: '白' },
    { label: '东部', value: '东' }
  ];

  Sexs = [
    { label: '全部', value: '' },
    { label: '男', value: '男' },
    { label: '女', value: '女' }
  ]

  selectedCampus: string = '';
  selectedSex: string = '';

  RoomConditionChange() {
    this.roomlist = [];
    if (this.selectedCampus === '白' || this.selectedCampus === '') {
      if (this.selectedSex === '女' || this.selectedSex === '') {
        for (const key in this.service.SchoolOverview.schoolRooms.baiYangFemale) {
          if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
        }
      }
      if (this.selectedSex === '男' || this.selectedSex === '') {
        for (const key in this.service.SchoolOverview.schoolRooms.baiYangMale) {
          if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
        }
      }
    }
    if (this.selectedCampus === '东' || this.selectedCampus === '') {
      if (this.selectedSex === '女' || this.selectedSex === '') {
        for (const key in this.service.SchoolOverview.schoolRooms.eastFemale) {
          if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
        }
      }
      if (this.selectedSex === '男' || this.selectedSex === '') {
        for (const key in this.service.SchoolOverview.schoolRooms.eastMale) {
          if (this.roomlist.indexOf(key) === -1) this.roomlist.push(key);
        }
      }
    }
    this.roomlist.sort();
    this.roomlist = this.roomlist.map(x => { return { 'label': x, 'value': x } });
    this.RoomNo = '';
    this.Students = [];
  }
  QueryByStudentId() {
    this.service.QueryByStudentId(this.StudentId).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
          this.Students = [];
        } else {
          this.Students = result;
          if (this.Students.length == 1 && this.Students[0].id == this.StudentId) {
            this.selectStudent = this.Students[0];
            this.pick.emit(this.selectStudent);
            this.display = false;
          }
        }
      }
    );
  }

  QueryByNation() {
    this.service.QueryByNation(this.NationName).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
          this.Students = [];
        } else {
          this.Students = result;
        }
      }
    );
  }

  QueryByPolicy() {
    this.service.QueryByPolicy(this.PolicyName).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
          this.Students = [];
        } else {
          this.Students = result;
        }
      }
    );
  }

  QueryByLiveRoomNo() {
    this.service.QueryByLiveRoomNo(this.RoomNo, this.selectedCampus, this.selectedSex).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
          this.Students = [];
        } else {
          this.Students = result;
        }
      }
    );
  }

  onRowSelect() {
    this.display = false;
    this.pick.emit(this.selectStudent);
  }
}
