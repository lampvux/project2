<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Student extends MY_Controller {

	public function __construct() {
		parent::__construct();
	}

	public function index(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['title'] = $data['user']['fullname'] != '' ? $data['user']['fullname'] . ' - Trang cá nhân' : $data['user']['username'] . ' - Hồ sơ' ;
		$data['ci_nonce'] = $this->ci_nonce;
		$this->load->view('student/student_header', $data);
		$this->load->view('student/student_sidebar');
		$this->load->view('student/student_cv');
		$this->load->view('profile_footer');
	}


}

/* End of file Student.php */
/* Location: ./application/controllers/Student.php */