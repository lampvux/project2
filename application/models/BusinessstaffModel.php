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
    // get các sinh viên thuộc công ty
    public function get_company_course($where){
         return $this->db->select('*')->where($where)->get(INTERNSHIP_COURCE_TABLE)->result_array();
    }
    public function get_student_course($where){
        return $this->db->select('*')->where($where)->get(INTERNSHIP_STATUS_TABLE)->result_array();
    }
    public function get_student_intern($where){
        return $this->db->select('*')->where($where)->get(USER_TABLE)->result_array();
    }

    // đánh giá sinh viên ? dell biết ts có mấy cái hàm này
    public function add_rate_student($data){
        return $this->db->insert(RATING_TABLE, $data) ? $this->db->insert_id() : 0;
    }
    public function get_rate_student($where){
        return $this->db->select('*')->where($where)->get(RATING_TABLE)->result_array();
    }
    public function update_rate_student($data,$where){
        return $this->db->where($where)->update(RATING_TABLE, $data);
    }
    // get and update mark table
    public function get_mark_student($where){
        return $this->db->select('*')->where($where)->get(MARK_TABLE)->result_array();
    }
    public function update_mark_student($data,$where){
        return $this->db->where($where)->update(MARK_TABLE, $data);
    }

    // get topic
    public function get_topic($where) {
        return $this->db->get_where(TOPIC_TABLE, $where)->result();
    }


    public function create_file_upload($where) {
        $this->db->insert(FILES_TABLE, $where);
        return $this->db->insert_id();
    }

    public function get_outline($where) {
        return $this->db->get_where(OUTLINE_TABLE, $where)->result();
    }

    public function create_outline($where) {
        $this->db->insert(OUTLINE_TABLE, $where);
    }

    public function get_topic_name($where) {
        return $this->db->select('subject_name')->get_where(TOPIC_TABLE, $where)->result()[0]->subject_name;
    }

    public function get_file_name($where) {
        return $this->db->select('file_name')->get_where(FILES_TABLE, $where)->result()[0]->file_name;
    }

    public function get_file_url($where) {
        return $this->db->select('url')->get_where(FILES_TABLE, $where)->result()[0]->url;
    }

    public function rate_student($where) {
        $this->db->insert(MARK_TABLE, $where);
    }

    public function get_mark_value($where) {
        $res = $this->db->select('value')->get_where(MARK_TABLE, $where)->result_array();
        if (count($res)) {
            return $res[0]['value'];
        }
        return '';
    }

    public function delete_file_outline($file_id) {
        $this->db->where(array('file_id' => $file_id));
        $this->db->delete(FILES_TABLE);
        $this->db->where(array('file_id' => $file_id));
        $this->db->delete(OUTLINE_TABLE);
    }
}
?>