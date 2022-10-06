var geren=document.querySelector(".geren");
var geren_box=document.querySelector(".geren-box");
var geren_j=document.querySelector(".geren-j")
var geren_f=0;
geren.onclick=function(){
    if(geren_f==0){
        geren_box.style.height = "340px";
        geren_f=1;
        geren_j.style.transform = "rotate(-90deg)";
    }
    else{
        geren_box.style.height = "0px";
        geren_f=0;
        geren_j.style.transform = "rotate(0deg)";
    }
}
var ziwo=document.querySelector(".ziwo");
var ziwo_box=document.querySelector(".ziwo-box");
var ziwo_j=document.querySelector(".ziwo-j")
var ziwo_f=0;
ziwo.onclick=function(){
    if(ziwo_f==0){
        ziwo_box.style.height = "370px";
        ziwo_f=1;
        ziwo_j.style.transform = "rotate(-90deg)";       
    }
    else{
        ziwo_box.style.height = "0px";
        ziwo_f=0;
        ziwo_j.style.transform = "rotate(0deg)";
    }
}
var work=document.querySelector(".work");
var work_box=document.querySelector(".work-box");
var work_j=document.querySelector(".work-j")
var work_f=0;
work.onclick=function(){
    if(work_f==0){
        work_box.style.height = "370px";
        work_f=1;
        work_j.style.transform = "rotate(-90deg)";
    }
    else{
        work_box.style.height = "0px";
        work_f=0;
        work_j.style.transform = "rotate(0deg)";
    }
}
var edu=document.querySelector(".edu");
var edu_box=document.querySelector(".edu-box");
var edu_j=document.querySelector(".edu-j")
var edu_f=0;
edu.onclick=function(){
    if(edu_f==0){
        edu_box.style.height = "370px";
        edu_f=1;
        edu_j.style.transform = "rotate(-90deg)";
    }
    else{
        edu_box.style.height = "0px";
        edu_f=0;
        edu_j.style.transform = "rotate(0deg)";
    }
} 
var prize=document.querySelector(".prize");
var prize_box=document.querySelector(".prize-box");
var prize_j=document.querySelector(".prize-j")
var prize_f=0;
prize.onclick=function(){
    if(prize_f==0){
        prize_box.style.height = "370px";
        prize_f=1;
        prize_j.style.transform = "rotate(-90deg)";
    }
    else{
        prize_box.style.height = "0px";
        prize_f=0;
        prize_j.style.transform = "rotate(0deg)";
    }
} 
var book=document.querySelector(".book");
var book_box=document.querySelector(".book-box");
var book_j=document.querySelector(".book-j")
var book_f=0;
book.onclick=function(){
    if(book_f==0){
        book_box.style.height = "370px";
        book_f=1;
        book_j.style.transform = "rotate(-90deg)";
    }
    else{
        book_box.style.height = "0px";
        book_f=0;
        book_j.style.transform = "rotate(0deg)";
    }
}
var skills=document.querySelector(".skills");
var skills_box=document.querySelector(".skills-box");
var skills_j=document.querySelector(".skills-j")
var skills_f=0;
skills.onclick=function(){
    if(skills_f==0){
        skills_box.style.height = "370px";
        skills_f=1;
        skills_j.style.transform = "rotate(-90deg)";
    }
    else{
        skills_box.style.height = "0px";
        skills_f=0;
        skills_j.style.transform = "rotate(0deg)";
    }
} 
var hobby=document.querySelector(".hobby");
var hobby_box=document.querySelector(".hobby-box");
var hobby_j=document.querySelector(".hobby-j")
var hobby_f=0;
hobby.onclick=function(){
    if(hobby_f==0){
        hobby_box.style.height = "370px";
        hobby_f=1;
        hobby_j.style.transform = "rotate(-90deg)";
    }
    else{
        hobby_box.style.height = "0px";
        hobby_f=0;
        hobby_j.style.transform = "rotate(0deg)";
    }
} 
var langue=document.querySelector(".langue");
var langue_box=document.querySelector(".langue-box");
var langue_j=document.querySelector(".langue-j")
var langue_f=0;
langue.onclick=function(){
    if(langue_f==0){
        langue_box.style.height = "370px";
        langue_f=1;
        langue_j.style.transform = "rotate(-90deg)";
    }
    else{
        langue_box.style.height = "0px";
        langue_f=0;
        langue_j.style.transform = "rotate(0deg)";
    }
}
var experience=document.querySelector(".experience");
var experience_box=document.querySelector(".experience-box");
var experience_j=document.querySelector(".experience-j")
var experience_f=0;
experience.onclick=function(){
    if(experience_f==0){
        experience_box.style.height = "370px";
        experience_f=1;
        experience_j.style.transform = "rotate(-90deg)";
    }
    else{
        experience_box.style.height = "0px";
        experience_f=0;
        experience_j.style.transform = "rotate(0deg)";
    }
}  
var others=document.querySelector(".others");
var others_box=document.querySelector(".others-box");
var others_j=document.querySelector(".others-j")
var others_f=0;
others.onclick=function(){
    if(others_f==0){
        others_box.style.height = "370px";
        others_f=1;
        others_j.style.transform = "rotate(-90deg)";
    }
    else{
        others_box.style.height = "0px";
        others_f=0;
        others_j.style.transform = "rotate(0deg)";
    }
}





