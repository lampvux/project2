<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class StudentModel extends CI_Model {

	public function __construct(){
		parent::__construct();
		$this->load->model('UserModel');
	}

	

}

/* End of file StudentModel.php */
/* Location: ./application/models/StudentModel.php */