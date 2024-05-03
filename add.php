<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./bootstrap.css">
</head>
<body>

<div class="container">
    <h1 class="text-center page-header">Add page</h1>
    <div class="row">
        <div class="col-1"></div>
        <div class="col-9"><a href="index.php"><button  class='btn btn-dark'>Back</button></a>
            <form  method="post">
                <input type="text" class="form-control mb-3 mt-3" name="name" placeholder="Wallet Address">
                <input type="submit" class="btn btn-primary" value="Save" name="Save" id="save">
            </form>            
        </div>
    </div>
</div>

<?php 
    if(isset($_POST['Save'])){

        $data = file_get_contents('data.json');
        $data = json_decode($data,true);

        if($_POST['name'] == ""  ){
            echo "<div id='warn' class='warn'><button id='close' class='btn-close mt-1'></button><div>Fill the inputs</div> </div>";
        }

        else{

            $input = array(
                "name" => $_POST['name']
                
            );
    
            $data[] = $input;
            $data = json_encode($data, JSON_PRETTY_PRINT);
            file_put_contents('data.json', $data);
            // header('location: index.php');
            echo " <div class='alertDiv' id='alertDiv'><div class='alert-msg' id='alert-msg'><div>Form Submitted</div><img class='icon' src='./correct-success-tick-svgrepo-com.svg'><button id='closeAlert'>Ok</button></div></div>";
        }
        
    }


?>
<script src="./redirect.js"></script>
</body>
</html>