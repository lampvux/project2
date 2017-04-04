<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Student extends MY_Controller {

	public function __construct() {
		parent::__construct();
	}

	public function index(){
		self::load_header();
		$this->load->view('student/student_cv');
		$this->load->view('student/footer');
	}


	protected function load_header(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['title'] = $data['user']['fullname'] != '' ? $data['user']['fullname'] . ' - Hồ sơ' : $data['user']['username'] . ' - Hồ sơ' ;
		$data['ci_nonce'] = $this->ci_nonce;
		$data['is_student_cv'] = true;
		$this->load->view('student/student_header', $data);
		$this->load->view('student/student_sidebar');
	}

	public function update_cv_data(){
		$meta_key = $this->input->post('meta_key');
		if (isset($meta_key)) {
			$where = ['uid'=>$this->session->uid];
			$where['meta_key'] = $meta_key;
			if ( empty( $this->UserModel->get_user_meta($where) ) ) {
				$this->UserModel->add_user_meta([
						'meta_key' => $meta_key,
						'meta_value' => $this->input->post('meta_value'),
						'uid' => $this->session->uid
					]);
			}else{
				$this->UserModel->update_user_meta(
					['meta_value' => $this->input->post('meta_value')], 
					$where
				);
			}
		}
	}

	public function update_main_data(){
		$meta_key = $this->input->post('meta_key');
		if (isset($meta_key)) {
			$where = ['uid'=>$this->session->uid];
			$this->UserModel->update_user_data(
				[$meta_key => $this->input->post('meta_value')], 
				$where
			);
			
		}
	}


	public function add_new_meta_data(){
		$meta_key = $this->input->post('meta_key');
		if (isset($meta_key)) {
			$this->UserModel->add_user_meta([
				'meta_key' => $meta_key,
				'meta_value' => $this->input->post('meta_value'),
				'uid' => $this->session->uid
			]);
			
		}
	}

	public function delete_meta_data(){
		$meta_key = $this->input->post('meta_key');
		if (isset($meta_key)) {
			$this->UserModel->delete_once_user_meta([
				'meta_key' => $meta_key,
				'meta_value' => $this->input->post('meta_value'),
				'uid' => $this->session->uid
			]);
			
		}
	}


}

/* End of file Student.php */
/* Location: ./application/controllers/Student.php */