var ziwo1=document.querySelector(".ziwo-gou");
var ziwo1_j=1;
ziwo1.onclick=function(){
    if(ziwo1_j==1)
    {
        document.querySelector(".box-z").style.height="0px";
        document.querySelector(".box-z").style.margin="0px";
        ziwo1_j=0;
    }
    else
    {
        document.querySelector(".box-z").style.height="auto";
        document.querySelector(".box-z").style.margin="10px 0px 0px 50px";
        ziwo1_j=1;
    }
}
var work1=document.querySelector(".work-gou");
var work1_j=1;
work1.onclick=function(){
    if(work1_j==1)
    {
        document.querySelector(".box-go").style.height="0px";
        document.querySelector(".box-go").style.margin="0px";
        work1_j=0;
    }
    else
    {
        document.querySelector(".box-go").style.height="auto";
        document.querySelector(".box-go").style.margin="10px 0px 0px 50px";
        work1_j=1;
    }
}
var edu1=document.querySelector(".edu-gou");
var edu1_j=1;
edu1.onclick=function(){
    if(edu1_j==1)
    {
        document.querySelector(".box-edu").style.height="0px";
        document.querySelector(".box-edu").style.margin="0px";
        edu1_j=0;
    }
    else
    {
        document.querySelector(".box-edu").style.height="auto";
        document.querySelector(".box-edu").style.margin="10px 0px 0px 50px";
        edu1_j=1;
    }
}
var prize1=document.querySelector(".prize-gou");
var prize1_j=1;
prize1.onclick=function(){
    if(prize1_j==1)
    {
        document.querySelector(".box-p").style.height="0px";
        document.querySelector(".box-p").style.margin="0px";
        prize1_j=0;
    }
    else
    {
        document.querySelector(".box-p").style.height="auto";
        document.querySelector(".box-p").style.margin="10px 0px 0px 50px";
        prize1_j=1;
    }
}
var book1=document.querySelector(".book-gou");
var book1_j=1;
book1.onclick=function(){
    if(book1_j==1)
    {
        document.querySelector(".box-zh").style.height="0px";
        document.querySelector(".box-zh").style.margin="0px";
        book1_j=0;
    }
    else
    {
        document.querySelector(".box-zh").style.height="auto";
        document.querySelector(".box-zh").style.margin="10px 0px 0px 50px";
        book1_j=1;
    }
}
var skills1=document.querySelector(".skills-gou");
var skills1_j=1;
skills1.onclick=function(){
    if(skills1_j==1)
    {
        document.querySelector(".box-skill").style.height="0px";
        document.querySelector(".box-skill").style.margin="0px";
        skills1_j=0;
    }
    else
    {
        document.querySelector(".box-skill").style.height="auto";
        document.querySelector(".box-skill").style.margin="10px 0px 0px 50px";
        skills1_j=1;
    }
}
var hobby1=document.querySelector(".hobby-gou");
var hobby1_j=1;
hobby1.onclick=function(){
    if(hobby1_j==1)
    {
        document.querySelector(".box-ho").style.height="0px";
        document.querySelector(".box-ho").style.margin="0px";
        hobby1_j=0;
    }
    else
    {
        document.querySelector(".box-ho").style.height="auto";
        document.querySelector(".box-ho").style.margin="10px 0px 0px 50px";
        hobby1_j=1;
    }
}
var langue1=document.querySelector(".langue-gou");
var langue1_j=1;
langue1.onclick=function(){
    if(langue1_j==1)
    {
        document.querySelector(".box-lan").style.height="0px";
        document.querySelector(".box-lan").style.margin="0px";
        langue1_j=0;
    }
    else
    {
        document.querySelector(".box-lan").style.height="auto";
        document.querySelector(".box-lan").style.margin="10px 0px 0px 50px";
        langue1_j=1;
    }
}
var experience1=document.querySelector(".experience-gou");
var experience1_j=1;
experience1.onclick=function(){
    if(experience1_j==1)
    {
        document.querySelector(".box-exp").style.height="0px";
        document.querySelector(".box-exp").style.margin="0px";
        experience1_j=0;
    }
    else
    {
        document.querySelector(".box-exp").style.height="auto";
        document.querySelector(".box-exp").style.margin="10px 0px 0px 50px";
        experience1_j=1;
    }
}
var others1=document.querySelector(".others-gou");
var others1_j=1;
others1.onclick=function(){
    if(others1_j==1)
    {
        document.querySelector(".box-other").style.height="0px";
        document.querySelector(".box-other").style.margin="0px";
        others1_j=0;
    }
    else
    {
        document.querySelector(".box-other").style.height="auto";
        document.querySelector(".box-other").style.margin="10px 0px 0px 50px";
        others1_j=1;
    }
}




