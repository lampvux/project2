<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function __construct()
    	{
        	parent::__construct();

        	$this->load->model('AdminModel');
        	$this->load->model('UserModel');
        }

	public function index()
	{
		
		$data['data'] = $this->AdminModel->get_user();

		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_content',$data);
		//$this->load->view('admin/admin_footer');
		
	}
	public function manager_user(){
		$data['data'] = $this->AdminModel->get_user();
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_user',$data);
		$this->load->view('admin/admin_footer',$data);
	}
	public function setting_system(){
		$data['data'] = $this->AdminModel->get_setting(['id' => 1]);
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_setting',$data);
		$this->load->view('admin/admin_footer',$data);

		if (isset($_POST) && isset($_POST['submit'])){
			
			 $this->AdminModel->update_setting([
                    'site_title'          	=> $this->input->post('site_title'),
                    'site_footer'       	=> $this->input->post('site_footer'),
                    'phone_contact'        	=> $this->input->post('phone_contact'),
                    'email_contact'         => $this->input->post('email_contact'),
                    'location_contact'  	=> $this->input->post('location_contact')
                ],['id' => 1]);
			 redirect('admin/admin/setting_system');
		}
	}
	public function setting_social(){
		$data['data'] = $this->AdminModel->get_setting(['id' => 1]);
		$data['info'] =  $this->UserModel->get_info_page();
		
		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_setting_social',$data);
		$this->load->view('dashboard/footer',$data);


		if (isset($_POST['submit_social'])){
			
			 $this->AdminModel->update_setting([
                    'facebook'          => $this->input->post('facebook'),
                    'twitter'       	=> $this->input->post('twitter'),
                    'gplus'        		=> $this->input->post('gplus')                    
                ],['id' => 1]);
			 redirect('admin/admin/setting_social');
		}
	}
	public function email_alert(){
		$data['info'] =  $this->UserModel->get_info_page();
		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_email_alert');
		$this->load->view('admin/admin_footer',$data);
	}
	public function mark_student(){
		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_mark');
		$this->load->view('dashboard/footer');
	}
	public function delete_user(){
		if (isset($_POST['delete'])){
			
			$this->AdminModel->delete_user([
					'uid'		=> $this->input->post('id_delete')
				]);
			redirect('admin/admin/manager_user');
		}
	}
	public function company_list(){
		$data['recruit'] = $this->AdminModel->get_company_list("recruitment_id > 0");

		$data['company'] = $this->UserModel->get_precifix_company("company_id>1");
	}
}