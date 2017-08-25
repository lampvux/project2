<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserModel extends CI_Model {

	public function __construct()
	{
		parent::__construct();
		
	}

	//==================================================================================
	//								COMPANY ACTION
	//==================================================================================
	

	/**
	 * Thêm công ty vào db
	 * @param [array] $data [chứa thông tin cơ bản của công ty]
	 * EX: $data = [
	 * 		'company_name' 			=> 'Tên công ty là gì cũng đc nà', 
	 * 		'company_address' 		=> 'số 1 đại cồ việt', 
	 * 		'company_domain' 		=> 'domain.com.vn',
	 * 		'company_date_created' 	=> '2000-05-15'
	 * 	]
	 * 	@return boolean
	 */
	public function add_company($data){
		return $this->db->insert(COMPANY_TABLE, $data) ? $this->db->insert_id() : 0;
	}

	/**
	 * Lấy thông tin cụ thể của công ty
	 * @param [array|srting] $where [Điều kiện để lấy thông tin]
	 * EX: $where = ['company_id' => 1]
	 * @return Boolean
	 */
	public function get_precifix_company($where){
		return $this->db->select('*')->where($where)->get(COMPANY_TABLE)->result_array();
	}


	/**
	 * Lấy thông tin của nhiều công ty
	 * @param [array|srting] $where [Điều kiện để lấy thông tin, bố trống thì sẽ lấy hết]
	 * EX: $where = ['company_id' => 1]
	 * @return Boolean
	 */
	public function get_companies($where = 'company_id > 0', $limit = 0, $offset = 0){
		$offset = $offset > 0 ? $offset : 0 ;
		$limit = $limit > 0 ? $limit : PER_PAGE ;
		return $this->db->select('*')->where($where)->get(COMPANY_TABLE, $offset, $limit)->result_array();
	}


	/**
	 * Lấy thông tin cụ thể của công ty
	 * @param [array] $data [chứa thông tin cần cập nhật]
	 * EX: $where = ['company_name' => "Một cái tên khác của công ty mà bạn muốn thay"]
	 * @param [array|srting] $where [Điều kiện để cập nhật]
	 * EX: $where = ['company_id' => 1], $where = 'company_id=1';
	 * @return Boolean
	 */
	public function update_company($data, $where){
		return $this->db->where($where)->update(COMPANY_TABLE, $data);
	}


	/**
	 * Xóa bỏ thông tin của một hoặc nhiều công ty nào đó
	 * @param  [array|string] $where [Điều kiện để xóa, nếu trống thì sẽ xóa hết]
	 * @return [Boolean]
	 */
	public function delete_company($where = '1'){
		return $this->db->where($where)->delete(COMPANY_TABLE);
	}


	//==================================================================================
	//								USERS ACTION
	//==================================================================================
	

	/**
	 * Thêm đối tượng người dùng
	 * @param [array] $data [chứa thông tin cơ bản của người dùng]
	 * EX: $data = [
	 * 		'fullname' 			=> 'Nguyễn Tiên Đạt', 
	 * 		'username' 		=> 'some_user_name_123', 
	 * 		'password' 		=> 'cds6fg434h3jvg2v2v43hrdhewvgv44', // Đã đc mã hóa
	 * 		'email' 	=> 'example@gmail.com',
	 * 		'user_type' => STUDENT_USER_TYPE //Hằng số đc lưu trong file config/constants.php
	 * 	]
	 */
	public function add_user($data){
		return $this->db->insert(USER_TABLE, $data) ? $this->db->insert_id() : 0;
	}

	/**
	 * Thêm thông tin phụ của người dùng
	 * @param [array] $data [chứa thông tin cơ bản của người dùng]
	 * EX: $data = [
	 * 		'uid' 			=> 12, 
	 * 		'meta_key' 		=> 'que_quan', 
	 * 		'meta_value' 	=> 'Hà Nội Bách Khoa'
	 * 	]
	 */
	public function add_user_meta( $data ){
		return $this->db->insert(USER_META_TABLE, $data);
	}

	/**
	 * Sửa đổi thông tin meta của người dùng
	 * @param [array] $data [chứa thông tin cơ bản của người dùng]
	 * EX: $data = [
	 * 		'meta_key' 		=> 'que_quan', 
	 * 		'meta_value' 	=> 'Hà Nội Bách Khoa'
	 * 	]
	 * 	@param [array|string] $where [Điều kiệu để sửa]
	 * 	@return Boolean
	 */
	public function update_user_meta( $data, $where ){
		return $this->db->where($where)->update(USER_META_TABLE, $data);
	}
	

	/**
	 * Sửa đổi thông tin chính của người dùng
	 * @param [array] $data [chứa thông tin cơ bản của người dùng]
	 * EX: $data = [
	 * 		'fullname' 		=> 'Nguyễn Tiên Đạt', 
	 * 		'user_type' 	=> ADMIN_USER_TYPE
	 * 	]
	 * 	@param [array|string] $where [Điều kiệu để sửa]
	 * 	@return Boolean
	 */
	public function update_user_data( $data, $where ){
		return $this->db->where($where)->update(USER_TABLE, $data);
	}

	/**
	 * Lấy thông tin chính của user
	 * @param  [array|string] $where [Điều kiện lấy thông tin]
	 * @return [array]        [mảng thông tin]
	 */
	public function get_user_data($where){
		return $this->db->where($where)->get(USER_TABLE)->result_array();
	}


	/**
	 * Lấy thông tin phụ của user
	 * @param  [array|string] $where [Điều kiện lấy thông tin]
	 * @return [array]        [mảng thông tin]
	 */
	public function get_user_meta($where){
		return $this->db->where($where)->get(USER_META_TABLE)->result_array();
	}

	/**
	 * Xoá thông tin phụ của user
	 * @param  [array|string] $where [Điều kiện xóa thông tin]
	 * @return [Boolean]
	 */
	public function delete_user_meta($where){
		return $this->db->where($where)->delete(USER_META_TABLE);
	}


	public function delete_user($where){
		$uid = $this->db->select('uid')->where($where)->get(USER_TABLE)->result_array();
		if (empty($uid)) {
			return false;
		}
		$uid = $uid[0]['uid'];
		self::delete_user_meta("uid={$uid}");
		return $this->db->where("uid={$uid}")->delete(USER_TABLE);
	}


}

/* End of file UserModel.php */
/* Location: ./application/models/UserModel.php */

?>