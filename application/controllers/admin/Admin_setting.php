<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_setting extends CI_Controller {

	public function __construct()
    	{
        	parent::__construct();

        	$this->load->model('AdminModel');
        }

	public function index()
	{
		$data = $this->AdminModel->get_setting(['id' => 1]);


		
		$this->load->view('admin/admin_header');
		$this->load->view('admin/admin_sidebar');
		$this->load->view('admin/admin_setting');
		$this->load->view('admin/admin_mark_footer');

	}
	public function setdata(){
		/*if (isset($_POST) && isset($_POST['submmit'])){
			if ()
			 $this->AdminModel->set_setting([
                    'site_title'          => $this->input->post('company_name'),
                    'site_footer'       => $this->input->post('company_address'),
                    'company_domain'        => $this->input->post('company_domain'),
                    'company_phone'         => $this->input->post('company_phone'),
                    'company_date_created'  => $this->input->post('company_date_created')
                ]);
		}*/
	}
	public function update_data(){
		if (isset($_POST) && isset($_POST['submmit'])){

			 $this->AdminModel->update_setting([
                    'site_title'          => $this->input->post('site_title'),
                    'site_footer'       	=> $this->input->post('site_footer'),
                    'phone_contact'        => $this->input->post('phone_contact'),
                    'email_contact'         => $this->input->post('email_contact'),
                    'location_contact'  	=> $this->input->post('location_contact')
                ],['id' => 1]);
		}
	}
}