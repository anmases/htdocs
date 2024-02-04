<?php
include 'constants.php';
class Dao{
    private $connection;
    private $pages = 50;
    public function __construct(){
        $this->connection = new mysqli(host, user, password, "ferrocarril", port);
        if ($this->connection->connect_error) {
          die("Connection failed: " . $this->connection->connect_error);
        }
    }
    public function read($table, $extra = null){
        $page = 0;
        $query = "SELECT * FROM $table";
        if(isset($extra["page"])){
            $page = $extra["page"];
            unset($extra["page"]);
        }
        if($extra != null){
            $query .= " WHERE";
            foreach($extra as $key=>$value){
                $query .= " $key = '$value'";
                if($extra[$key] != end($extra)){
                    $query .= " AND ";
                }
            }
        }
        if($page > 0){
            $since = (($page-1) * $this->pages);
            $query .= " LIMIT $since, $this->pages";
        }
        else{
            $query .= " LIMIT 0, $this->pages";
        }
        $results = $this->connection->query($query);
        $resultArray= array();
        foreach($results as $value){
            $resultArray[] = $value;
        }
        return $resultArray;
    }
    public function create($table, $data){
        $fields = implode(',', array_keys($data));
        $values = '"';
        $values .= implode('","', array_values($data));
        $values .= '"';

        $query = "INSERT INTO $table ($fields) VALUES ($values)";
        $check = $this->connection->query($query);
        if($check){
            return array("result"=>"ok");
        }else{
            return array("result"=>"error", "cause"=>"insertion in database failed");
        }
        
    }
    public function update($table, $data, $id){
        $query = "UPDATE $table SET ";
        foreach($data as $key=>$value){
            $query .= "$key = '$value'";
            if(sizeof($data) > 1 && $key != array_key_last($data)) $query .= " , ";
        }
        $query .= " WHERE id = $id";
        $check = $this->connection->query($query);
        if($check){
            return array("result"=>"ok");
        }else{
            return array("result"=>"error", "cause"=>"insertion in database failed");
        }
    }
    public function delete($table, $id){
        $query = "DELETE FROM $table WHERE id = $id";
        $this->connection->query($query);
        return $this->connection->affected_rows;
    }
}
?>