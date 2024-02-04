<?php
include 'src/response.php';
include 'src/dao.php';
abstract class Service{
    private $table;
    private $allowed_get;
    private $allowed_post;
    private $dao;
    public function __construct($table, $allowed_get, $allowed_post){
        $this->dao = new Dao();
        $this->table = $table;
        $this->allowed_get = $allowed_get;
        $this->allowed_post = $allowed_post;
    }
    public function get($params){
        foreach($params as $key=>$param){
            if(!in_array($key, $this->allowed_get)){
                unset($params[$key]);
                header("HTTP/1.1 405 Request Not Allowed");
                Response::result(405, array("result" => "error", "cause"=>"Request not allowed"));
                exit();             
            }
        }
        $items = $this->dao->read($this->table, $params);
        return $items;
    }
    public function post($data){
        if(!isset($data)) {
            header("HTTP/1.1 400 Request Body Error");
            Response::result(400, array("result" => "error", "cause"=>"Request body error"));
            exit(); 
        }
        foreach($data as $key=>$value){
            if(!in_array($key, $this->allowed_post)){
                unset($params[$key]);
                header("HTTP/1.1 405 Request Not Allowed");
                Response::result(405, array("result" => "error", "cause"=>"Request not allowed"));
                exit();             
            }
        }
        if($this->validate($data)){
            return $this->dao->create($this->table, $data);
        }else{
            header("HTTP/1.1 400 Data fields not valid");
            Response::result(400, array("result" => "error", "cause"=>"Data fields not valid"));
            exit();
        }
    }
    public function put($data, $id){
         
        if(!isset($data) || !isset($id) || empty($data) || empty($id)){
            header("HTTP/1.1 400 Request not valid");
            Response::result(400, array("result" => "error", "cause"=>"Request not valid"));
            exit();
        }
        foreach($data as $key=>$value){
            if(!in_array($key, $this->allowed_post)){
                unset($params[$key]);
                header("HTTP/1.1 405 Request Not Allowed");
                Response::result(405, array("result" => "error", "cause"=>"Request not allowed"));
                exit();             
            }
        }
        return $this->dao->update($this->table, $data, $id);
    }
    public function delete($id){
        if(!isset($id) || empty($id)){
            header("HTTP/1.1 400 Request not valid");
            Response::result(400, array("result" => "error", "cause"=>"Request not valid"));
            exit();
        }
        $result= $this->dao->delete($this->table, $id);
        if($result){
            return array("result"=>"ok");
        }else{
            return array("result" => "error", "cause"=>"No changes");
        }
    }
    protected abstract function validate($data);
}
?>