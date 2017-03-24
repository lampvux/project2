<?php 
if (!defined('BASEPATH'))
exit('No direct script access allowed');
  
class Business extends CI_Controller {

	function __construct() {
        parent::__construct();
        $this->load->model('Bussiness_model');
    }


    public function index() {
    	$submit = $this->input->post('submit');
    	if (!isset($submit)) {
            $this->load->view('business/business_header');
            $this->load->view('business/business_sidebar');
            $this->load->view('business/business_all_topic');
            $this->load->view('dashboard/footer');
    	}
    }


    public function add_topic() {
        $submit = $this->input->post('submit');
        if (!isset($submit)) {
            $business_staff = $this->Bussiness_model->get_staff();

            $this->load->view('business/business_header');
            $this->load->view('business/business_sidebar');
            $this->load->view('business/business_new_topic');
            $this->load->view('dashboard/footer');
        }
    }
}
?>