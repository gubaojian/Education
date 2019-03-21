import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IStudent, IClassInfo, ITeacher } from 'src/app/Education.model';
import { HomeService } from '../../Home.service';
import { SexRatePieOption, regionMapOptions } from '../../GraphOption/StudentGraphOption'

@Component({
  templateUrl: 'ClassOverview.html',
})
export class ClassOverviewComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: HomeService) { }

  public QueryResult: IStudent[] = [];
  public StudentCnt: number;
  public Teachers: ITeacher[] = [];
  public ClassName: string;
  mSexRate = SexRatePieOption;
  NativePlaceRegionOptions = regionMapOptions;

  ngOnInit(): void {
    this.QueryResult = this.service.CurrentClassInfo;
    this.StudentCnt = this.QueryResult.length;
    this.ClassName = this.QueryResult[0].className;
    this.route.data
      .subscribe((data: { classinfo: IClassInfo }) => {
        this.Teachers = data.classinfo.teachers;
        this.mSexRate.title.text = "男女比例";
        this.mSexRate.series[0].data[0].value = data.classinfo.maleCnt;
        this.mSexRate.series[0].data[1].value = data.classinfo.femaleCnt;
        this.NativePlaceRegionOptions.series[0].data = data.classinfo.geoOptions;
      });
  }
  onRowSelect(event: { data: IStudent; }) {
    this.router.navigate(['student/overview', event.data.id]);
  }
  JumpToTeacher(teacherid: string) {
    this.router.navigate(['teacher/overview', teacherid]);
  }
}
