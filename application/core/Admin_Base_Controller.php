<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_Base_Controller extends CI_Controller{

	public function __construct()
    	{
        	parent::__construct();

        	$this->load->model('AdminModel');
        }

    public function index(){
    	$this->load->view('AdminView');
    }
	public function check_valid_email_student(){

		if( isset($_POST) ){
            $id = $_POST['uid'];
            if($this->AdminModel->Is_valid_school_email($id))
            {
            	echo json_encode(
                        array(
                            'message'   => 'valid school email'
                            )
                );
            }
            else {
            	echo json_encode(
                        array(
                            'message'   => 'invalid school email'
                            )
                );
            }
        }

	}
	public function check_valid_email_bussiness(){
		if( isset($_POST) ){
            $id = $_POST['uid'];
            if($this->AdminModel->Is_valid_company_mail($id))
            {
            	echo json_encode(
                        array(
                            'message'   => 'valid bussiness email'
                            )
                );
            }
            else {
            	echo json_encode(
                        array(
                            'message'   => 'invalid bussiness email'
                            )
                );
            }
        }
	}
	public function get_all_mark(){
		$result = $this->AdminModel->get_mark();

		echo json_encode(
                        array(
                            'message'   => 'not completed'
                            )
                );
	}
	public function setting_social(){
		if( isset($_POST) ){		
			$data = array(
            		'facebook'         		=> $_POST['facebook'],
            		'twitter'        		=> $_POST['twitter'],
            		'gplus'    				=> $_POST['gplus'],
            		'insta'  				=> $_POST['insta'],
            		'pint'   				=> $_POST['pint'],
            		'snap'   				=> $_POST['snap']
            );
            if($this->AdminModel->setting($data))
            {
            	echo json_encode(
                        array(
                            'message'   => 'completed'
                            )
                );
            }
            else
            {
            	echo json_encode(
                        array(
                            'message'   => 'not completed'
                            )
                );
            }

		}
	}
	public function setting_system(){
		if( isset($_POST) ){

			$data = array(
            		'copyright'         	=> $_POST['copyright']?$_POST['copyright']:'',
            		'title'        			=> $_POST['title'],
            		'slogan'    			=> $_POST['slogan'],
            		'address'  				=> $_POST['address'],
            		'contact'   			=> $_POST['contact']            		
            );
            $system = $this->AdminModel->setting($data);

		}
	}
}