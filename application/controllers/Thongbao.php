<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Thongbao extends CI_Controller {

	public function index()
	{
		$this->load->view('newmainpage/mainpage-header');
		$this->load->view('newmainpage/thongbao');
		$this->load->view('newmainpage/mainpage-footer');
		
	}

}

