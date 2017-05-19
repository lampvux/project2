<?php 
if (!defined('BASEPATH'))
exit('No direct script access allowed');
  
class Business extends CI_Controller {

	function __construct() {
        parent::__construct();
        $this->load->model('Bussiness_model');
        $this->load->model('UserModel');
    }


    public function index() {
        $title = "Danh sách đề tài";
        $data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
        $data['company'] = $this->Bussiness_model->get_company_name($data['user_meta']['company_id']);
        $data['title'] = $data['user']['fullname'] != '' ? $data['user']['fullname'] . ' - ' . $title : $data['user']['username'] . ' - ' . $title ;

        $topics = $this->Bussiness_model->get_topic(['company_id' => $data['user_meta']['company_id']]);
        // print_r($topics);
        foreach ($topics as &$topic) {
            $topic->skills = $this->Bussiness_model->get_skillname(explode(',', $topic->skills_required));
        }
        $this->load->view('business/business_header',$data);
        $this->load->view('business/business_sidebar');
        $this->load->view('business/business_all_topic', array('topic' => $topics, 'data' => $data));
        $this->load->view('dashboard/footer');
    }


    public function add_topic() {
        $title="Thêm Đề Tài";
        $data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
        $data['company'] = $this->Bussiness_model->get_company_name($data['user_meta']['company_id']);
        $data['title'] = $data['user']['fullname'] != '' ? $data['user']['fullname'] . ' - ' . $title : $data['user']['username'] . ' - ' . $title ;
        
        $submit = $this->input->post('topic_submit');
        if (!isset($submit)) {
            $report = $this->session->report;
            $skills = $this->Bussiness_model->get_skill();
            // print_r($skills);
            $this->load->view('business/business_header',$data);
            $this->load->view('business/business_sidebar');
            $this->load->view('business/business_new_topic', array(
                                                                    'data' => $data,
                                                                    'skills' => $skills,
                                                                    'report' => $report
                                                                   )
            );
            $this->load->view('dashboard/footer');
            return true;
        } else {
            $subject = $this->input->post('subjectName');
            $description = $this->input->post('description');
            $skills = $this->input->post('skills');

            $topic_id = $this->Bussiness_model->create_topic([
                                                                'subject_name'    => $subject,
                                                                'description'     => $description,
                                                                'skills_required' => $skills,
                                                                'company_id'      => $data[ 'user_meta' ][ 'company_id']
                                                            ]);
            if ($topic_id != null) {    
                redirect('business/Business');
            } else {
                $this->session->set_userdata('report', 'Failed');
                redirect('business/Business/add_topic');
            }
        }
    }


    public function recruit() {
        $title="Thông báo tuyển dụng";
        $data['user'] = $this->UserModel->get_user_data(['uid'=>$this->session->uid])[0];
        $data['user_meta'] = $this->UserModel->get_user_meta(['uid'=>$this->session->uid]);
        $data['company'] = $this->Bussiness_model->get_company_name($data['user_meta']['company_id']);
        $data['title'] = $data['user']['fullname'] != '' ? $data['user']['fullname'] . ' - ' . $title : $data['user']['username'] . ' - ' . $title ;
        
        $submit = $this->input->post('recruit_submit');
        if (!isset($submit)) {
            $recruitment = $this->Bussiness_model->get_recruitment(['company_id' => $data['user_meta']['company_id']]);
            $report = $this->session->report;
            $this->load->view('business/business_header',$data);
            $this->load->view('business/business_sidebar');
            $this->load->view('business/business_recruitment', array(   
                                                                        'report' => $report,
                                                                        'data' => $data,
                                                                        'recruitment' => $recruitment
                                                                    )
            );
            $this->load->view('dashboard/footer');
            return true;
        } else {
            $quantity = $this->input->post('quantity');
            $time_start = $this->input->post('time_start');
            $time_end = $this->input->post('time_end');
            $info = $this->input->post('info');
            $requirement = $this->input->post('requirement');

            $recruitment_id = $this->Bussiness_model->create_recruitment([  'quantity' => $quantity,
                                                                            'time_start' => $time_start,
                                                                            'time_end' => $time_end,
                                                                            'info' => $info,
                                                                            'requirement' => $requirement,
                                                                            'company_id' => $data['user_meta']['company_id']
                                                                        ]);
            if ($recruitment_id != null) {    
                redirect('business/business/recruit');
            } else {
                $this->session->set_userdata('report', 'Failed');
                redirect('business/business/recruit');
            }
        }
    }
}
?>