window.oninput=function(){
    var inpname=document.querySelector(".inp-name").value;
    var pname=document.querySelector(".p-name");
    pname.innerHTML=inpname;
    localStorage.setItem('inpname',inpname);
    
    var inpzh=document.querySelector(".inp-zh").value;
    var pzh=document.querySelector(".p-zhiwei");
    pzh.innerHTML=inpzh;
    localStorage.setItem('inpzh',inpzh);
    
    var inparea=document.querySelector(".inp-area").value;
    var parea=document.querySelector(".p-area");
    parea.innerHTML=inparea;
    if(inparea.trim().length!=0) document.querySelector(".box-g-2-1").style.height="auto";
    else document.querySelector(".box-g-2-1").style.height="0px";
    localStorage.setItem('inparea',inparea);
    
    var inpphone=document.querySelector(".inp-phone").value;
    var pphone=document.querySelector(".p-phone");
    pphone.innerHTML=inpphone;
    if(inpphone.trim().length!=0) document.querySelector(".box-g-2-2").style.height="auto";
    else document.querySelector(".box-g-2-2").style.height="0px";
    localStorage.setItem('inpphone',inpphone);
    
    var inpschool=document.querySelector(".inp-school").value;
    var pschool=document.querySelector(".p-school");
    pschool.innerHTML=inpschool;
    if(inpschool.trim().length!=0) document.querySelector(".box-g-2-3").style.height="auto";
    else document.querySelector(".box-g-2-3").style.height="0px";
    localStorage.setItem('inpschool',inpschool);
    
    var inpemail=document.querySelector(".inp-email").value;
    var pemail=document.querySelector(".p-e-mail");
    pemail.innerHTML=inpemail;
    if(inpemail.trim().length!=0) document.querySelector(".box-g-2-4").style.height="auto";
    else document.querySelector(".box-g-2-4").style.height="0px";
    localStorage.setItem('inpemail',inpemail);

    var tziwo=document.querySelector(".ziwo-t").value;
    var pziwo=document.querySelector(".p-z");
    pziwo.innerHTML=tziwo;
    localStorage.setItem('tziwo',tziwo);

    var twork=document.querySelector(".work-t").value;
    var pwork=document.querySelector(".p-go");
    pwork.innerHTML=twork;
    localStorage.setItem('twork',twork);

    var tedu=document.querySelector(".edu-t").value;
    var pedu=document.querySelector(".p-edu");
    pedu.innerHTML=tedu;
    localStorage.setItem('tedu',tedu);

    var tprize=document.querySelector(".prize-t").value;
    var pprize=document.querySelector(".p-p");
    pprize.innerHTML=tprize;
    localStorage.setItem('tprize',tprize);

    var tbook=document.querySelector(".book-t").value;
    var pbook=document.querySelector(".p-zh");
    pbook.innerHTML=tbook;
    localStorage.setItem('tbook',tbook);
    
    var tskills=document.querySelector(".skills-t").value;
    var pskills=document.querySelector(".p-skill");
    pskills.innerHTML=tskills;
    localStorage.setItem('tskills',tskills);

    var thobby=document.querySelector(".hobby-t").value;
    var phobby=document.querySelector(".p-ho");
    phobby.innerHTML=thobby;
    localStorage.setItem('thobby',thobby);

    var tlangue=document.querySelector(".langue-t").value;
    var plangue=document.querySelector(".p-lan");
    plangue.innerHTML=tlangue;
    localStorage.setItem('tlangue',tlangue);

    var texperience=document.querySelector(".experience-t").value;
    var pexperience=document.querySelector(".p-exp");
    pexperience.innerHTML=texperience;
    localStorage.setItem('texperience',texperience);

    var tothers=document.querySelector(".others-t").value;
    var pothers=document.querySelector(".p-other");
    pothers.innerHTML=tothers;
    localStorage.setItem('tothers',tothers);
}





