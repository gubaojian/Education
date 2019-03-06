export const classopt = [
    {
      label: '高一',
      items: [
        { label: '东-高一(01)', value: '926' },
        { label: '东-高一(02)', value: '927' },
        { label: '东-高一(03)', value: '928' },
        { label: '东-高一(04)', value: '929' },
        { label: '东-高一(05)', value: '930' },
        { label: '东-高一(06)', value: '931' },
        { label: '东-高一(07)', value: '932' },
        { label: '东-高一(08)', value: '933' },

        { label: '白-高一(01)', value: '934' },
        { label: '白-高一(02)', value: '935' },
        { label: '白-高一(03)', value: '936' },
        { label: '白-高一(04)', value: '937' },
        { label: '白-高一(05)', value: '938' },
        { label: '白-高一(06)', value: '939' },
        { label: '白-高一(07)', value: '940' },
        { label: '白-高一(08)', value: '941' },

        { label: '东-高一(09)-IB', value: '942' },
        { label: '东-高一(10)-IB', value: '943' },
        { label: '高一未分班', value: '944' },
      ]
    },
    {
      label: '高二',
      items: [
        { label: '白-高二(01)', value: '901' },
        { label: '白-高二(02)', value: '902' },
        { label: '白-高二(03)', value: '903' },
        { label: '白-高二(04)', value: '904' },
        { label: '白-高二(05)', value: '905' },
        { label: '白-高二(06)', value: '906' },
        { label: '白-高二(07)', value: '907' },
        { label: '白-高二(08)', value: '908' },
        { label: '白-高二(09)', value: '909' },
        { label: '白-高二(10)', value: '910' },
        { label: '白-高二(11)', value: '911' },
        { label: '白-高二(12)', value: '912' },
        { label: '高二(13)IB', value: '913' },
        { label: '高二未分班', value: '945' },
      ]
    },
    {
      label: '高三',
      items: [
        { label: '高三(01)', value: '921' },
        { label: '高三(02)', value: '916' },
        { label: '高三(03)', value: '917' },
        { label: '高三(04)', value: '918' },
        { label: '高三(05)', value: '922' },
        { label: '高三(06)', value: '924' },
        { label: '高三(07)', value: '919' },
        { label: '高三(08)', value: '920' },
        { label: '高三(09)', value: '923' },
        { label: '高三(10)', value: '925' },
        { label: '高三(11)IB', value: '914' },
        { label: '高三(12)IB', value: '915' },
        { label: '高三未分班', value: '947' },
      ]
    }
  ]

export interface IStudent {
    id: string;
    name: string;
    sex: string;
    nation: string;
    bornDate: string;
    className: string;
    nativePlace: string;
    residenceType: string;
    policy: string;
    classId: string;
    classTerm: string;
    liveAtSchool: string;
    leaveSchool: string;
    liveRoomNo: string;
    optionCourse:string[];
}

export interface ITeacher{
    id:string;
    name:string;
    term:string;
    classId:string;
    className:string;
    graName:string;
    subId:string;
    subName:string;
}

export interface IConsumption {
    dealTime: string;
    dealTimeYear: string;
    dealTimeMonth: string;
    dealTimeDay: string;
    dealTimeHour: number;
    monDeal: number;
    studentID: string;
    accName: string;
    perSex: string;
}

export interface IScore {
    id: string;
    number: string;
    numberName: string;
    subId: string;
    subName: string;
    term: string;
    type: string;
    sdate: string;
    sdateYear: string;
    sdateMonth: string;
    sdateDay: string;
    studentId: string;
    score: number;
    zScore: string;
    tScore: number;
    dengdi: number;
}

export interface IKaoqin {
    id: string;
    term: string;
    recDateTime: string;
    recDateTimeYear: string;
    recDateTimeMonth: string;
    recDateTimeDay: string;
    recDateTimeHour: string;
    controllerID: string;
    controllerName: string;
    detailId: string;
    studentID: string;
    studentName: string;
    className: string;
    classId: string;
}

export interface IStudentInfo {
    baseInfo: IStudent;
    consumptions: IConsumption[];
    kaoqins: IKaoqin[];
    chengjis: IScore[];
    consumptionCnt: number;
    chengjiCnt: number;
    teachers:ITeacher[];
}

export interface IGroupInfo {
    maleGrade1: number;
    femaleGrade1: number;
    maleGrade2: number;
    femaleGrade2: number;
    maleGrade3: number;
    femaleGrade3: number;
    maleTotal: number;
    femaleTotal: number;
    geoOptions: { name: string, value: number }[];
    geoJson:any;
}

export interface ICourse {
    selectionCourseCnt: { name: string, value: number }[];
    selectionCourseCombineCnt: { name: string, value: number }[];
}