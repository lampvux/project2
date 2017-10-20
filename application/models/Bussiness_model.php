<?php
class Bussiness_model extends CI_Model { 


	public function get_staff($where) {
        return $this->db->get_where(USER_TABLE, $where)->result();
    }


    public function create_topic($where) {
        $this->db->insert(TOPIC_TABLE, $where);
        return $this->db->insert_id();
    }


    public function get_topic($where) {
        return $this->db->get_where(TOPIC_TABLE, $where)->result();
    }


    public function get_username($uid) {
        return $this->db->select('username')->get_where(USER_TABLE, array('uid' => $uid))->result()[0]->username;
    }


    public function get_skillname($skills_id) {
        $skills = array();
        foreach ($skills_id as $skill_id) {
            $skills[] = $this->db->select('skill_name')->get_where(SKILL_TABLE, array('skill_id' => $skill_id))->result()[0]->skill_name;
        }
        return $skills;
    }


    public function get_company_name($company_id) {
        return $this->db->select('company_name')->get_where(COMPANY_TABLE, array('company_id' => $company_id))->result()[0]->company_name;
    }


    public function get_company_staff($where) {
        return $this->db->select('uid')->get_where(USER_META_TABLE, $where)->result();
    }


    public function get_recruitment($where) {
        return $this->db->get_where(RECRUITMENT_TABLE, $where)->result();
    }



    public function create_recruitment($where) {
        $this->db->insert(RECRUITMENT_TABLE, $where);
        return $this->db->insert_id();
    }


    public function get_skill() {
        return $this->db->get(SKILL_TABLE)->result();
    }
}

?>