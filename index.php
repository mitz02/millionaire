<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel = "stylesheet" href = "css/main.css">
<script type="text/javascript" src="js/test2.js"></script>
<title>Question</title>
</head>
<body>
 <div class="overall">
  <div class="container-fluid" >
    <!-- Modal -->
  <div class="modal fade" id="call" onclick="call();" tabindex="-1" aria-labelledby="call" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color:rgb(49,6,234);">
          
            <h5 class="modal-title" id="call" style="color: white;">calling......</h5>
            <button type="button" id="call" class="close" data-dismiss="modal" aria-lab el="Close">
              <span aria-hidden="true">&times;</span>
            </button>
         
          <div style="color: white;" class="modal-body">
            
            <p id="modal"></p>
            <p id="modal1"></p>
            <p id="modal2"></p>
            <p id="modal3"></p>
          </div>
          
            
          </div>
        </div>
      </div>
    </div>
  
  <div class="main-container">
      <div class="wrapper">
          <h2>Who wants to be a Millionaire!!!!</h2>
          <div class="container-box">
          <p id="que">Who was the first person to buy a car ?</p>
          <div class="icons">
          <div class="call" id="call"  onclick="call()";  data-toggle="modal" data-target="#call"><a href="#"><img src="../img/phone-solid.svg" alt=""
               width="30px" height="30px" style="margin-left: 10px;"></a></div>
          <div class="fifthy" onclick="fifthy();"><a href="#" style="width: 100%; ">50%</a></div>  
          <div  class="time" ><p id="time">0</p></div> 
          </div>
          
  
  
  
          </div>
          <div class="option-box">
          <div class="box-container">
          <div class="first-set">
          <div class="boxa" id="boxa"  onclick="valueA();"><p class="box-p"  style="text-align: center;" id="a">A: Answer</p></div>
          <div class="boxa" id="boxb"  onclick="valueB();"><p class="box-p"  style="text-align: center;" id="b">B: Answer</p></div>
          </div>
          <div class="second-set">
          <div class="boxb" id="boxc" onclick="valueC();"><p class="box-p" id="c" style="text-align: center;" id="c">C: Answer</p></div>
          <div class="boxb" id="boxd" onclick="valueD();"><p class="box-p" id="d" style="text-align: center;" id="d">D: Answer</p></div>
          </div>
          </div>
          
          </div>
          </div>
  
          <div class="extra">
              
              <p id="11">$250,000</p>
              <p id="10"> $64,000</p>
              <p id="9">$32,000</p>
              <p id="8">$16,00</p>
              <p id="7">$8,000</p>
              <p id="6">$4,000</p>
              <p id="5">$2,000</p>
              <p class="five" id="4">$1,000</p>
              <p id="3">$500</p>
              <p id="2">$300</p>
              <p id="1">$200</p>
              <p id="0">$100</p>
              
           </div>
           
  </div>
   
  
  </div>
 </div> 


<script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.bundle.js"></script>

</body>
</html>