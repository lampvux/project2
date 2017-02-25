<?php 
if (!defined('BASEPATH'))
exit('No direct script access allowed');
  
class Login extends CI_Controller {

  	function __construct() {
        parent::__construct();
        $this->load->model('Admin_model');
    }


    public function index() {
        $submit = $this->input->post('submit');
        var_dump($submit);
        if (!isset($submit)) {
            $this->load->view('login_view');
            return true;
        }

    	$username = $this->input->post('username');
    	$password = md5($this->input->post('password'));

    	$data = $this->Admin_model->login($username, $password);
    	if ($data != null) {
            $user_data = array(
                                'uid'           => $data->uid,
                                'gid'           => $data->gid,
                                'username'      => $data->username,
                                'email'         => $data->email,
                                'logged_in'     => 1
                              );

            $this->session->set_userdata($user_data);
            $this->session->all_userdata();
            redirect('Admin', 'refresh');
    	} else {
            $this->session->set_userdata('report', 'Login failed. Your username or password is incorrect.');
            $this->load->view('login_view');
    	}
    }
}
?>