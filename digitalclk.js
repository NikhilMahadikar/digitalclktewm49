var date=new Date()


function clk()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var ms=date.getMilliseconds()

    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fulltime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    document.getElementById("sec").innerHTML=ss
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("Date").innerHTML=fullDate
    switch(dy)
    {
        case 0:dy="Sunday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(sun.jpg)"
        break;
        case 1:dy="Monday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(mon.jpg)"

        break;
        case 2:dy="Tuesday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(tue.jpg)"

        break;
        case 3:dy="Wednesday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(wed.jpg)"

        break;
        case 4:dy="Thursday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(thu.jpg)"

        break;
        case 5:dy="Friday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(fri.jpg)"

        break;
        case 6:dy="Saturday"
        bdy.style.backgroundImage="radial-gradient(transparent,transparent,black),url(sat.jpg)"

        break;
    }
    document.getElementById("Day").innerHTML=dy
    setTimeout(clk,1000);
}
function greet()
{
    var time=date.getHours()
    if(time>=5&&time<=12)
    {
        document.getElementById("message").innerHTML="Good Morn!!!"
        document.getElementById("vid").src="./morning.mp4"
        document.getElementById("container").style.backgroundColor="rgba(219, 245, 255, 0.619)"
        document.getElementById("Time").style.color="black"
        document.getElementById("Date").style.color="darkblue"
        document.getElementById("Day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }
    else if(time>=12 && time<16)
    {
        document.getElementById("message").innerHTML="Good Afternoon!!!"
        document.getElementById("vid").src="./afternoon.mp4"
    }
    else if(time>=16 && time<=20)
    {
        document.getElementById("message").innerHTML="Good Evening!!!"
        document.getElementById("vid").src="./evening.mp4"
        document.getElementById("container").style.backgroundColor="rgba(0, 0, 0, 0.57)"
        document.getElementById("Time").style.color="White"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("sec").style.color="black"
    }
    else {
        document.getElementById("message").innerHTML="Good Night!!!"
        document.getElementById("vid").src="./night.mp4"
        document.getElementById("container").style.backgroundColor="rgba(0, 0, 0, 0.57)"
        document.getElementById("Time").style.color="White"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("sec").style.color="black"

    }
}
greet()
function removeTheGreetWindow(){
    document.getElementById("greet").style.display="none"
} 
setTimeout(removeTheGreetWindow,15000)
function removeAlarm()
{
    document.getElementById("alarm").style.display="none"
 
}
function loadAlarm()
{
    document.getElementById("alarm").style.display="flex"
   
}
var audioFile=new Audio()
audioFile.src="./modern-vlog-140795.mp3"
function setAlarm()
{
    var selec=document.querySelectorAll("select")
    var userhh=selec[0].value
    var usermm=selec[1].value
    var useram_pm=selec[2].value
    console.log(userhh,usermm,useram_pm)

    var date=new Date()
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    console.log(hh,mm,am_pm)
    if(userhh==hh&&usermm==mm&&useram_pm==am_pm)
    {
        audioFile.play();
    }
    else
    {
        audioFile.pause();
    }
    setTimeout(setAlarm,1000);
    document.getElementById("alarm").style.display="none"
}