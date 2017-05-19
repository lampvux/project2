<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Curator_teacher extends CI_Controller {

	public function __construct()
    	{
        	parent::__construct();
        	$this->load->model('UserModel');
        	$this->load->model('TeacherManagerModel');
        }

	public function index()
	{

		$this->load->view('teacher_ql/teacher_ql_header');
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_content');
		$this->load->view('dashboard/footer');
		
	}
	
	public function cv_list(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['data'] = $this->TeacherManagerModel->get_cv();
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_ql/teacher_ql_header',$data);
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_cv',$data);
		$this->load->view('admin/admin_footer',$data);
	}
	public function bus_list(){
		if (isset($_POST['approved'])&&isset($_POST['recruit'])){
				$this->TeacherManagerModel->update_bus_recruit(

					['status' => 1]
					,
					['recruitment_id' => $_POST['recruit'] ]
					);

		}
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['bus_all'] = $this->TeacherManagerModel->bus_list();
		$data['info'] =  $this->UserModel->get_info_page();
		foreach ($data['bus_all'] as &$tmp) {
			$tmp['com_list'] = $this->TeacherManagerModel->get_bus_recruit("company_id = ".$tmp['company_id']);

		}
		$this->load->view('teacher_ql/teacher_ql_header',$data);
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_ctytt',$data);
		$this->load->view('admin/admin_footer',$data);

		
	}
	public function auto_pc(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_ql/teacher_ql_header',$data);
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_autopc');
		$this->load->view('dashboard/footer',$data);
	}
	public function manua_pc(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['info'] =  $this->UserModel->get_info_page();
		
		$this->load->view('teacher_ql/teacher_ql_header',$data);
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_manuapc');
		$this->load->view('admin/admin_footer',$data);
		
	}
	public function mark_mid(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['data'] = $this->TeacherManagerModel->get_mark();
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_ql/teacher_ql_header',$data);
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_mark',$data);
		$this->load->view('admin/admin_footer',$data);
	}
	public function view_cv_id($id){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['suser'] = $this->TeacherManagerModel->get_cv_id($id);
		$data['suser_meta'] = $this->UserModel->get_user_meta(['uid'=>$id]);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_ql/teacher_ql_header',$data);
		$this->load->view('teacher_ql/teacher_ql_sidebar');
		$this->load->view('teacher_ql/teacher_ql_cv_id',$data);
		$this->load->view('dashboard/footer',$data);
	}
	public function send_mail(){

		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['info'] =  $this->UserModel->get_info_page();
		$title = $this->input->post('title');
		$content = $this->input->post('content');


		if (isset($title)) {

			$to = "yourmindhasgone@gmail.com";
			$subject = $title;
			$txt = $content;
			$headers = $data['user']['email'] ;

			mail($to,$subject,$txt,$headers);

			/*
			$this->load->library('email');
	        $this->email->from('your@example.com', $data['user']['fullname']);
	        $this->email->to('yourmindhasgone@gmail.com');       
	        $this->email->subject($title);
	        $this->email->message($content);
	        $this->email->send();
	        */		
		}
	}
}