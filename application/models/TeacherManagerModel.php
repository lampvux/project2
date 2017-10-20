<?php
class TeacherManagerModel extends CI_Model { 

    public function __construct(){
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
    public function get_mark($where = 'mark_id > 0', $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ; 
        return $this->db->select('*')->where($where)->get(MARK_TABLE, $offset, $limit)->result_array();
        
    } 

    public function add_mark($data){
        return $this->db->insert(MARK_TABLE, $data) ? $this->db->insert_id() : 0;
    }    
    public function send_mail($data){

    }
    public function bus_list($where = "company_id > 0 ", $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ;       
        return $this->db->select('*')->where($where)->get(COMPANY_TABLE, $offset, $limit)->result_array();
    }
    public function get_bus_recruit($where){
        return $this->db->where($where)->get(RECRUITMENT_TABLE)->result_array();
    }
    public function update_bus_recruit($data,$where){
        return $this->db->where($where)->update(RECRUITMENT_TABLE, $data);
    }
}

