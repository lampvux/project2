<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

	protected $ci_nonce;
	protected $url;
	public function __construct()
	{
		parent::__construct();

		if (! $this->session->userdata("is_logged_in")) {
			redirect("login");
		}
		// Nếu chưa khởi tạo access token\
        if (!$this->session->has_userdata('ci_nonce')) {
            $this->session->set_userdata("ci_nonce", substr(md5(microtime()),0,15));
        }
        $this->ci_nonce = $this->session->ci_nonce;
        $this->load->model('UserModel');
        $this->url = base_url(uri_string()); 
		$this->url = str_replace(base_url(), "", $this->url);
		$this->session->set_userdata("current_page", $this->url);
	}

}