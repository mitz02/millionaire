
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      ///////////Beginning of Variable declaration///////////////////////////////////
      if (window.performance) {
         console.info("window.performance works fine on this browser");
       }
       console.info(performance.navigation.type);
       if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
         window,open("mainpageChoice.php", "_self");
       } else {
         console.info( "This page is not reloaded");
       }
     window.ifyouwin=function(){
        if(count == 6){
           setTimeout(()=>{
            window.open("mainpageChoice.php?you-won");
           }, 2000)
           
        }
        
     }

     window.wrong=function(){
      document.getElementById("boxa").onclick="none";
      document.getElementById("boxc").onclick="none";
      document.getElementById("boxd").onclick="none";
      document.getElementById("boxb").onclick="none";
     }
   window.wait=function(){
      wrong();
      setTimeout(()=>{
         window.open("Retry.php?wrong","_self");
      },4000)
   }
      window.turnFunctionOn = function(){
      document.getElementById("boxa").onclick=function(){valueA();};
      document.getElementById("boxc").onclick=function(){valueC();};
      document.getElementById("boxd").onclick=function(){valueD();};
      document.getElementById("boxb").onclick=function(){valueB()};;
      }
      window.turnfifthyOn  = true;
      window.count=0;
      window.BeginCheck=true;
      window.IntermediateCheck=false;
      window.IntermediateCount=0;
      window.moneyColor = count.toString();
      window.start_counting=16;
      document.getElementById(moneyColor).style.backgroundColor="orange";
      document.getElementById("time").style.fontsize="25px";
      ///////////End of Variable declaration///////////////////////////////////

      ////////////////setting all the  arrays//////////
      var BeginnerArray = [];
      var IntermediateArray = [];
     
      for (xB=0; xB < response.Questions.length; xB++){
      BeginnerArray.push(xB);
      }

      for (xI=0; xI < response.Intermediate.length; xI++){
      IntermediateArray.push(xI);
      }

    window.BeginnerRandomCount=BeginnerArray.sort(function(a, b){return 0.5 - Math.random()});
      window.IntermediateRandomCount=IntermediateArray.sort(function(a, b){return 0.5 - Math.random()});

  
     
      ////////////////End all the  arrays//////////
      document.getElementById("a").innerHTML=response.Questions[BeginnerRandomCount[count]].A;
      document.getElementById("b").innerHTML=response.Questions[BeginnerRandomCount[count]].B;
      document.getElementById("c").innerHTML=response.Questions[BeginnerRandomCount[count]].C;
      document.getElementById("d").innerHTML=response.Questions[BeginnerRandomCount[count]].D;
      document.getElementById("que").innerHTML=response.Questions[BeginnerRandomCount[count]].q1;

      
     ///////////wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww////////////////////////////////////  
      window.firstCheckA = function(){
         ifyouwin();
         document.getElementById(moneyColor).style.backgroundColor="green";
        turnFunctionOn();
         var x =10; 
         document.getElementById("boxa").style.backgroundColor="green";
      var se= setInterval(() => {
      x-=1;
      if(x === 0){
      clearInterval(se);
      }
      if( x%2 === 0){ 


      document.getElementById("boxa").style.backgroundColor="darkblue"; 

      }else{

      document.getElementById("boxa").style.backgroundColor="green";

      }

      document.getElementById("boxb").onclick="none";
      document.getElementById("boxc").onclick="none";
      document.getElementById("boxd").onclick="none";
      }, 100);





      setTimeout(()=> {
   
         set=setInterval(()=>{
            start_counting-=1;
            document.getElementById("time").innerHTML=start_counting;
            if(start_counting == 0){
            window.open("Retry.html?timeout","_self");
            }
            },2000);
      
    
      
      console.log(IntermediateCount);
     count+=1;
     window.moneyColor = count.toString();
     document.getElementById(moneyColor).style.backgroundColor="orange";
      document.getElementById("boxa").style.backgroundColor="darkblue";
      
      if(count > 5){
         
         console.log(IntermediateCount);
         BeginCheck = false;
         IntermediateCheck=true;
         document.getElementById("a").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].A;
         document.getElementById("b").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].B;
         document.getElementById("c").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].C;
         document.getElementById("d").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].D;
         document.getElementById("que").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].q1;
      
         
      }else if(count == 10){
         window.open("Retry.html?win","_self");
      }
      
      
      else{
         IntermediateCheck=false;
         BeginCheck = true;
      document.getElementById("a").innerHTML=response.Questions[BeginnerRandomCount[count]].A;
      document.getElementById("b").innerHTML=response.Questions[BeginnerRandomCount[count]].B;
      document.getElementById("c").innerHTML=response.Questions[BeginnerRandomCount[count]].C;
      document.getElementById("d").innerHTML=response.Questions[BeginnerRandomCount[count]].D;
      document.getElementById("que").innerHTML=response.Questions[BeginnerRandomCount[count]].q1;
   }
      document.getElementById("boxa").onclick=function(){valueA();};
      document.getElementById("boxc").onclick=function(){valueC();};
      document.getElementById("boxd").onclick=function(){valueD();};
      document.getElementById("boxb").onclick=function(){valueB()};;

      x=0;
    
      },2000);

  
      clearInterval(set);
      };
      ////function A Begins/////////////////////////
      window.valueA=function(){

      
      if(response.Questions[BeginnerRandomCount[count]].A === response.Questions[BeginnerRandomCount[count]].ans 
         && BeginCheck == true){
        
          start_counting=16;
       firstCheckA();
      }
      else  if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].A === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans 
         && IntermediateCheck == true){
            start_counting=16;
            IntermediateCount+=1;
        firstCheckA();
      
       
        
        
      }else{
         wait();
         document.getElementById("boxa").style.backgroundColor="orange";
         if(BeginCheck == true && count < 5 ){
            if(response.Questions[BeginnerRandomCount[count]].B === response.Questions[BeginnerRandomCount[count]].ans)
             {
               document.getElementById("boxb").style.backgroundColor="green";
             }
            else if(response.Questions[BeginnerRandomCount[count]].C === response.Questions[BeginnerRandomCount[count]].ans)
            {
               document.getElementById("boxc").style.backgroundColor="green";
            }
            else if(response.Questions[BeginnerRandomCount[count]].D === response.Questions[BeginnerRandomCount[count]].ans)
            {
               document.getElementById("boxd").style.backgroundColor="green";
            }
         }
         //////------------------------------------------///////////////////////////////
        if(IntermediateCheck == true && count > 5){
            if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].B === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans) {
               document.getElementById("boxb").style.backgroundColor="green";
            }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].C === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
               document.getElementById("boxc").style.backgroundColor="green";
            }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].D === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
               document.getElementById("boxd").style.backgroundColor="green";
            }
         }
         
      }

    
      }
      ///////////////end of functionA//////////////////////////////////////////////////////



   /////////////////BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB/////////////////////
   /////////////////BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB/////////////////////
   /////////////////BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB/////////////////////
   window.firstCheckB = function(){
      ifyouwin();
      document.getElementById(moneyColor).style.backgroundColor="green";
      var x =10; 
  turnFunctionOn();
    
      document.getElementById("boxb").style.backgroundColor="green";
   var se= setInterval(() => {
   x-=1;
   if(x === 0){
   clearInterval(se);
   }
   if( x%2 === 0){ 


   document.getElementById("boxb").style.backgroundColor="darkblue"; 

   }else{

   document.getElementById("boxb").style.backgroundColor="green";

   }

   document.getElementById("boxa").onclick="none";
   document.getElementById("boxc").onclick="none";
   document.getElementById("boxd").onclick="none";
   }, 100);





   setTimeout(()=> {
  
     set=setInterval(()=>{
         start_counting-=1;
         document.getElementById("time").innerHTML=start_counting;
         if(start_counting == 0){
         window.open("Retry.html?timeout","_self");
         }
         },2000);
   
 
   
  
  count+=1;
  window.moneyColor = count.toString();
  document.getElementById(moneyColor).style.backgroundColor="orange";
  
   document.getElementById("boxb").style.backgroundColor="darkblue";
   
   if(count > 5){
     
      BeginCheck=false;
      IntermediateCheck = true; 
      document.getElementById("a").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].A;
      document.getElementById("b").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].B;
      document.getElementById("c").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].C;
      document.getElementById("d").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].D;
      document.getElementById("que").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].q1;
     

      
   }else if(count == 10){
      window.open("Retry.html?win","_self");
   }else{
      
   document.getElementById("a").innerHTML=response.Questions[BeginnerRandomCount[count]].A;
   document.getElementById("b").innerHTML=response.Questions[BeginnerRandomCount[count]].B;
   document.getElementById("c").innerHTML=response.Questions[BeginnerRandomCount[count]].C;
   document.getElementById("d").innerHTML=response.Questions[BeginnerRandomCount[count]].D;
   document.getElementById("que").innerHTML=response.Questions[BeginnerRandomCount[count]].q1;
}
   document.getElementById("boxa").onclick=function(){valueA();};
   document.getElementById("boxc").onclick=function(){valueC();};
   document.getElementById("boxd").onclick=function(){valueD();};
   document.getElementById("boxb").onclick=function(){valueB()};;

   x=0;
  
   },2000);


