<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Logout extends CI_Controller {

	public function index(){
		// Xoá hết session
		$this->session->unset_userdata("is_logged_in");
		$this->session->unset_userdata("uid");
		$this->session->unset_userdata("user_type");
		$this->session->sess_destroy();

		// Xóa hết cookie
		delete_cookie('uid');
        delete_cookie('username');
        delete_cookie('password');
		redirect("login");
	}

}

/* End of file Logout.php */
/* Location: ./application/controllers/Logout.php */