<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Our_services  extends CI_Controller {

	public function index(){
		$this->load->view('newmainpage/mainpage-header');
		$this->load->view('newmainpage/our_services');
		$this->load->view('newmainpage/mainpage-footer');
	}
}
