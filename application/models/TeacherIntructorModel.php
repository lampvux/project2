<?php
class TeacherIntructorModel extends CI_Model { 

    public function __construct()
        {
                parent::__construct();
                $this->load->model('UserModel');

        }
   public function get_topic_aprove($where = 'topic_id > 0 AND is_approved = 1', $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ; 
        return $this->db->select('*')->where($where)->get(TOPIC_TABLE, $offset, $limit)->result_array();
        
    } 
    
    public function get_mark(){
        $this->db->select('*');
        $this->db->from('mark a'); 
        $this->db->join('internship_status b', 'b.uid=a.student_id', 'left');
        $this->db->join('internship_cource c', 'c.cource_id=b.cource_id', 'left');
        $this->db->join('user d', 'd.uid=b.uid', 'left');
        $this->db->where("a.type='mark'");
        $query = $this->db->get(); 
            if($query->num_rows() != 0)
            {
                return $query->result_array();
            }
            else
            {
                return false;
            }

    } 

    public function add_mark($data){

            $key = array_keys($data);
            $sql = "INSERT INTO `" . $table . "`(" . "`" . implode("`,`",$key) . "`" . ") VALUES (" . "\"" . implode("\",\"",$data) . "\"" . ");";
            if ( $this->conn->query($sql) )
                return intval($this->conn->insert_id);
            else 
                return false;
           
    }    
    public function send_mail($data){

    }
   
    
}

