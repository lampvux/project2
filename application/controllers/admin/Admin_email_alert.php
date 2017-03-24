<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_email_alert extends CI_Controller {

	public function index()
	{
		if ($this->session)
		{
			$this->load->view('admin/admin_header');
			$this->load->view('admin/admin_sidebar');
			$this->load->view('admin/admin_email_alert');
			$this->load->view('admin/admin_footer');
		}
	}
}