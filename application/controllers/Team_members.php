<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Team_members  extends CI_Controller {

	public function index(){
		$this->load->view('newmainpage/mainpage-header');
		$this->load->view('newmainpage/team_members');
		$this->load->view('newmainpage/mainpage-footer');
	}
}
