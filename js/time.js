
window.setInterval(update_time, 1000);
window.onload =  time_onload()

function time_onload(){
    
}

function update_time(){

    //Get system Date
    var time_date = new Date;

    //Store as time divisions
    const seconds = time_date.getSeconds();
    const minutes = time_date.getMinutes();
    const hours = time_date.getUTCHours();

    //Increases every time function is called. Can be seen in console.
    console.log("Updated Time");

    //Top of page time updates
    document.getElementById("UTC").innerText = "UTC TIME: " + time_date.getUTCHours() + ":" + time_date.getUTCMinutes() + ":" +time_date.getUTCSeconds();
    document.getElementById("USRTime").innerText = "USER TIME: " + time_date.getHours() + ":" + time_date.getMinutes() + ":" + time_date.getSeconds();

    //Time Table Update
    document.getElementById("NT").innerText = utc_hour_conv(-1, minutes, hours) + ":" + seconds;
    document.getElementById("CET").innerText = utc_hour_conv(1, minutes, hours) + ":" + seconds;

    document.getElementById("OT").innerText = utc_hour_conv(-2, minutes, hours) + ":" + seconds;
    document.getElementById("EET").innerText = utc_hour_conv(2, minutes, hours) + ":" + seconds;

    document.getElementById("ADT").innerText = utc_hour_conv(-3, minutes, hours) + ":" + seconds;
    document.getElementById("MT").innerText = utc_hour_conv(3, minutes, hours) + ":" + seconds;

    document.getElementById("AST").innerText = utc_hour_conv(-4, minutes, hours) + ":" + seconds;
    document.getElementById("GT").innerText = utc_hour_conv(4, minutes,hours) + ":" + seconds;

    document.getElementById("EST").innerText = utc_hour_conv(-5, minutes, hours) + ":" + seconds;
    document.getElementById("KT").innerText = utc_hour_conv(5, minutes, hours) + ":" + seconds;

    document.getElementById("IST").innerText = utc_hour_conv(5.5, minutes, hours) + ":" + seconds;

    document.getElementById("CST").innerText = utc_hour_conv(-6, minutes, hours) + ":" + seconds;
    document.getElementById("BGT").innerText = utc_hour_conv(6, minutes, hours) + ":" + seconds;

    document.getElementById("MST").innerText = utc_hour_conv(-7, minutes, hours) + ":" + seconds;
    document.getElementById("CIT").innerText = utc_hour_conv(7, minutes, hours) + ":" + seconds;

    document.getElementById("PST").innerText = utc_hour_conv(-8, minutes, hours) + ":" + seconds;
    document.getElementById("CHST").innerText = utc_hour_conv(8, minutes, hours) + ":" + seconds;

    document.getElementById("AKST").innerText = utc_hour_conv( -9, minutes, hours) + ":" + seconds;
    document.getElementById("JST").innerText = utc_hour_conv( 9, minutes, hours) + ":" + seconds;

    document.getElementById("HST").innerText = utc_hour_conv( -10, minutes, hours) + ":" +seconds;
    document.getElementById("AEST").innerText = utc_hour_conv( 10, minutes, hours) + ":" + seconds;

    document.getElementById("SST").innerText = utc_hour_conv( -11, minutes, hours) + ":" + seconds;
    document.getElementById("VT").innerText = utc_hour_conv( 11, minutes, hours) + ":" + seconds;

    document.getElementById("AOE").innerText = utc_hour_conv( -12, minutes, hours) + ":" + seconds;
    document.getElementById("NZST").innerText = utc_hour_conv( 12, minutes, hours) + ":" + seconds;

}

function utc_hour_conv(time_offset, minutes, utc_hours){
    utc_hours = utc_hours + time_offset;
    if ( utc_hours < 0){
        utc_hours = utc_hours + 12;
    }
    //Modulous for more than integer
    if ( (utc_hours % 1) > 0){
        console.log("mod: " + (utc_hours % 1));
        minutes = minutes + (60 * (utc_hours % 1));
        console.log("Minutes: " + minutes);
        utc_hours = utc_hours - (utc_hours % 1);
        console.log("Hours: " + utc_hours);
    }

    if (minutes > 60){
        utc_hours = utc_hours + 1;
        minutes = minutes - 60;
    }


    //Returns hours and seconds
    return utc_hours + ":" + minutes ;
}