<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Student extends MY_Controller {

	public function __construct() {
		parent::__construct();
	}

	public function index(){
		self::load_header(true);
		$this->load->view('student/student_cv');
		$this->load->view('student/footer');
	}


	protected function load_header($is_student_cv = false, $title = "Hồ sơ"){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['title'] = $data['user']['fullname'] != '' ? $data['user']['fullname'] . ' - ' . $title : $data['user']['username'] . ' - ' . $title ;
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


	public function get_all_skills(){
		$action = $this->input->post('action');
		if (isset($action) && $action == 'get_skills') {
			$skills = $this->UserModel->get_skills();
			$res = "";
			if (count($skills)) {
				foreach ($skills as $skill) {
					$res .= $skill['skill_name'] . ",";
				}
			}
			echo $res;
		}
	}


	public function add_new_skill(){
		$action = $this->input->post('action');
		if (isset($action) && $action == 'add_new_skill') {
			$data = [
				'skill_name' => $this->input->post('skill_name'),
				'cat_id' => '0'
			];
			$skill = $this->UserModel->get_skill_by_condition(['skill_name' => $data['skill_name'] ]);
			if (empty($skill)) {
				$this->UserModel->add_new_skill($data);
			}
			$this->UserModel->add_user_meta([
				'meta_key' => "skills",
				'meta_value' => $data['skill_name'] . "_" . $this->input->post('percent') . "_" . $this->input->post('color'),
				'uid' => $this->session->uid
			]);
		}
	}


	public function add_aspiration(){
		
	}


	public function view_topic($page = 0){
		self::load_header(false, 'Xem topic');
		$data = [];
		// $data['topics'] = $this->UserModel->get_topic($page);
		$this->load->library('pagination');
		
		$config['base_url'] = base_url() . "student/view_topic/";
		$config['total_rows'] = $this->UserModel->count_all_table(TOPIC_TABLE);
		$config['per_page'] = PER_PAGE;
		$config['num_links'] = 5;
		$config['full_tag_open'] = '<p>';
		$config['full_tag_close'] = '</p>';
		$config['first_link'] = 'First';
		$config['first_tag_open'] = '<div>';
		$config['first_tag_close'] = '</div>';
		$config['last_link'] = 'Last';
		$config['last_tag_open'] = '<div>';
		$config['last_tag_close'] = '</div>';
		$config['next_link'] = '&gt;';
		$config['next_tag_open'] = '<div>';
		$config['next_tag_close'] = '</div>';
		$config['prev_link'] = '&lt;';
		$config['prev_tag_open'] = '<div>';
		$config['prev_tag_close'] = '</div>';
		$config['cur_tag_open'] = '<b>';
		$config['cur_tag_close'] = '</b>';
		
		$this->pagination->initialize($config);
		
		// $data['pagination'] = $this->pagination->create_links();
		$this->load->view('student/footer');
	}

}

/* End of file Student.php */
/* Location: ./application/controllers/Student.php */