window.onload=function(){
    document.querySelector(".inp-name").value=localStorage.getItem('inpname');
    document.querySelector(".inp-zh").value=localStorage.getItem('inpzh');
    document.querySelector(".inp-area").value=localStorage.getItem('inparea');
    document.querySelector(".inp-phone").value=localStorage.getItem('inpphone');
    document.querySelector(".inp-school").value=localStorage.getItem('inpschool');
    document.querySelector(".inp-email").value=localStorage.getItem('inpemail');
    document.querySelector(".ziwo-t").value=localStorage.getItem('tziwo');
    document.querySelector(".work-t").value=localStorage.getItem('twork');
    document.querySelector(".edu-t").value=localStorage.getItem('tedu');
    document.querySelector(".prize-t").value=localStorage.getItem('tprize');
    document.querySelector(".book-t").value=localStorage.getItem('tbook');
    document.querySelector(".skills-t").value=localStorage.getItem('tskills');
    document.querySelector(".hobby-t").value=localStorage.getItem('thobby');
    document.querySelector(".langue-t").value=localStorage.getItem('tlangue');
    document.querySelector(".experience-t").value=localStorage.getItem('texperience');
    document.querySelector(".others-t").value=localStorage.getItem('tothers');
    
    var inpname=document.querySelector(".inp-name").value;
    var pname=document.querySelector(".p-name");
    pname.innerHTML=inpname;
    
    var inpzh=document.querySelector(".inp-zh").value;
    var pzh=document.querySelector(".p-zhiwei");
    pzh.innerHTML=inpzh;
    
    var inparea=document.querySelector(".inp-area").value;
    var parea=document.querySelector(".p-area");
    parea.innerHTML=inparea;
    if(inparea.trim().length!=0) document.querySelector(".box-g-2-1").style.height="auto";
    else document.querySelector(".box-g-2-1").style.height="0px";
    
    var inpphone=document.querySelector(".inp-phone").value;
    var pphone=document.querySelector(".p-phone");
    pphone.innerHTML=inpphone;
    if(inpphone.trim().length!=0) document.querySelector(".box-g-2-2").style.height="auto";
    else document.querySelector(".box-g-2-2").style.height="0px";
    
    var inpschool=document.querySelector(".inp-school").value;
    var pschool=document.querySelector(".p-school");
    pschool.innerHTML=inpschool;
    if(inpschool.trim().length!=0) document.querySelector(".box-g-2-3").style.height="auto";
    else document.querySelector(".box-g-2-3").style.height="0px";
    
    var inpemail=document.querySelector(".inp-email").value;
    var pemail=document.querySelector(".p-e-mail");
    pemail.innerHTML=inpemail;
    if(inpemail.trim().length!=0) document.querySelector(".box-g-2-4").style.height="auto";
    else document.querySelector(".box-g-2-4").style.height="0px";

    var tziwo=document.querySelector(".ziwo-t").value;
    var pziwo=document.querySelector(".p-z");
    pziwo.innerHTML=tziwo;

    var twork=document.querySelector(".work-t").value;
    var pwork=document.querySelector(".p-go");
    pwork.innerHTML=twork;

    var tedu=document.querySelector(".edu-t").value;
    var pedu=document.querySelector(".p-edu");
    pedu.innerHTML=tedu;

    var tprize=document.querySelector(".prize-t").value;
    var pprize=document.querySelector(".p-p");
    pprize.innerHTML=tprize;

    var tbook=document.querySelector(".book-t").value;
    var pbook=document.querySelector(".p-zh");
    pbook.innerHTML=tbook;
    
    var tskills=document.querySelector(".skills-t").value;
    var pskills=document.querySelector(".p-skill");
    pskills.innerHTML=tskills;

    var thobby=document.querySelector(".hobby-t").value;
    var phobby=document.querySelector(".p-ho");
    phobby.innerHTML=thobby;

    var tlangue=document.querySelector(".langue-t").value;
    var plangue=document.querySelector(".p-lan");
    plangue.innerHTML=tlangue;

    var texperience=document.querySelector(".experience-t").value;
    var pexperience=document.querySelector(".p-exp");
    pexperience.innerHTML=texperience;

    var tothers=document.querySelector(".others-t").value;
    var pothers=document.querySelector(".p-other");
    pothers.innerHTML=tothers;
}

