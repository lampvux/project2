<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Profile extends MY_Controller {

	public function index()
	{
		$this->load->view('dashboard\header');
		$this->load->view('dashboard\sidebar');
		$this->load->view('dashboard\main-content');
		$this->load->view('dashboard\footer');
	}

}

/* End of file Profile.php */
/* Location: ./application/controllers/Profile.php */