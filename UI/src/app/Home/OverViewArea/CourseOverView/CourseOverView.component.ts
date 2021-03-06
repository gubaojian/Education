import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/Home/Common/Education.model';
import { CommonFunction } from '../../Common/common'
import {
  CourseSelectCntOption, CourseSelectTwoCntOption, CourseSelectThreeCntOption,
  CourseSelectRadarGraphOption, SelectCourseSankeyOption, ScoreRadarGraphOption
} from '../../GraphOption/ScoreOption'

@Component({
  templateUrl: 'CourseOverView.html',
})
export class CourseOverViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  //三维散点图
  ThreeCourseOption3D = {
    // 需要注意的是我们不能跟 grid 一样省略 grid3D
    grid3D: {
      viewControl: {
        // 使用正交投影。
        projection: 'orthographic'
      }
    },
    visualMap: {
      max: 60,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      },
      show: false
    },
    // 默认情况下, x, y, z 分别是从 0 到 1 的数值轴
    xAxis3D: { type: 'category', name: "课程1", data: ['物理', '化学', '生物', '地理', '政治', '技术', '历史'] },
    yAxis3D: { type: 'category', name: "课程2", data: ['物理', '化学', '生物', '地理', '政治', '技术', '历史'] },
    zAxis3D: { type: 'category', name: "课程3", data: ['物理', '化学', '生物', '地理', '政治', '技术', '历史'] },
    series: [{
      type: 'scatter3D',
      symbolSize: (dataItem: number) => {
        return dataItem[3];
      },
      label: {
        formatter: '{c}'
      },
      data: [

      ]
    }]
  };


  //三维柱状图
  TwoCourseOption3D = {
    xAxis3D: {
      type: 'category',
      name: "课程1",
      data: []
    },
    yAxis3D: {
      type: 'category',
      name: "课程2",
      data: []
    },
    zAxis3D: {
      type: 'value',
      name: "人数"
    },
    grid3D: {
      viewControl: {
        // 使用正交投影。
        projection: 'orthographic'
      },
      boxWidth: 200,
      boxDepth: 80,
      light: {
        main: {
          intensity: 1.2
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    visualMap: {
      max: 80,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      },
      show: false
    },
    series: [
      {
        type: 'bar3D',
        data: [],
        shading: 'color',
        stack: "stack",
        label: {
          formatter: '{c}'
        },
        itemStyle: {
          opacity: 0.8
        }
      },
      {
        type: 'bar3D',
        data: [],
        shading: 'color',
        stack: "stack",
        label: {
          formatter: '{c}'
        },
        itemStyle: {
          opacity: 0.8
        }
      }
    ]
  }


  //单科图
  mCourseSelectRadarGraphOption = CommonFunction.clone(ScoreRadarGraphOption);
  mMaleCourseSelectRadarGraphOption = CommonFunction.clone(CourseSelectRadarGraphOption);
  mFeMaleCourseSelectRadarGraphOption = CommonFunction.clone(CourseSelectRadarGraphOption);

  mCourseSelectCntOption = CommonFunction.clone(CourseSelectCntOption);
  mMaleCourseSelectCntOption = CommonFunction.clone(CourseSelectCntOption);
  mFeMaleCourseSelectCntOption = CommonFunction.clone(CourseSelectCntOption);

  SingleCoursePercent: { name: string, value: string }[];
  MaleSingleCoursePercent: { name: string, value: string }[];
  FeMaleSingleCoursePercent: { name: string, value: string }[];

  CourseSelectCntChart: any;
  onCourseSelectCntChartInit(event: any) {
    this.CourseSelectCntChart = event;
  }

  MaleCourseSelectCntChart: any;
  onMaleCourseSelectCntChartInit(event: any) {
    this.MaleCourseSelectCntChart = event;
  }

  FeMaleCourseSelectCntChart: any;
  onFeMaleCourseSelectCntChartInit(event: any) {
    this.FeMaleCourseSelectCntChart = event;
  }

  CourseSelectRadarGraphChart: any;
  onCourseSelectRadarGraphChartInit(event: any) {
    this.CourseSelectRadarGraphChart = event;
  }

  MaleCourseSelectRadarGraphChart: any;
  onMaleCourseSelectRadarGraphChartInit(event: any) {
    this.MaleCourseSelectRadarGraphChart = event;
  }

  FeMaleCourseSelectRadarGraphChart: any;
  onFeMaleCourseSelectRadarGraphChartInit(event: any) {
    this.FeMaleCourseSelectRadarGraphChart = event;
  }


  //两门课程
  mCourseSelectTwoCntOption = CommonFunction.clone(CourseSelectTwoCntOption);
  mCourseSelectTwoPercentOption = CommonFunction.clone(CourseSelectTwoCntOption);
  mTwoCourseOption3D = this.TwoCourseOption3D;

  //三门课程
  ThreeCoursePercent: { name: string, value: number }[];
  mCourseSelectThreeCntOption = CommonFunction.clone(CourseSelectThreeCntOption);
  mThreeCourseOption3D = this.ThreeCourseOption3D;

  //桑吉图
  mSelectCourseSankeyOption = CommonFunction.clone(SelectCourseSankeyOption);




  CourseSelectTwoCntChart: any;
  onCourseSelectTwoCntChartInit(event: any) {
    this.CourseSelectTwoCntChart = event;
  }

  CourseSelectTwoPercentChart: any;
  onCourseSelectTwoPercentChartInit(event: any) {
    this.CourseSelectTwoPercentChart = event;
  }

  CourseSelectThreeCntChart: any;
  onCourseSelectThreeCntChartInit(event: any) {
    this.CourseSelectThreeCntChart = event;
  }


  CourseSelectThree3DChart: any;
  onCourseSelectThree3DChartInit(event: any) {
    this.CourseSelectThree3DChart = event;
  }

  SelectCourseSankeyChart: any;
  onSelectCourseSankeyChartInit(event: any) {
    this.SelectCourseSankeyChart = event;
  }

  CourseSelectTwoCnt3DChar: any;
  onCourseSelectTwoCnt3DChartInit(event: any) {
    this.CourseSelectTwoCnt3DChar = event;
  }


  SaveTwoCourseOption3DImage() {
    CommonFunction.SaveChartImage(this.CourseSelectTwoCnt3DChar, "两门课程选课人数（性别堆叠图）");
  }

  SaveThreeCourseOption3DImage() {
    CommonFunction.SaveChartImage(this.CourseSelectThree3DChart, "三门课程选课人数");
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { courseInfo: ICourse[] }) => {
        data.courseInfo[0].selectionCourseCnt.sort((x, y) => { return y.value - x.value; });
        data.courseInfo[1].selectionCourseCnt.sort((x, y) => { return y.value - x.value; });
        data.courseInfo[2].selectionCourseCnt.sort((x, y) => { return y.value - x.value; });

        this.SingleCoursePercent = data.courseInfo[0].selectionCourseCnt.map(x => {
          return { 'name': x.name, 'value': (x.value * 100 / data.courseInfo[0].studentCnt).toFixed(2) + "%" }
        });
        this.MaleSingleCoursePercent = data.courseInfo[1].selectionCourseCnt.map(x => {
          return { 'name': x.name, 'value': (x.value * 100 / data.courseInfo[1].studentCnt).toFixed(2) + "%" }
        });
        this.FeMaleSingleCoursePercent = data.courseInfo[2].selectionCourseCnt.map(x => {
          return { 'name': x.name, 'value': (x.value * 100 / data.courseInfo[2].studentCnt).toFixed(2) + "%" }
        });


        this.mCourseSelectRadarGraphOption.title.text = "全体雷达图";
        this.mMaleCourseSelectRadarGraphOption.title.text = "男生雷达图";
        this.mFeMaleCourseSelectRadarGraphOption.title.text = "女生雷达图";

        this.mCourseSelectCntOption.title.text = "全体柱状图";
        this.mMaleCourseSelectCntOption.title.text = "男生柱状图";
        this.mFeMaleCourseSelectCntOption.title.text = "女生柱状图";


        let MaleData = [];
        let FemaleDate = [];
        data.courseInfo[0].selectionCourseCnt.forEach(stardard => {

          data.courseInfo[1].selectionCourseCnt.forEach(
            male => {
              if (male.name == stardard.name) {
                MaleData.push(male.value);
              }
            }
          );

          data.courseInfo[2].selectionCourseCnt.forEach(
            female => {
              if (female.name == stardard.name) {
                FemaleDate.push(female.value);
              }
            }
          );
        });



        this.mCourseSelectRadarGraphOption.radar.indicator =
          data.courseInfo[0].selectionCourseCnt.map(x => { return { 'name': x.name, 'max': 160 } });
        this.mCourseSelectRadarGraphOption.series[0].data[0].value = MaleData;
        this.mCourseSelectRadarGraphOption.series[0].data[0].name = "男生";

        this.mCourseSelectRadarGraphOption.series[0].data[1].value = FemaleDate;
        this.mCourseSelectRadarGraphOption.series[0].data[1].name = "女生";
        this.mCourseSelectRadarGraphOption.legend.data = ["男生", "女生"];

        this.mCourseSelectCntOption.xAxis.data = data.courseInfo[0].selectionCourseCnt.map(x => x.name);
        this.mCourseSelectCntOption.toolbox.feature.magicType.type = ['line', 'bar', 'stack', 'tiled'];
        this.mCourseSelectCntOption.series[0] = {
          label: {
            normal: {
              show: true,
              formatter: '{b}\n{c}'
            }
          },
          markLine: null,
          stack: '选课人数',
          name: "男生",
          data: MaleData,
          type: 'bar'
        };
        this.mCourseSelectCntOption.series[1] = {
          label: {
            normal: {
              show: true,
              formatter: '{b}\n{c}'
            }
          },
          markLine: null,
          stack: '选课人数',
          name: "女生",
          data: FemaleDate,
          type: 'bar'
        }
        this.mCourseSelectCntOption["legend"] = { show: true, data: ["男生", "女生"] };


        this.mMaleCourseSelectCntOption.xAxis.data = data.courseInfo[1].selectionCourseCnt.map(x => x.name);
        this.mMaleCourseSelectCntOption.series[0].data = data.courseInfo[1].selectionCourseCnt.map(x => x.value);
        this.mMaleCourseSelectRadarGraphOption.radar.indicator =
          data.courseInfo[1].selectionCourseCnt.map(x => { return { 'name': x.name, 'max': data.courseInfo[1].studentCnt } });
        this.mMaleCourseSelectRadarGraphOption.series[0].data[0].value = data.courseInfo[1].selectionCourseCnt.map(x => x.value);


        this.mFeMaleCourseSelectCntOption.xAxis.data = data.courseInfo[2].selectionCourseCnt.map(x => x.name);
        this.mFeMaleCourseSelectCntOption.series[0].data = data.courseInfo[2].selectionCourseCnt.map(x => x.value);
        this.mFeMaleCourseSelectRadarGraphOption.radar.indicator =
          data.courseInfo[2].selectionCourseCnt.map(x => { return { 'name': x.name, 'max': data.courseInfo[2].studentCnt } });
        this.mFeMaleCourseSelectRadarGraphOption.series[0].data[0].value = data.courseInfo[2].selectionCourseCnt.map(x => x.value);

        //两门课程
        var Course1 = ['地理', '化学', '技术', '历史', '生物', '物理'];
        var Course2 = ['化学', '技术', '历史', '生物', '物理', '政治'];
        this.mCourseSelectTwoCntOption.xAxis.data = Course1;
        this.mCourseSelectTwoCntOption.yAxis.data = Course2;
        this.mCourseSelectTwoPercentOption.xAxis.data = Course1;
        this.mCourseSelectTwoPercentOption.yAxis.data = Course2;

        let CombineData = [];
        let CombineDataPercent = [];
        let Combine3DMale = [];
        let Combine3DFeMale = [];

        for (let index = 0; index < 6; index++) {
          for (let index2 = 0; index2 < 6; index2++) {
            let c1 = Course1[index];
            let c2 = Course2[index2];
            let key = c1 + '/' + c2;
            let combine = data.courseInfo[0].selectionTwoCourseCnt.find(x => x.name == key)
            if (combine === undefined) {
              CombineData.push([index, index2, "-"]);
              CombineDataPercent.push([index, index2, "-"]);
            } else {
              CombineData.push([index, index2, combine.value]);
              CombineDataPercent.push([index, index2, CommonFunction.roundvalue(combine.value * 100 / data.courseInfo[0].studentCnt)]);
            }

            let combinemale = data.courseInfo[1].selectionTwoCourseCnt.find(x => x.name == key)
            let combinefemale = data.courseInfo[2].selectionTwoCourseCnt.find(x => x.name == key)
            if (combinemale === undefined) {
              //Combine3DMale.push([Course1[index], Course2[index2], 0]);
            } else {
              Combine3DMale.push([Course1[index], Course2[index2], combinemale.value]);
            }
            if (combinefemale === undefined) {
              //Combine3DFeMale.push([Course1[index], Course2[index2], 0]);
            } else {
              Combine3DFeMale.push([Course1[index], Course2[index2], combinefemale.value]);
            }

          }
        }
        this.mCourseSelectTwoCntOption.series[0].data = CombineData;
        this.mCourseSelectTwoPercentOption.title.text = "高考七选三（两门百分比）"
        this.mCourseSelectTwoPercentOption.visualMap.max = 50;
        this.mCourseSelectTwoPercentOption.series[0].data = CombineDataPercent;

        this.mTwoCourseOption3D.xAxis3D.data = Course1;
        this.mTwoCourseOption3D.yAxis3D.data = Course2;
        this.mTwoCourseOption3D.series[0].data = Combine3DMale;
        this.mTwoCourseOption3D.series[1].data = Combine3DFeMale;

        //三门课程
        data.courseInfo[0].selectionThreeCourseCnt.sort((x, y) => { return y.value - x.value; });
        this.mCourseSelectThreeCntOption.xAxis.data = data.courseInfo[0].selectionThreeCourseCnt.map(
          x => { let names = x.name.split("/"); return names[0] + "\n" + names[1] + "\n" + names[2] }
        );
        this.mCourseSelectThreeCntOption.series[0].data = data.courseInfo[0].selectionThreeCourseCnt.map(x => x.value);
        this.ThreeCoursePercent = data.courseInfo[0].selectionThreeCourseCnt.map(x => {
          return { 'name': x.name, 'value': CommonFunction.roundvalue(x.value * 100 / data.courseInfo[0].studentCnt) }
        });

        this.mThreeCourseOption3D.series[0].data = data.courseInfo[0].selectionThreeCourseCnt.map(
          x => [x.name.split("/")[0], x.name.split("/")[1], x.name.split("/")[2], x.value]
        );

        //桑基图
        //注意：重复数据会导致桑基图出现错误
        this.mSelectCourseSankeyOption.series.data = [];
        this.mSelectCourseSankeyOption.series.links = [];
        data.courseInfo[0].selectionCourseCnt.map(x => { return { 'name': x.name } }).forEach(element => {
          this.mSelectCourseSankeyOption.series.data.push(element);
        });
        data.courseInfo[0].selectionTwoCourseCnt.map(x => { return { 'name': x.name } }).forEach(element => {
          this.mSelectCourseSankeyOption.series.data.push(element);
        });
        data.courseInfo[0].selectionThreeCourseCnt.map(x => { return { 'name': x.name } }).forEach(element => {
          this.mSelectCourseSankeyOption.series.data.push(element);
        });
        //console.log(this.mSelectCourseSankeyOption.series.data);
        //第一层Link
        data.courseInfo[0].selectionCourseCnt.map(x => x.name).forEach(
          one => {
            data.courseInfo[0].selectionTwoCourseCnt.forEach(
              two => {
                if (two.name.indexOf(one) !== -1) {
                  this.mSelectCourseSankeyOption.series.links.push({ 'source': one, 'target': two.name, 'value': two.value });
                }
              }
            )
          }
        )

        //第二层Link
        data.courseInfo[0].selectionTwoCourseCnt.map(x => x.name).forEach(
          two => {
            data.courseInfo[0].selectionThreeCourseCnt.forEach(
              three => {
                let first = two.split("/")[0];
                let second = two.split("/")[1];
                if (three.name.indexOf(first) !== -1 && three.name.indexOf(second) !== -1) {
                  this.mSelectCourseSankeyOption.series.links.push({ 'source': two, 'target': three.name, 'value': three.value });
                }
              }
            )
          }
        )

        if (this.CourseSelectRadarGraphChart !== undefined) {
          this.CourseSelectRadarGraphChart.setOption(this.mCourseSelectRadarGraphOption);
        }
        if (this.CourseSelectCntChart !== undefined) {
          this.CourseSelectCntChart.setOption(this.mCourseSelectCntOption);
        }

        if (this.MaleCourseSelectRadarGraphChart !== undefined) {
          this.MaleCourseSelectRadarGraphChart.setOption(this.mMaleCourseSelectRadarGraphOption);
        }
        if (this.MaleCourseSelectCntChart !== undefined) {
          this.MaleCourseSelectCntChart.setOption(this.mMaleCourseSelectCntOption);
        }

        if (this.FeMaleCourseSelectRadarGraphChart !== undefined) {
          this.FeMaleCourseSelectRadarGraphChart.setOption(this.mFeMaleCourseSelectRadarGraphOption);
        }
        if (this.FeMaleCourseSelectCntChart !== undefined) {
          this.FeMaleCourseSelectCntChart.setOption(this.mFeMaleCourseSelectCntOption);
        }



        if (this.CourseSelectTwoCntChart !== undefined) {
          this.CourseSelectTwoCntChart.setOption(this.mCourseSelectTwoCntOption);
        }
        if (this.CourseSelectTwoCnt3DChar !== undefined) {
          this.CourseSelectTwoCnt3DChar.setOption(this.mTwoCourseOption3D);
        }
        if (this.CourseSelectTwoPercentChart !== undefined) {
          this.CourseSelectTwoPercentChart.setOption(this.mCourseSelectTwoPercentOption);
        }
        if (this.CourseSelectThreeCntChart !== undefined) {
          this.CourseSelectThreeCntChart.setOption(this.mCourseSelectThreeCntOption);
        }
        if (this.CourseSelectThree3DChart !== undefined) {
          this.CourseSelectThree3DChart.setOption(this.mThreeCourseOption3D);
        }
        if (this.SelectCourseSankeyChart !== undefined) {
          this.SelectCourseSankeyChart.setOption(this.mSelectCourseSankeyOption);
        }


      });
  }

}
