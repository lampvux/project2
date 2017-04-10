<?php
class Bussiness_model extends CI_Model { 


	public function get_staff() {
        return $this->db->get_where(USER_TABLE, array('user_type' => BUSSINESS_STAFF_USER_TYPE))->result();
    }


    public function create_topic($subject, $description, $skills, $professor_id) {
        $this->db->insert(TOPIC_TABLE, array(
                                                'subject_name'    => $subject,
                                                'description'     => $description,
                                                'skills_required' => $skills,
                                                'professor_id'    => $professor_id
                                            )
        );
        return $this->db->insert_id();
    }


    public function get_topic() {
        return $this->db->get(TOPIC_TABLE)->result();
    }


    public function get_username($uid) {
        return $this->db->select('username')->get_where(USER_TABLE, array('uid' => $uid))->result()[0]->username;
    }

}

?>