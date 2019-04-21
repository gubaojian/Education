import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommonFunction {

    constructor(
        private http: Http
    ) { }

    public static GetWeatherImageByText(text: string): string {
        if (CommonFunction.IsNullOrEmpty(text)) { return "assets/image/weathy/weathy_01.png" }
        if (text === "阴"){
            return "assets/image/weathy/weathy_02.png"
        }
        if (text === "多云"){
            return "assets/image/weathy/weathy_03.png"
        }
        if (text === "阵雨"){
            return "assets/image/weathy/weathy_08.png"
        }
        if (text === "雨"){
            return "assets/image/weathy/weathy_08.png"
        }
        if (text.endsWith("小雨")){
            return "assets/image/weathy/weathy_07.png"
        }
        if (text.endsWith("中雨")){
            return "assets/image/weathy/weathy_08.png"
        }
        if (text.endsWith("大雨")){
            return "assets/image/weathy/weathy_09.png"
        }
        if (text === "雪"){
            return "assets/image/weathy/weathy_12.png"
        }
        if (text.endsWith("小雪")){
            return "assets/image/weathy/weathy_11.png"
        }
        if (text.endsWith("中雪")){
            return "assets/image/weathy/weathy_12.png"
        }
        if (text.endsWith("大雪")){
            return "assets/image/weathy/weathy_13.png"
        }
        return "assets/image/weathy/weathy_01.png";
    }


    /* 工具类 */
    public static checkNumbericRanger(text: string, max: number, min: number): number {
        if (CommonFunction.IsNullOrEmpty(text)) { return NaN; }
        const num = Number(text);
        if (isNaN(num)) { return NaN; }
        if (num > max || num < min) {
            return NaN;
        }
        return num;
    }


    /** 字符串是否为空（或空字符串）*/
    public static IsNullOrEmpty(text: string) {
        if (text === undefined) { return true; }
        if (text === null) { return true; }
        if (text === '') { return true; }
        return false;
    }

    /** 0.00 格式 */
    public static FormatNumberTwoDecimal(num: number) {
        let str = num.toString();
        if (str.indexOf('.') === -1) {
            str = str + '.00';
        }
        if (str.indexOf('.') === str.length - 2) {
            str = str + '0';
        }
        return str;
    }

    /** 0.0 格式 */
    public static FormatNumberOneDecimal(num: number) {
        let str = num.toString();
        if (str.indexOf('.') === -1) {
            str = str + '.0';
        }
        return str;
    }

    /** 四舍五入（保留两位小数） */
    public static roundvalue(num: number): number {
        let number: number;
        number = Math.round(num * 100);
        number = number / 100;
        return number;
    }

    /**克隆 */
    public static clone<T>(source: T): T {
        return (JSON.parse(JSON.stringify(source)));
    }

    public static ConvertNumberToWeekday(week: number): string {
        switch (week) {
            case 0:
                return "日";
            case 1:
                return "一";
            case 2:
                return "二";
            case 3:
                return "三";
            case 4:
                return "四";
            case 5:
                return "五";
            case 6:
                return "六";
            default:
                return "六";
        }
    }

    public httpRequest<T>(serviceUrl: string): Promise<T> {
        //let webapiurl = "http://39.105.206.6:8080/api/"
        let webapiurl = "http://localhost:5000/api/"

        return this.http.get(
            webapiurl + serviceUrl
        )
            .toPromise()
            .then(response => {
                return response.json() as T;
            })
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.log('服务器访问失败');
        console.error('服务器访问失败', error);
        return Promise.reject(error.message || error);
    }
}