clearInterval(set);
   };
   ////function A Begins/////////////////////////
   window.valueB=function fun(){
 
   
   
   if(response.Questions[BeginnerRandomCount[count]].B === response.Questions[BeginnerRandomCount[count]].ans 
      && BeginCheck == true){
        
    firstCheckB();
    start_counting=16;
   }
   else  if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].B === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans 
      && IntermediateCheck == true){
         IntermediateCount+=1;
  
     firstCheckB();
     start_counting=16;
   
   }else{
      wait();
      document.getElementById("boxb").style.backgroundColor="orange";
      if(BeginCheck == true && count < 5){
         if(response.Questions[BeginnerRandomCount[count]].A === response.Questions[BeginnerRandomCount[count]].ans)
          {
            document.getElementById("boxa").style.backgroundColor="green";
          }
         else if(response.Questions[BeginnerRandomCount[count]].C === response.Questions[BeginnerRandomCount[count]].ans)
         {
            document.getElementById("boxc").style.backgroundColor="green";
         }
         else if(response.Questions[BeginnerRandomCount[count]].D === response.Questions[BeginnerRandomCount[count]].ans)
         {
            document.getElementById("boxd").style.backgroundColor="green";
         }
      }
      //////------------------------------------------///////////////////////////////
     if(IntermediateCheck == true && count > 5){
         if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].A === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans) {
            document.getElementById("boxa").style.backgroundColor="green";
         }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].C === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
            document.getElementById("boxc").style.backgroundColor="green";
         }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].D === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
            document.getElementById("boxd").style.backgroundColor="green";
         }
      }
      
   }

 
   }

   ////////////////////CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC//////////////////////
   ////////////////////CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC//////////////////////
   ////////////////////CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC//////////////////////
   ////////////////////CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC//////////////////////
   window.firstCheckC = function(){
      ifyouwin();
      document.getElementById(moneyColor).style.backgroundColor="green";
      var x =10; 
 turnFunctionOn();
     
      document.getElementById("boxc").style.backgroundColor="green";
   var se= setInterval(() => {
   x-=1;
   if(x === 0){
   clearInterval(se);
   }
   if( x%2 === 0){ 


   document.getElementById("boxc").style.backgroundColor="darkblue"; 

   }else{

   document.getElementById("boxc").style.backgroundColor="green";

   }

   document.getElementById("boxa").onclick="none";
   document.getElementById("boxb").onclick="none";
   document.getElementById("boxd").onclick="none";
   }, 100);





   setTimeout(()=> {
 
   
     set=setInterval(()=>{
        
         start_counting-=1;
         document.getElementById("time").innerHTML=start_counting;
         if(start_counting == 0){
         window.open("Retry.html?timeout","_self");
         }
         },2000);
   
 
   
  
  count+=1;
  window.moneyColor = count.toString();
  document.getElementById(moneyColor).style.backgroundColor="orange";
   document.getElementById("boxc").style.backgroundColor="darkblue";

   if(count > 5){

      console.log(IntermediateCount);
      console.log("change b4 the change");
      BeginCheck = false;
      IntermediateCheck=true;
      document.getElementById("a").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].A;
      document.getElementById("b").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].B;
      document.getElementById("c").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].C;
      document.getElementById("d").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].D;
      document.getElementById("que").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].q1;
     
      
   }
   else if(count == 10){
      window.open("Retry.html?win","_self");
   }else{
      
   document.getElementById("a").innerHTML=response.Questions[BeginnerRandomCount[count]].A;
   document.getElementById("b").innerHTML=response.Questions[BeginnerRandomCount[count]].B;
   document.getElementById("c").innerHTML=response.Questions[BeginnerRandomCount[count]].C;
   document.getElementById("d").innerHTML=response.Questions[BeginnerRandomCount[count]].D;
   document.getElementById("que").innerHTML=response.Questions[BeginnerRandomCount[count]].q1;
}
   document.getElementById("boxa").onclick=function(){valueA();};
   document.getElementById("boxc").onclick=function(){valueC();};
   document.getElementById("boxd").onclick=function(){valueD();};
   document.getElementById("boxb").onclick=function(){valueB()};;

   x=0;
  
   },2000);


