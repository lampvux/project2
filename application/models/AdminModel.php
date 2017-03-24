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
     * Lấy Điểm của sinh viên
     * @param 
     * EX: 
     * @return Boolean
     */
    public function get_mark($where){
        return $this->db->where($where)->get(MARK_TABLE)->result_array();
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
    public function set_setting($where){       
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
     
            
}

/* End of file AdminModel.php */
/* Location: ./application/models/AdminModel.php */