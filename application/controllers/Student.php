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

	/**
	 * Cập nhật dữ liệu CV đc gọi bới ajax từ giao diện
	 */
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

	/**
	 * Cập nhật thông tin chính của người dùng
	 */
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


	/**
	 * Thêm thông tin phụ mới của người dùng
	 */
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


	/**
	 * Xóa thông tin phụ
	 */
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


	/**
	 * Lấy tất cả các kỹ năng của sinh viên
	 */
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

	/**
	 * Thêm kỹ năng mới
	 */
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

	/**
	 * Xử lý đăng ký nguyện vọng
	 */
	public function add_aspiration(){
		
	}


	/**
	 * Xem toàn bộ các chủ  đề
	 */
	public function view_topic($page = 1){
		self::load_header(false, 'Xem topic');
		$data = [];
		$page = $page == 'page' ? 1 : $page;
		$data['topics'] = $this->UserModel->get_topic(($page-1)*6);
		$data['companies'] = $this->UserModel->get_companies(); 
		$data['teachers'] = $this->UserModel->get_curator_teachers();
		$data['is_topic_page'] = true;
		$this->load->library('pagination');
		
		$config['base_url'] 		= base_url() . "student/view_topic/page/";
		$config['total_rows'] 		= $this->UserModel->get_total_topic_valid();
		$config['per_page'] 		= 6;
		$config['num_links'] 		= 3;
		$config['full_tag_open'] 	= '<ul class="pagination">';
		$config['full_tag_close'] 	= '</ul>';
		$config['first_link'] 		= 'Trang đầu';
		$config['last_link'] 		= 'Trang cuối';
		$config['next_link'] 		= '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
		$config['next_tag_open'] 	= '<li>';
		$config['next_tag_close'] 	= '</li>';
		$config['first_tag_open'] 	= '<li>';
		$config['last_tag_open'] 	= '<li>';
		$config['first_tag_close'] 	= '</li>';
		$config['last_tag_close'] 	= '</li>';
		$config['prev_link'] 		= '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
		$config['prev_tag_open'] 	= '<li>';
		$config['prev_tag_close'] 	= '</li>';
		$config['cur_tag_open'] 	= '<li class="active"><a href="#">';
		$config['cur_tag_close'] 	= '</a></li>';
		$config['num_tag_open'] 	= '<li>';
		$config['num_tag_close'] 	= '</li>';
		$config['use_page_numbers'] = TRUE;

		
		$this->pagination->initialize($config);
		
		$data['pagination'] = $this->pagination->create_links();

		$this->load->view('student/student_view_topic', $data);
		$this->load->view('student/footer');
	}

	/**
	 * Tìm kiếm các topics
	 */
	public function search_topics(){
		$action = $this->input->post('action');
		if (isset($action) && $action === 'search_topics') {
			$teachers = $this->input->post('teachers');
			$companies = $this->input->post('companies');
			$skills = $this->input->post('skills');
			$where = "";
			if ($teachers != '') {
				$where .= ' professor_id IN ('. $teachers. ') ';
				$this->session->set_userdata('teachers_id', $teachers);
			}

			if ($companies != '') {
				if ($where != '') {
		    		$where .= " OR ";
	    		}
		    	$where .= "company_id IN (" . $companies . ")";
	    		
				$this->session->set_userdata('companies_id', $companies);
			}
			$where .= " AND is_approved=1";
			$this->load->library('pagination');
		
			$config['base_url'] 		= base_url() . "student/view_topic/page/";
			$config['total_rows'] 		= $this->UserModel->get_total_topic_valid($where);
			$config['per_page'] 		= 6;
			$config['num_links'] 		= 3;
			$config['full_tag_open'] 	= '<ul class="pagination">';
			$config['full_tag_close'] 	= '</ul>';
			$config['first_link'] 		= 'Trang đầu';
			$config['last_link'] 		= 'Trang cuối';
			$config['next_link'] 		= '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
			$config['next_tag_open'] 	= '<li>';
			$config['next_tag_close'] 	= '</li>';
			$config['first_tag_open'] 	= '<li>';
			$config['last_tag_open'] 	= '<li>';
			$config['first_tag_close'] 	= '</li>';
			$config['last_tag_close'] 	= '</li>';
			$config['prev_link'] 		= '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
			$config['prev_tag_open'] 	= '<li>';
			$config['prev_tag_close'] 	= '</li>';
			$config['cur_tag_open'] 	= '<li class="active"><a href="#">';
			$config['cur_tag_close'] 	= '</a></li>';
			$config['num_tag_open'] 	= '<li>';
			$config['num_tag_close'] 	= '</li>';
			$config['use_page_numbers'] = TRUE;

		
			$this->pagination->initialize($config);
			self::render_topic_template($this->UserModel->get_topic(0, $where), $this->pagination->create_links());
		}
	}

	private function render_topic_template($topics, $pagination){
		if (count($topics)):
			foreach ($topics as $topic): ?>
                <div class="media search-media">
                    <div class="media-left">
                        <img class="media-object" src="assets/img/topic.png" />
                    </div>

                    <div class="media-body">
                        <div>
                            <h4 class="media-heading">
                                <?= $topic['subject_name'] ?>
                            </h4>
                        </div>
                         <p>
                            <strong>Công ty: </strong><?= $topic['company_name'];?>
                        </p>
                        <p class="clearfix">
                            <strong class="pull-left">Mô tả: </strong>
                            <?php $des = $topic['description'];
                            $first = implode(' ', array_slice(explode(' ', $des), 0, 20));
                            $rest = str_replace($first, '', $des); ?>
                            <span class="pull-left"><?= $first ?> &nbsp;</span>
                            <?php if ($rest != ''): ?>
                                <span class="collapse pull-left" id="rest_of_<?= $topic['topic_id'] ?>">
                                    <?= $rest ?>
                                </span>
                                <button class="btn btn-white btn-minier btn-primary" type="button" data-toggle="collapse" data-target="#rest_of_<?= $topic['topic_id'] ?>" aria-expanded="false" aria-controls="rest_of_<?= $topic['topic_id'] ?>"></button>
                            <?php endif ?>
                        </p>
                        <ul class="skill_list">
                            <?php foreach ($topic['skills_required'] as $skill): ?>
                                <li><?= $skill['skill_name'] ?></li>
                            <?php endforeach ?>
                        </ul>
                        <div class="search-actions text-center">
                            <img src="<?= @($topic['user_avatar']['avatar'] != '') ? $topic['user_avatar']['avatar'] : DEFAULT_AVATAR ?>" alt="Ảnh của <?= $topic['username'];?>" class="img-reponsive" with="70" height="70">
                            <div class="space"></div>
                            <span class="clearfix professor">
                                <?= ($topic['fullname'] != '') ? $topic['fullname'] :$topic['username'] ?>
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div class="space"></div>
            <?php endforeach ?>
            <?= $pagination; ?>
        <?php else: ?>
            <h2>Không có kết quả nào!</h2>
        <?php endif;
	}

	public function get_skills($key){
		$skills = $this->UserModel->get_skill_by_condition("skill_name LIKE '%".$key."%'");
		$res = [];
		if (count($skills)) {
			foreach ($skills as $skill) {
				array_push($res, $skill['skill_name']);
			}
		}
		echo json_encode($res);
	}

	/**
	 * Xem điểm sinh viên
	 */
	public function view_mark(){

	}

	/**
	 * Menu quản lý công việc của sinh viên
	 * Xem các task, cập nhật trạng thái công việc
	 */
	public function workspace(){

	}

	/**
	 * Xem toàn bộ thông báo
	 */
	public function view_noti(){

	}


	/**
	 * gửi khiếu nại
	 * Có thể là yêu cầu sửa điểm, hoặc khiếu nại về quá trình thực tập
	 */
	public function add_complaint(){

	}


	/**
	 * Gửi đánh giá về quá trình thực tập
	 */
	public function add_rate(){
		
	}

}

/* End of file Student.php */
/* Location: ./application/controllers/Student.php */