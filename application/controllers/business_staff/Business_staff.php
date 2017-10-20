<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Business_staff extends CI_Controller {

	public function __construct() {
    	parent::__construct();

    	$this->load->model('BusinessstaffModel');
    	$this->load->model('UserModel');
    }


	public function index() {
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$this->load->view('business_emp/business_emp_header', $data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_content');
		$this->load->view('dashboard/footer');
		
	}


	public function cv_list(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['data'] = $this->BusinessstaffModel->get_cv();
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_cv',$data);
		$this->load->view('admin/admin_footer',$data);

		
	}


	public function view_cv_id($id){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['suser'] = $this->BusinessstaffModel->get_cv_id($id);
		$data['suser_meta'] = $this->UserModel->get_user_meta(['uid'=>$id]);
		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_cv_id',$data);
		$this->load->view('dashboard/footer');
	}


	public function rate_intern($id){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
        $data['rate_info'] = get_rate_student("to_uid=".$id);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_rate',$data);
		$this->load->view('admin/admin_footer',$data);
		if (isset($_POST['rate'])&&count($rate_info)>0){
			$this->BusinessstaffModel->update_rate_student( [
	                'request_completed' => $this->input->post('request_completed'),
	                'performance'       => $this->input->post('performance'),
	                'description'       => $this->input->post('description')
                ],
                ['to_uid' => $id]
            );
			 
		}
	}


	public function mark_student(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		
		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_mark',$data);
		$this->load->view('admin/admin_footer');
	}



	public function student_list(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
        $data['info'] =  $this->UserModel->get_info_page();
		$res = $this->BusinessstaffModel->get_company_course([
											'company_id'=>$data['user_meta']['company_id']
											]);
		$stu = $this->BusinessstaffModel->get_student_course([
											'cource_id'=>$res[0]['cource_id']
											]);
		$data['data'] = $this->BusinessstaffModel->get_student_intern([
											'uid'=>$stu[0]['uid']
											]);

		foreach ($data['data'] as &$tmp) {

			$tmp['complete'] = $this->BusinessstaffModel->get_mark_value([	'student_id' => $tmp['uid'], 
																				'type' => 'complete'
																			]);
			$tmp['perform'] = $this->BusinessstaffModel->get_mark_value(['student_id' => $tmp['uid'], 
																			'type' => 'perform'
																		  ]);
			$tmp['mark'] = $this->BusinessstaffModel->get_mark_value(['student_id' => $tmp['uid'], 
																	'type' => 'mark'
																	]);
			$tmp['present'] = $this->BusinessstaffModel->get_mark_value(['student_id' => $tmp['uid'], 
																			'type' => 'present'
																			]);
			$tmp['absent'] = $this->BusinessstaffModel->get_mark_value([	'student_id' => $tmp['uid'], 
																			'type' => 'absent'
																		]);
		}

		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_student_list',$data);
		$this->load->view('admin/admin_footer',$data);
		

		// print_r($data);

	}

	// đánh giá sinh viên
	public function rate_student() {
		$submit = $this->input->post('rate_submit');
		if (!isset($submit)) {
			redirect('business_staff/business_staff/student_list');
		} else {
			$student_id = $this->input->post('student_id');
			$complete = $this->input->post('complete');
			$perform = $this->input->post('perform');
			$old_val = $this->BusinessstaffModel->get_mark_student([
															'student_id' => $student_id,
															'from_id' => $this->session->uid,
															'type' => 'complete'
															]);
			$old_val2 = $this->BusinessstaffModel->get_mark_student([
															'student_id' => $student_id,
															'from_id' => $this->session->uid,
															'type' => 'perform'
															]);
			if (count($old_val)>0 &&count($old_val2)>0) {
				$this->BusinessstaffModel->update_mark_student([
															'value' => $complete
															],[
																'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'type' => 'complete'
															]);
				$this->BusinessstaffModel->update_mark_student([
															'value' => $perform
															],[
																'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'type' => 'perform'
															]);
			}
			else {

				$this->BusinessstaffModel->rate_student([	'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'value' => $complete,
																'type' => 'complete'
															]);

				$this->BusinessstaffModel->rate_student([	'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'value' => $perform,
																'type' => 'perform'
															]);
			}
			redirect('business_staff/business_staff/student_list');
		}
	}
	// cho điểm thực tập sinh viên
	public function rate_mark_student() {
		$submit = $this->input->post('mark_submit');
		if (!isset($submit)) {
			redirect('business_staff/business_staff/student_list');
		} else {
			$student_id = $this->input->post('student_id');
			$mark = $this->input->post('mark');
			$old_val = $this->BusinessstaffModel->get_mark_student([
															'student_id' => $student_id,
															'from_id' => $this->session->uid,
															'type' => 'mark'
															]);
			if (count($old_val)>0){
				$this->BusinessstaffModel->update_mark_student([
															'value' => $mark
															],[
																'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'type' => 'mark'
															]);
			}
			else {
				$this->BusinessstaffModel->rate_student([	'student_id' => $student_id,
															'from_id' => $this->session->uid,
															'value' => $mark,
															'type' => 'mark'
														]);
			}
			redirect('business_staff/business_staff/student_list');
		}
	}
	// chấm công sinh viên
	public function rate_time_student() {
		$submit = $this->input->post('time_submit');
		if (!isset($submit)) {
			redirect('business_staff/business_staff/student_list');
		} else {

			$student_id = $this->input->post('student_id');
			$present = $this->input->post('present');
			$absent = $this->input->post('absent');
			$old_val = $this->BusinessstaffModel->get_mark_student([
															'student_id' => $student_id,
															'from_id' => $this->session->uid,
															'type' => 'present'
															]);
			$old_val2 = $this->BusinessstaffModel->get_mark_student([
															'student_id' => $student_id,
															'from_id' => $this->session->uid,
															'type' => 'absent'
															]);
			if (count($old_val)>0 && count($old_val2)>0){
				$this->BusinessstaffModel->update_mark_student([
															'value' => $present
															],[
																'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'type' => 'present'
															]);
				$this->BusinessstaffModel->update_mark_student([
															'value' => $absent
															],[
																'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'type' => 'absent'
															]);
			}
			else {
				$this->BusinessstaffModel->rate_student([	'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'value' => $present,
																'type' => 'present'
															]);

				$this->BusinessstaffModel->rate_student([	'student_id' => $student_id,
																'from_id' => $this->session->uid,
																'value' => $absent,
																'type' => 'absent'
															]);
			}
			redirect('business_staff/business_staff/student_list');
		}
	}

	// xem tin nhắn
	public function view_message(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
		$data['message'] = $this->BusinessstaffModel->get_message($this->session->uid,0,0);
		
		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_message',$data);
		$this->load->view('dashboard/footer');
	}


	// quản lý đề cương
	public function outline_manager(){
		$data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
        $data['info'] =  $this->UserModel->get_info_page();
		$outlines = $this->BusinessstaffModel->get_outline(['company_id' => $data['user_meta']['company_id']]);
		$topic = $this->BusinessstaffModel->get_topic(['company_id' => $data['user_meta']['company_id']]);
		// print_r($outlines);
		foreach ($outlines as &$outline) {
			$outline->topic_name = $this->BusinessstaffModel->get_topic_name(['topic_id' => $outline->topic_id]);
			$outline->file_name = $this->BusinessstaffModel->get_file_name(['file_id' => $outline->file_id]);
			$outline->file_url = $this->BusinessstaffModel->get_file_url(['file_id' => $outline->file_id]);
		}

		// print_r($outlines);

		$this->load->view('business_emp/business_emp_header',$data);
		$this->load->view('business_emp/business_emp_sidebar');
		$this->load->view('business_emp/business_emp_outline',array('data' => $data,
																	'outlines' => $outlines,
																	'topic' => $topic
																	));
		$this->load->view('admin/admin_footer',$data);
	}

	// upload file đề cương
	public function upload_file_outline() {
        $config['upload_path']    = './files/';
        $config['allowed_types']  = 'jpeg|tif|jpg|png|doc|docx|pdf|xls|xlsx|txt|zip|rar|sql';

        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);

        $this->load->library('upload', $config);

        
        if ($this->upload->do_upload('userfile')) {
	        $file = $this->upload->data();
	        $uid = $this->session->uid;
	        $topic_id = $this->input->post('topic');
	        $url = base_url().'files/'.$file['file_name'];

	        $file_id = $this->BusinessstaffModel->create_file_upload([
																		'file_name' => $file['file_name'], 
																		'file_type' => $file['file_type'], 
																		'url' => $url,
																		'uid' => $uid
																	 ]);
	        $this->BusinessstaffModel->create_outline([ 
	        											'company_id' => $data['user_meta']['company_id'],
	        											'topic_id' => $topic_id,
	        											'file_id' => $file_id,
	        										]);
	        redirect('business_staff/Business_staff/outline_manager');
	    }
    }


    //delete file đề cương
    public function delete_file_outline($file_id, $file_url) {
        $this->BusinessstaffModel->delete_file_outline($file_id);

        if (file_exists($file_url)) {
        	unlink($file_url);
        }
        $this->session->set_flashdata('message', 'Success');
        redirect('business_staff/Business_staff/outline_manager');
    }
}
?>