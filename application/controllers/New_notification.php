<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class New_notifications  extends CI_Controller {

	public function index(){
		$this->load->view('newmainpage/mainpage-header');
		$this->load->view('newmainpage/new_notifications');
		$this->load->view('newmainpage/mainpage-footer');
	}
}
