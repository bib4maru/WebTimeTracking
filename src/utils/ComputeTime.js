

export const ComputeTime = (arr) => {
    let res = { usefull: 0, useless: 0};
    let temp_usefull = 0;
    let temp_useless = 0;
    if (arr.length == 0) {return res}
    else {arr.map(obj => {
        temp_usefull += obj.efficient_time;
        const temp = DateToSec(obj.starting_time,obj.ending_time) - obj.efficient_time;
        temp_useless += temp;
    })}
    const usefull = formatSeconds(temp_usefull);
    const useless = formatSeconds(temp_useless);
    res = {usefull: usefull, useless: useless};
    return res
}

function DateToSec (start,end) {
    let start_sec = new Date(start);
    let end_sec = new Date(end);
    const res = (end_sec - start_sec) / 1000;
    return res
}

function formatSeconds(value) {
    var secondTime = parseInt (value); // секунд
    var minuteTime = 0; // минута
    var hourTime = 0; // час
    if (secondTime> 60) {// Если количество секунд больше 60, преобразовать количество секунд в целое число
            // Получить минуты, разделить на 60, чтобы получить целые числа, получить целые минуты
minuteTime = parseInt(secondTime / 60);
            // Получить количество секунд, взять количество секунд, чтобы получить целое число секунд
secondTime = parseInt(secondTime % 60);
            // Если минуты больше 60, конвертируем минуты в часы
if(minuteTime > 60) {
                    // Получаем часы, получаем минуты, разделенные на 60, получаем целые часы
   hourTime = parseInt(minuteTime / 60);
                    // Получаем очки в часах и часах, получаем минуты в минутах, поделенные на 60 очков в часах
   minuteTime = parseInt(minuteTime % 60);
}
}
    var result = "" + parseInt (secondTime)+ " секунд";

if(minuteTime > 0) {
            result = "" + parseInt (minuteTime) + " минут " + result;
}
if(hourTime > 0) {
            result = "" + parseInt (hourTime) + " часов " + result;
}
return result;
}