clearInterval(set);
   };
   ////function A Begins/////////////////////////
   window.valueC=function(){
 
 
   
   
   if(response.Questions[BeginnerRandomCount[count]].C === response.Questions[BeginnerRandomCount[count]].ans 
      && BeginCheck == true){
         start_counting=16;

    firstCheckC();
   }
   else  if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].C === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans 
      && IntermediateCheck == true){
         start_counting=16;
         IntermediateCount+=1;
         firstCheckC();
       
   }else{
      wait();
      document.getElementById("boxc").style.backgroundColor="orange";
      if(BeginCheck == true && count < 5){
         if(response.Questions[BeginnerRandomCount[count]].B === response.Questions[BeginnerRandomCount[count]].ans)
          {
            document.getElementById("boxb").style.backgroundColor="green";
          }
         else if(response.Questions[BeginnerRandomCount[count]].A === response.Questions[BeginnerRandomCount[count]].ans)
         {
            document.getElementById("boxa").style.backgroundColor="green";
         }
         else if(response.Questions[BeginnerRandomCount[count]].D === response.Questions[BeginnerRandomCount[count]].ans)
         {
            document.getElementById("boxd").style.backgroundColor="green";
         }
      }
      //////------------------------------------------///////////////////////////////
     if(IntermediateCheck == true && count > 5){
         if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].A === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans) {
            document.getElementById("boxa").style.backgroundColor="green";
         }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].B === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
            document.getElementById("boxb").style.backgroundColor="green";
         }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].D === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
            document.getElementById("boxd").style.backgroundColor="green";
         }
      }
      
   }

 
   }
   //////////DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD///////////////////
   //////////DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD///////////////////
   //////////DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD///////////////////
   //////////DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD///////////////////

   window.firstCheckD = function(){
      ifyouwin();
      document.getElementById(moneyColor).style.backgroundColor="green";
      var x =10; 
    
     turnFunctionOn();
      document.getElementById("boxd").style.backgroundColor="green";
   var se= setInterval(() => {
   x-=1;
   if(x === 0){
   clearInterval(se);
   }
   if( x%2 === 0){ 


   document.getElementById("boxd").style.backgroundColor="darkblue"; 

   }else{

   document.getElementById("boxd").style.backgroundColor="green";

   }

   document.getElementById("boxa").onclick="none";
   document.getElementById("boxb").onclick="none";
   document.getElementById("boxc").onclick="none";
   }, 100);





   setTimeout(()=> {

     set=setInterval(()=>{
         start_counting-=1;
         document.getElementById("time").innerHTML=start_counting;
         if(start_counting == 0){
         window.open("Retry.html?timeout","_self");
         }
         },2000);
   
 
   
  
  count+=1;
  window.moneyColor = count.toString();
  document.getElementById(moneyColor).style.backgroundColor="orange";
   document.getElementById("boxd").style.backgroundColor="darkblue";
   console.log("change b4 the change");
   console.log(IntermediateCount);
   if(count > 5){

      
      console.log(IntermediateCount);
      console.log("change b4 the change");
      BeginCheck = false;
      IntermediateCheck=true;
      document.getElementById("a").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].A;
      document.getElementById("b").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].B;
      document.getElementById("c").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].C;
      document.getElementById("d").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].D;
      document.getElementById("que").innerHTML=response.Intermediate[IntermediateRandomCount[IntermediateCount]].q1;
     
      
   }else if(count == 10){
      window.open("Retry.html?win","_self");
   }
   
   else{
      
   document.getElementById("a").innerHTML=response.Questions[BeginnerRandomCount[count]].A;
   document.getElementById("b").innerHTML=response.Questions[BeginnerRandomCount[count]].B;
   document.getElementById("c").innerHTML=response.Questions[BeginnerRandomCount[count]].C;
   document.getElementById("d").innerHTML=response.Questions[BeginnerRandomCount[count]].D;
   document.getElementById("que").innerHTML=response.Questions[BeginnerRandomCount[count]].q1;
}
   document.getElementById("boxa").onclick=function(){valueA();};
   document.getElementById("boxc").onclick=function(){valueC();};
   document.getElementById("boxd").onclick=function(){valueD();};
   document.getElementById("boxb").onclick=function(){valueB()};;

   x=0;
  
   },2000);


