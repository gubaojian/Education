import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ITeacher, classopt } from '../Education.model';
import { CommonFunction } from '../common';
import { SelectItem } from 'primeng/api';
import { ErrorMessageDialogComponent } from '../error-message-dialog/error-message-dialog.component';

@Component({
  selector: 'app-classPicker',
  templateUrl: './classPicker.component.html'
})
export class ClassPickerComponent {
  @ViewChild(ErrorMessageDialogComponent)
  private errMsgDialog: ErrorMessageDialogComponent;

  @Output() pick: EventEmitter<any> = new EventEmitter();

  public display = false;

  public Classes: SelectItem[] = [];

  public selectClass: SelectItem;

  Gradelist = [
    { label: '全部', value: '' },
    { label: '高一', value: '高一' },
    { label: '高二', value: '高二' },
    { label: '高三', value: '高三' }
  ]
  SelectGrade = '';

  Campus = [
    { label: '全部', value: '' },
    { label: '白杨', value: '白' },
    { label: '东部', value: '东' }
  ];
  selectedCampus: string = '';

  Addtional = [
    { label: '全部', value: '' },
    { label: '国际', value: 'IB' },
    { label: '未分班', value: '未分班' }
  ];
  selectedAddtional: string = '';

  FullClass: SelectItem[] = [];

  constructor(
    private commonfunction: CommonFunction
  ) {

  }

  RefreshList() {
    //校区的选择
    let filtedClass = this.FullClass;
    if (this.selectedCampus === "白") {
      filtedClass = this.FullClass.filter(x => x.label.indexOf("东") === -1);
    }
    if (this.selectedCampus === "东") {
      filtedClass = this.FullClass.filter(x => x.label.indexOf("东") !== -1);
    }
    if (this.SelectGrade !== "") {
      filtedClass = filtedClass.filter(x => x.label.indexOf(this.SelectGrade) !== -1);
    }
    if (this.selectedAddtional !== "") {
      filtedClass = filtedClass.filter(x => x.label.indexOf(this.selectedAddtional) !== -1);
    }
    this.Classes = filtedClass;
  }

  show() {
    CommonFunction.clone(classopt).forEach(grade => {
      grade.items.forEach(classname => {
        this.FullClass.push(classname);
      });
    });
    this.display = true;
    this.selectClass = null;
    this.Classes = this.FullClass;
  }

  submit() {
    this.display = false;
    this.pick.emit(this.selectClass);
  }

  close() {
    this.display = false;
  }

  query() {

  }
  onRowSelect() {
    this.display = false;
    this.pick.emit(this.selectClass);
  }
}