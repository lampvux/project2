<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Profile extends MY_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		switch ($this->session->user_type) {
			case 'student':
				$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
				$data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
				$data['title'] = $data['user']['fullname'] . ' - Trang cá nhân' ;
				$this->load->view('student/student_header', $data);
				$this->load->view('student/student_sidebar');
				$this->load->view('student/student_content');
				$this->load->view('dashboard/footer');
				break;
			case 'business':
				# code...
				$this->load->view('business/business_header');
				$this->load->view('business/business_sidebar');
				$this->load->view('business/business_content');
				$this->load->view('dashboard/footer');
				break;
			case 'admin':
				# code...
				$this->load->view('admin/admin_header');
				$this->load->view('admin/admin_sidebar');
				$this->load->view('admin/admin_content');
				$this->load->view('admin/admin_footer');
				break;
			case 'business_staff':
				# code...
				$this->load->view('business_emp/business_emp_header');
				$this->load->view('business_emp/business_emp_sidebar');
				$this->load->view('business_emp/business_emp_content');
				$this->load->view('dashboard/footer');
				break;
			case 'instructor_teacher':
				# code...
				$this->load->view('teacher_ql/teacher_ql_header');
				$this->load->view('teacher_ql/teacher_ql_sidebar');
				$this->load->view('teacher_ql/teacher_ql_content');
				$this->load->view('dashboard/footer');
				break;
			case 'curator_teacher':
				# code...
				$this->load->view('teacher_hd/teacher_hd_header');
				$this->load->view('teacher_hd/teacher_hd_sidebar');
				$this->load->view('teacher_hd/teacher_hd_content');
				$this->load->view('dashboard/footer');
				break;
			
			default:
				# code...
				$this->load->view('newmainpage/mainpage-header');
				$this->load->view("Mainpage");
				$this->load->view('newmainpage/mainpage-footer');
				
				break;
		}
		
	}

}

/* End of file Profile.php */
/* Location: ./application/controllers/Profile.php */