<?php
        $fruits = array("Apple", "Banana", "Orange", "Grapes", "Mango");
    ?>
    
    <h2>List of Fruits:</h2>
    <ul>
        <?php
            foreach ($fruits as $fruit) {
                echo "<li>$fruit</li>";
            }
?>