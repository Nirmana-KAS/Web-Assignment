<?php
        if(isset($_POST['dayNumber'])){
            $dayNumber = $_POST['dayNumber'];
            
            switch($dayNumber){
                case 1:
                    $dayName = "Monday";
                    break;
                case 2:
                    $dayName = "Tuesday";
                    break;
                case 3:
                    $dayName = "Wednesday";
                    break;
                case 4:
                    $dayName = "Thursday";
                    break;
                case 5:
                    $dayName = "Friday";
                    break;
                case 6:
                    $dayName = "Saturday";
                    break;
                case 7:
                    $dayName = "Sunday";
                    break;
                default:
                    $dayName = "Invalid Number";
            }
            
            echo "Number: " . $dayNumber . "<br>";
            echo "Day: " . $dayName;
        }
?>