<?php
    $uname=$_POST['uname'];
    $mobil=$_POST['mobil'];
    $pwd=$_POST['repwd'];

    //Connection Establishment
    $conn = new mysqli('localhost','root','','salvatoreschool');
    
    //Error Detection
    if($conn->connect_error){
        die('Connection Failed : '. $conn->connect_error);
    }

    else{
        $stmt = $conn->prepare("insert into registration(Username, Mobile, Password) values(?, ?, ?)");
        $stmt->bind_param("sss", $uname, $mobil, $pwd);
        $stmt->execute();
        echo "<a href='LogInSucessfull.html'></a>";
        header('Location: LogInSucessfull.html');
        exit();
        $stmt->close();
        $conn->close();
    }   
?>