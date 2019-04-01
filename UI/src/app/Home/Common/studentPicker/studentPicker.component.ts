import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ITeacher, IStudent, nationopt, policyopt } from '../Education.model';
import { CommonFunction } from '../common';
import { SelectItem } from 'primeng/api';
import { ErrorMessageDialogComponent } from '../error-message-dialog/error-message-dialog.component';
import { HomeService } from '../Home.service';

@Component({
  selector: 'app-studentPicker',
  templateUrl: './studentPicker.component.html'
})
export class StudentPickerComponent {
  @ViewChild(ErrorMessageDialogComponent)
  private errMsgDialog: ErrorMessageDialogComponent;

  @Output() pick: EventEmitter<any> = new EventEmitter();

  public display = false;

  public Students: IStudent[] = [];

  public selectStudent: IStudent;

  constructor(
    private commonfunction: CommonFunction,
    public service: HomeService
  ) {

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

  QueryByStudentId() {
    this.service.QueryByStudentId(this.StudentId).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
        } else {
          this.Students = [result];
        }
      }
    );
  }
  QueryByNation() {
    this.service.QueryByNation(this.NationName).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
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
        } else {
          this.Students = result;
        }
      }
    );
  }
  QueryByLiveRoomNo() {
    this.service.QueryByLiveRoomNo(this.RoomNo).then(
      result => {
        if (result === null) {
          this.errMsgDialog.show("没有找到符合条件的学生！");
        } else {
          this.Students = result;
        }
      }
    );
  }

  onRowSelect(event: { data: IStudent; }) {
    this.display = false;
    this.pick.emit(this.selectStudent);
  }
}