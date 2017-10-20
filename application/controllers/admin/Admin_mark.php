<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_mark extends CI_Controller {

	public function index()
	{
		if ($this->session)
		{
			$this->load->view('admin/admin_header');
			$this->load->view('admin/admin_sidebar');
			$this->load->view('admin/admin_mark');
			$this->load->view('admin/admin_mark_footer');
		}
	}
}