<?php
class AdminModel extends CI_Model { 

    public function __construct()
        {
                parent::__construct();
                $this->load->model('UserModel');

        }
    
    /**
     * Check email hợp lệ của sinh viên
     * @param 
     * EX: 
     * @return Boolean
     */
    public function valid_school_email($data){
    
    	}
    /**
     * Check email hợp lệ của doanh nghiệp - công ty
     * @param 
     * EX: 
     * @return Boolean
     */
    public function valid_company_mail($data){
         
    	}
    /**
     * Check Domain hợp lệ của Doanh Nghiệp
     * @param 
     * EX: 
     * @return Boolean
     */
    public function check_valid_domain($data, $where){
          
        }
    /**
     * get tất cả user
     * @param 
     * EX: xem user trong site
     * @return Boolean
     */
    public function get_user($where = 'uid > 0', $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ;       
        return $this->db->select('*')->where($where)->get(USER_TABLE, $offset, $limit)->result_array();
        }
        
    /**
     * Lấy Điểm của sinh viên
     * @param 
     * EX: 
     * @return Boolean
     */
    public function get_mark($where = 'mark_id > 0', $limit = 0, $offset = 0){
        $offset = $offset > 0 ? $offset : 0 ;
        $limit = $limit > 0 ? $limit : PER_PAGE ; 
        return $this->db->select('*')->where($where)->get(MARK_TABLE, $offset, $limit)->result_array();
        
        }

    /**
     * get Setting cho Site
     * @param 
     * EX: các giá trị setting cho site
     * @return Boolean
     */
    public function get_setting($where){       
        return $this->db->where($where)->get(SETTING_TABLE)->result_array();
        }

    /**
     * set Setting cho Site
     * @param 
     * EX: các giá trị setting cho site
     * @return Boolean
     */
    public function set_setting($data){       
        return $this->db->insert(SETTING_TABLE, $data);
        }

    /**
     * update Setting cho Site
     * @param array[string] $data mảng các giá trị setting cho site
     * EX: $data= {'facebook' => 'http://facebook.com', 'twitter' => 'https://twitter.com'} là mảng các giá trị setting cho site
     * @return Boolean
     */
    public function update_setting($data,$where){       
        return $this->db->where($where)->update(SETTING_TABLE, $data);
        }
    public function delete_user($where) {
        return $this->UserModel->delete_user($where);
    }
    /**
     * lấy danh sách công ty tuyển thực tập
     * @param 
     *
     * @return Boolean
     */
    public function get_company_list($where){
        return $this->db->where($where)->get(RECRUITMENT_TABLE)->result_array();
    }
            
}

/* End of file AdminModel.php */
/* Location: ./application/models/AdminModel.php */