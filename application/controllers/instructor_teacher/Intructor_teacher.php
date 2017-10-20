<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Intructor_teacher extends CI_Controller {

	public function __construct()
    	{
        	parent::__construct();

        	$this->load->model('TeacherIntructorModel');
        	$this->load->model('UserModel');
        }

    protected function load_header(){
    	$this->load->view('teacher_hd/teacher_hd_header');
    }

	public function index()
	{

		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);

		$this->load->view('teacher_hd/teacher_hd_header',$data);
		$this->load->view('teacher_hd/teacher_hd_sidebar');
		$this->load->view('teacher_hd/teacher_hd_content',$data);
		$this->load->view('dashboard/footer');
		
	}
	
	public function topic_list(){
		$data['topic'] = $this->TeacherIntructorModel->get_topic_aprove();
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_hd/teacher_hd_header',$data);
		$this->load->view('teacher_hd/teacher_hd_sidebar');
		$this->load->view('teacher_hd/teacher_hd_topic',$data);
		$this->load->view('admin/admin_footer',$data);

	}
	public function topic_detail(){
		$data['topic'] = $this->TeacherIntructorModel->get_topic_aprove();
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_hd/teacher_hd_header',$data);
		$this->load->view('teacher_hd/teacher_hd_sidebar');
		$this->load->view('teacher_hd/teacher_hd_topic_detail',$data);
		$this->load->view('admin/admin_footer',$data);
	}
	public function report_intern(){
		
	}
	public function mark_mid(){
		$data['data'] = $this->TeacherIntructorModel->get_mark();
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('teacher_hd/teacher_hd_header',$data);
		$this->load->view('teacher_hd/teacher_hd_sidebar');
		$this->load->view('teacher_hd/teacher_hd_mark',$data);
		$this->load->view('admin/admin_footer',$data);
	}
	
	public function send_mail(){

		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
		$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);

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