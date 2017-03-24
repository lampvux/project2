<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class General_portfolio extends CI_Controller {

	public function index(){
		$this->load->view('newmainpage/mainpage-header');
		$this->load->view('newmainpage/general_portfolio');
		$this->load->view('newmainpage/mainpage-footer');
	}
}
