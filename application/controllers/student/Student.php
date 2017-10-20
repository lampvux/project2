<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Student extends CI_Controller {

	public function __construct()
    	{
        	parent::__construct();

        	
        }

	public function index()
	{

		$this->load->view('student/student_header');
		$this->load->view('student/student_sidebar');
		$this->load->view('student/student_content');
		$this->load->view('dashboard/footer');
		
	}
}