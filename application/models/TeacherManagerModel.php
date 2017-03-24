<?php
class TeacherManagerModel extends CI_Model { 

    public function __construct()
        {
                parent::__construct();
                $this->load->model('UserModel');

        }

    public function add_mark($data){

    	 	$key = array_keys($data);
	        $sql = "INSERT INTO `" . $table . "`(" . "`" . implode("`,`",$key) . "`" . ") VALUES (" . "\"" . implode("\",\"",$data) . "\"" . ");";
	        if ( $this->conn->query($sql) )
	            return intval($this->conn->insert_id);
	        else 
	            return false;

	       
    }
}