function cz(){
    document.querySelector(".inp-name").value="";
    document.querySelector(".inp-zh").value="";
    document.querySelector(".inp-area").value="";
    document.querySelector(".inp-phone").value="";
    document.querySelector(".inp-school").value="";
    document.querySelector(".inp-email").value="";
    document.querySelector(".ziwo-t").value="";
    document.querySelector(".work-t").value="";
    document.querySelector(".edu-t").value="";
    document.querySelector(".prize-t").value="";
    document.querySelector(".book-t").value="";
    document.querySelector(".skills-t").value="";
    document.querySelector(".hobby-t").value="";
    document.querySelector(".langue-t").value="";
    document.querySelector(".experience-t").value="";
    document.querySelector(".others-t").value="";
    
    var inpname=document.querySelector(".inp-name").value;
    var pname=document.querySelector(".p-name");
    pname.innerHTML=inpname;
    localStorage.setItem('inpname',inpname);
    
    var inpzh=document.querySelector(".inp-zh").value;
    var pzh=document.querySelector(".p-zhiwei");
    pzh.innerHTML=inpzh;
    localStorage.setItem('inpzh',inpzh);
    
    var inparea=document.querySelector(".inp-area").value;
    var parea=document.querySelector(".p-area");
    parea.innerHTML=inparea;
    if(inparea.trim().length!=0) document.querySelector(".box-g-2-1").style.height="auto";
    else document.querySelector(".box-g-2-1").style.height="0px";
    localStorage.setItem('inparea',inparea);
    
    var inpphone=document.querySelector(".inp-phone").value;
    var pphone=document.querySelector(".p-phone");
    pphone.innerHTML=inpphone;
    if(inpphone.trim().length!=0) document.querySelector(".box-g-2-2").style.height="auto";
    else document.querySelector(".box-g-2-2").style.height="0px";
    localStorage.setItem('inpphone',inpphone);
    
    var inpschool=document.querySelector(".inp-school").value;
    var pschool=document.querySelector(".p-school");
    pschool.innerHTML=inpschool;
    if(inpschool.trim().length!=0) document.querySelector(".box-g-2-3").style.height="auto";
    else document.querySelector(".box-g-2-3").style.height="0px";
    localStorage.setItem('inpschool',inpschool);
    
    var inpemail=document.querySelector(".inp-email").value;
    var pemail=document.querySelector(".p-e-mail");
    pemail.innerHTML=inpemail;
    if(inpemail.trim().length!=0) document.querySelector(".box-g-2-4").style.height="auto";
    else document.querySelector(".box-g-2-4").style.height="0px";
    localStorage.setItem('inpemail',inpemail);

    var tziwo=document.querySelector(".ziwo-t").value;
    var pziwo=document.querySelector(".p-z");
    pziwo.innerHTML=tziwo;
    localStorage.setItem('tziwo',tziwo);

    var twork=document.querySelector(".work-t").value;
    var pwork=document.querySelector(".p-go");
    pwork.innerHTML=twork;
    localStorage.setItem('twork',twork);

    var tedu=document.querySelector(".edu-t").value;
    var pedu=document.querySelector(".p-edu");
    pedu.innerHTML=tedu;
    localStorage.setItem('tedu',tedu);

    var tprize=document.querySelector(".prize-t").value;
    var pprize=document.querySelector(".p-p");
    pprize.innerHTML=tprize;
    localStorage.setItem('tprize',tprize);

    var tbook=document.querySelector(".book-t").value;
    var pbook=document.querySelector(".p-zh");
    pbook.innerHTML=tbook;
    localStorage.setItem('tbook',tbook);
    
    var tskills=document.querySelector(".skills-t").value;
    var pskills=document.querySelector(".p-skill");
    pskills.innerHTML=tskills;
    localStorage.setItem('tskills',tskills);

    var thobby=document.querySelector(".hobby-t").value;
    var phobby=document.querySelector(".p-ho");
    phobby.innerHTML=thobby;
    localStorage.setItem('thobby',thobby);

    var tlangue=document.querySelector(".langue-t").value;
    var plangue=document.querySelector(".p-lan");
    plangue.innerHTML=tlangue;
    localStorage.setItem('tlangue',tlangue);

    var texperience=document.querySelector(".experience-t").value;
    var pexperience=document.querySelector(".p-exp");
    pexperience.innerHTML=texperience;
    localStorage.setItem('texperience',texperience);

    var tothers=document.querySelector(".others-t").value;
    var pothers=document.querySelector(".p-other");
    pothers.innerHTML=tothers;
    localStorage.setItem('tothers',tothers);
}