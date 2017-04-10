<?php
class BusinessstaffModel extends CI_Model { 

    public function __construct()
        {
                parent::__construct();
                $this->load->model('UserModel');

        }
    public function get_cv($where = "uid > 0 AND user_type='student'", $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ;       
        return $this->db->select('*')->where($where)->get(USER_TABLE, $offset, $limit)->result_array();
    }
    public function get_cv_id($id){
        $this->db->select('user.*, user_meta.uid, user_meta.meta_key, user_meta.meta_value'); // <-- There is never any reason to write this line!
        $this->db->from('user');        
        $this->db->where('user.uid',$id);
        $this->db->join('user_meta', 'user_meta.uid = user.uid');
        $query = $this->db->get();
        return $query->result_array();
    }
    public function get_message($id , $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ;  
        $where = "mess_id > 0 AND to_id='" .$id."' "  ;  
        return $this->db->select('*')->where($where)->get(MESSAGE_TABLE, $offset, $limit)->result_array();
    }
}
?>