clearInterval(set);
   };
   ////function A Begins/////////////////////////
   window.valueD=function fun(){
 
 
  
   
   
   if(response.Questions[BeginnerRandomCount[count]].D === response.Questions[BeginnerRandomCount[count]].ans 
      && BeginCheck == true){
         start_counting=16;
    firstCheckD();
   }
   else  if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].D === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans 
      && IntermediateCheck == true){
          start_counting=16;
         IntermediateCount+=1;
         firstCheckD();
        
   }else{
      wait();
      document.getElementById("boxd").style.backgroundColor="orange";
      if(BeginCheck == true && count < 5){
         if(response.Questions[BeginnerRandomCount[count]].B === response.Questions[BeginnerRandomCount[count]].ans)
          {
            document.getElementById("boxb").style.backgroundColor="green";
          }
         else if(response.Questions[BeginnerRandomCount[count]].A === response.Questions[BeginnerRandomCount[count]].ans)
         {
            document.getElementById("boxa").style.backgroundColor="green";
         }
         else if(response.Questions[BeginnerRandomCount[count]].C === response.Questions[BeginnerRandomCount[count]].ans)
         {
            document.getElementById("boxc").style.backgroundColor="green";
         }
      }
      //////------------------------------------------///////////////////////////////
     if(IntermediateCheck == true && count > 5){
         if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].A === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans) {
            document.getElementById("boxa").style.backgroundColor="green";
         }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].B === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
            document.getElementById("boxb").style.backgroundColor="green";
         }else if(response.Intermediate[IntermediateRandomCount[IntermediateCount]].C === response.Intermediate[IntermediateRandomCount[IntermediateCount]].ans){
            document.getElementById("boxc").style.backgroundColor="green";
         }
      }
      
   }

 
   }
   //////////////////////5050505050505050505050//////////////////////////////////
   //////////////////////5050505050505050505050//////////////////////////////////
   //////////////////////5050505050505050505050//////////////////////////////////
   //////////////////////5050505050505050505050//////////////////////////////////
   //////////////////////5050505050505050505050//////////////////////////////////

   window.fifthy=function(){
   if(turnfifthyOn == true){
      var  randomnumber=Array(0,1,2);
       
       var randomnumberA= randomnumber.sort(function(a, b){return 0.5 - Math.random()});
       
      console.log(randomnumberA);
       
         if((response.Questions[BeginnerRandomCount[count]].A === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
            (response.Questions[IntermediateRandomCount[IntermediateCount]].A ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))  

          {
           if(randomnumberA[0] == 0){
              document.getElementById("b").innerHTML="";
              document.getElementById("c").innerHTML="";
              document.getElementById("boxb").onclick="none";
              document.getElementById("boxc").onclick="none";
             
           }else if(randomnumberA[0] == 1){
            document.getElementById("b").innerHTML="";
            document.getElementById("d").innerHTML="";
            document.getElementById("boxb").onclick="none";
              document.getElementById("boxd").onclick="none";
           }

           else if(randomnumberA[0] == 2){
            document.getElementById("c").innerHTML="";
            document.getElementById("d").innerHTML="";
            document.getElementById("boxc").onclick="none";
            document.getElementById("boxd").onclick="none";
           }
           ///////--end of A-----------////////////////////////////////
         }else if((response.Questions[BeginnerRandomCount[count]].B === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
         (response.Questions[IntermediateRandomCount[IntermediateCount]].D ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
         {
            if(randomnumberA[0] == 0){
               document.getElementById("a").innerHTML="";
               document.getElementById("c").innerHTML="";
               document.getElementById("boxa").onclick="none";
              document.getElementById("boxc").onclick="none";
            }else if(randomnumberA[0] == 1){
             document.getElementById("a").innerHTML="";
             document.getElementById("d").innerHTML="";
             document.getElementById("boxa").onclick="none";
              document.getElementById("boxd").onclick="none";
            }
 
            else if(randomnumberA[0] == 2){
             document.getElementById("c").innerHTML="";
             document.getElementById("d").innerHTML="";
             document.getElementById("boxc").onclick="none";
              document.getElementById("boxd").onclick="none";
            }
            ///////--end of B-----------////////////////////////////////
         }else if((response.Questions[BeginnerRandomCount[count]].C === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
         (response.Questions[IntermediateRandomCount[IntermediateCount]].C ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
         {
            if(randomnumberA[0] == 0){
               document.getElementById("a").innerHTML="";
               document.getElementById("b").innerHTML="";
               document.getElementById("boxa").onclick="none";
               document.getElementById("boxb").onclick="none";
            }else if(randomnumberA[0] == 1){
             document.getElementById("a").innerHTML="";
             document.getElementById("d").innerHTML="";
             document.getElementById("boxa").onclick="none";
             document.getElementById("boxd").onclick="none";
            }
 
            else if(randomnumberA[0] == 2){
             document.getElementById("b").innerHTML="";
             document.getElementById("d").innerHTML=""
             document.getElementById("boxb").onclick="none";
            document.getElementById("boxd").onclick="none";
            }
            
            ///////--end of C-----------////////////////////////////////
         }else if((response.Questions[BeginnerRandomCount[count]].D === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
         (response.Questions[IntermediateRandomCount[IntermediateCount]].D ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
         {
            if(randomnumberA[0] == 0){
               document.getElementById("a").innerHTML="";
               document.getElementById("b").innerHTML="";
               document.getElementById("boxa").onclick="none";
              document.getElementById("boxb").onclick="none";
            }else if(randomnumberA[0] == 1){
             document.getElementById("a").innerHTML="";
             document.getElementById("c").innerHTML="";
             document.getElementById("boxa").onclick="none";
              document.getElementById("boxc").onclick="none";
            }
 
            else if(randomnumberA[0] == 2){
             document.getElementById("b").innerHTML="";
             document.getElementById("c").innerHTML="";
             document.getElementById("boxb").onclick="none";
              document.getElementById("boxc").onclick="none";
            }
         }

   }
         turnfifthyOn = false;
   
   }
///////////////////////////////////////////////////callaaclllacllaclacllalclallcalllclalcllallcllallllclllllllllllla
///////////////////////////////////////////////////callaaclllacllaclacllalclallcalllclalcllallcllallllclllllllllllla
//////////////////////////////////////////////////callaaclllacllaclacllalclallcalllclalcllallcllallllclllllllllllla
///////////////////////////////////////////////////callaaclllacllaclacllalclallcalllclalcllallcllallllclllllllllllla

window.callAfrIEND=function(a){
    start_counting=20;

      var callArray=["80%","50%","70%","60%","75%","55%","95%","85%"];
      var callPerson=["Janet","steve","frank","Dickson","Tony","comfort","grace","mercy","mary"];
      window.callArray1 =callArray.sort(function(a, b){return 0.5 - Math.random()});
      window.callPerson1 =callPerson.sort(function(a, b){return 0.5 - Math.random()});
   setTimeout(() => {
      document.getElementById("modal").innerHTML="hey! i am " +callPerson1[0]+ ", i got your call...";
   }, 2000);
   
   setTimeout(() => {
      document.getElementById("modal1").innerHTML="i think the answer is "+a;
   }, 4000);
   
   setTimeout(() => {
      document.getElementById("modal2").innerHTML="please how sure are?"
   }, 6000);
   
   setTimeout(() => {
      document.getElementById("modal3").innerHTML=callArray1[0]+"  sure";
   }, 8000);
  
   
   
}

window.call=function(){
  let valuecall=true;
   var generateRandomValues = Math.floor((Math.random() * 10) + 1);
   if(valuecall == true){
      if((response.Questions[BeginnerRandomCount[count]].A === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
      (response.Questions[IntermediateRandomCount[IntermediateCount]].A ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
      { 
       if(generateRandomValues == 1 ||generateRandomValues == 2 || 
         generateRandomValues == 3 || generateRandomValues == 4 || generateRandomValues == 5 ||
          generateRandomValues == 6 ||generateRandomValues == 7){
            callAfrIEND("A");
          }else if(generateRandomValues == 8){
            callAfrIEND("C");
          }else if(generateRandomValues == 9){
            callAfrIEND("B");
          }else if(generateRandomValues == 10){
            callAfrIEND("D");
          }
               
      }
   
      if((response.Questions[BeginnerRandomCount[count]].B === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
      (response.Questions[IntermediateRandomCount[IntermediateCount]].B ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
      {
         if(generateRandomValues == 1 ||generateRandomValues == 2 || 
            generateRandomValues == 3 || generateRandomValues == 4 || generateRandomValues == 5 ||
             generateRandomValues == 6 ||generateRandomValues == 7){
               callAfrIEND("B");
             }else if(generateRandomValues == 8){
               callAfrIEND("C");
             }else if(generateRandomValues == 9){
               callAfrIEND("A");
             }else if(generateRandomValues == 10){
               callAfrIEND("D");
             }
      }
   
      if((response.Questions[BeginnerRandomCount[count]].C === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
      (response.Questions[IntermediateRandomCount[IntermediateCount]].C ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
      {
         if(generateRandomValues == 1 ||generateRandomValues == 2 || 
            generateRandomValues == 3 || generateRandomValues == 4 || generateRandomValues == 5 ||
             generateRandomValues == 6 ||generateRandomValues == 7){
               callAfrIEND("C");
             }else if(generateRandomValues == 8){
               callAfrIEND("A");
             }else if(generateRandomValues == 9){
               callAfrIEND("B");
             }else if(generateRandomValues == 10){
               callAfrIEND("D");
             }
      }
   
      if((response.Questions[BeginnerRandomCount[count]].D === response.Questions[BeginnerRandomCount[count]].ans && count < 2) ||
      (response.Questions[IntermediateRandomCount[IntermediateCount]].D ===  response.Questions[IntermediateRandomCount[IntermediateCount]].ans && count > 2))
      {
         if(generateRandomValues == 1 ||generateRandomValues == 2 || 
            generateRandomValues == 3 || generateRandomValues == 4 || generateRandomValues == 5 ||
             generateRandomValues == 6 ||generateRandomValues == 7){
               callAfrIEND("D");
             }else if(generateRandomValues == 8){
               callAfrIEND("C");
             }else if(generateRandomValues == 9){
               callAfrIEND("B");
             }else if(generateRandomValues == 10){
               callAfrIEND("As");
             }
      }
     
      valuecall=false;
      document.getElementById("call").getAttributeNames="NONE"; 
   }

  
   
}

      }
      
      };

      xhttp.open("GET", "../jsonFile/index.json", true);
      xhttp.send();

      
//Math.floor((Math.random() * 10) + 1);