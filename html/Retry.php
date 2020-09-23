<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/retry.css">
    <title>retry</title>
</head>
<body>
    <?php
    session_start();
    include_once   "../include/connections.php";
    if(isset($_GET["wrong"])){
        $name=$_SESSION["user_name"];
        $passw=$_SESSION["user_password"];
        $check = "SELECT * FROM users where user_name='$name' AND user_password ='$passw'";
        $QueryCheck=mysqli_query($conn, $check);
        $resultCheck = mysqli_num_rows($QueryCheck);
if($row = mysqli_fetch_assoc($QueryCheck)){
    $value=$row["user_money"];
     $newValue=$row["user_money"] - $row["user_amount"];

     $update="UPDATE users SET user_money = '$newValue' 
     WHERE user_name='$name' AND user_password='$passw'"; 
    mysqli_query($conn, $update);
}        
        echo "<p style='color:white'>$value<p>";
    }else{
        echo "<p style='color:white'>not correct</php>";
    }
    ?>
   <div class="container">
       <div class="wrapper">
        <a href="#">Retry</a>
        <a href="mainpageChoice.php">Main Menu</a>
        <a href="#">Logout</a>
       </div>
   </div>
</body>
</html>