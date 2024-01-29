<?php
    $todo_list = file_get_contents('../api/todolist.json');

    header('Content-type: application/json');

    echo $todo_list;
?>