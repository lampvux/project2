<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Profile extends MY_Controller {

	public function index()
	{
		$this->load->view('header-dashboard');
		$this->load->view('sidebar-dashboard');
		$this->load->view('main-content-dashboard');
		$this->load->view('footer');
	}

}

/* End of file Profile.php */
/* Location: ./application/controllers/Profile.php */