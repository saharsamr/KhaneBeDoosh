import React from 'react';

class HouseData extends React.Component {
    render(){
        return(
            <div className="col-md-5 text-right">
                <span className="delTypeLable sellLable float-right">فروش</span>
                <div className="spacer"></div>
                <table className="text-right col-md-12 position-relative">
                    <tr className=" border-bottom">
                        <td width="60%" className="">شماره مالک/مشاور</td>
                        <td width="40%"> 09121212121</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">نوع ساختمان</td>
                        <td width="40%"> کلنگی</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">قیمت</td>
                        <td width="40%">2000000 تومان</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">آدرس</td>
                        <td width="40%"> کارگر شمالی</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">متراژ</td>
                        <td width="40%"> 1500 مترمربع</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">توضیحات</td>
                        <td width="40%">عندالمطالبه</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default HouseData;