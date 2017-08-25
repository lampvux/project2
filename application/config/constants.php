<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Display Debug backtrace
|--------------------------------------------------------------------------
|
| If set to TRUE, a backtrace will be displayed along with php errors. If
| error_reporting is disabled, the backtrace will not display, regardless
| of this setting
|
*/
defined('SHOW_DEBUG_BACKTRACE') OR define('SHOW_DEBUG_BACKTRACE', TRUE);

/*
|--------------------------------------------------------------------------
| File and Directory Modes
|--------------------------------------------------------------------------
|
| These prefs are used when checking and setting modes when working
| with the file system.  The defaults are fine on servers with proper
| security, but you may wish (or even need) to change the values in
| certain environments (Apache running a separate process for each
| user, PHP under CGI with Apache suEXEC, etc.).  Octal values should
| always be used to set the mode correctly.
|
*/
defined('FILE_READ_MODE')  OR define('FILE_READ_MODE', 0644);
defined('FILE_WRITE_MODE') OR define('FILE_WRITE_MODE', 0666);
defined('DIR_READ_MODE')   OR define('DIR_READ_MODE', 0755);
defined('DIR_WRITE_MODE')  OR define('DIR_WRITE_MODE', 0755);

/*
|--------------------------------------------------------------------------
| File Stream Modes
|--------------------------------------------------------------------------
|
| These modes are used when working with fopen()/popen()
|
*/
defined('FOPEN_READ')                           OR define('FOPEN_READ', 'rb');
defined('FOPEN_READ_WRITE')                     OR define('FOPEN_READ_WRITE', 'r+b');
defined('FOPEN_WRITE_CREATE_DESTRUCTIVE')       OR define('FOPEN_WRITE_CREATE_DESTRUCTIVE', 'wb'); // truncates existing file data, use with care
defined('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE')  OR define('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE', 'w+b'); // truncates existing file data, use with care
defined('FOPEN_WRITE_CREATE')                   OR define('FOPEN_WRITE_CREATE', 'ab');
defined('FOPEN_READ_WRITE_CREATE')              OR define('FOPEN_READ_WRITE_CREATE', 'a+b');
defined('FOPEN_WRITE_CREATE_STRICT')            OR define('FOPEN_WRITE_CREATE_STRICT', 'xb');
defined('FOPEN_READ_WRITE_CREATE_STRICT')       OR define('FOPEN_READ_WRITE_CREATE_STRICT', 'x+b');

/*
|--------------------------------------------------------------------------
| Exit Status Codes
|--------------------------------------------------------------------------
|
| Used to indicate the conditions under which the script is exit()ing.
| While there is no universal standard for error codes, there are some
| broad conventions.  Three such conventions are mentioned below, for
| those who wish to make use of them.  The CodeIgniter defaults were
| chosen for the least overlap with these conventions, while still
| leaving room for others to be defined in future versions and user
| applications.
|
| The three main conventions used for determining exit status codes
| are as follows:
|
|    Standard C/C++ Library (stdlibc):
|       http://www.gnu.org/software/libc/manual/html_node/Exit-Status.html
|       (This link also contains other GNU-specific conventions)
|    BSD sysexits.h:
|       http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
|    Bash scripting:
|       http://tldp.org/LDP/abs/html/exitcodes.html
|
*/
defined('EXIT_SUCCESS')        OR define('EXIT_SUCCESS', 0); // no errors
defined('EXIT_ERROR')          OR define('EXIT_ERROR', 1); // generic error
defined('EXIT_CONFIG')         OR define('EXIT_CONFIG', 3); // configuration error
defined('EXIT_UNKNOWN_FILE')   OR define('EXIT_UNKNOWN_FILE', 4); // file not found
defined('EXIT_UNKNOWN_CLASS')  OR define('EXIT_UNKNOWN_CLASS', 5); // unknown class
defined('EXIT_UNKNOWN_METHOD') OR define('EXIT_UNKNOWN_METHOD', 6); // unknown class member
defined('EXIT_USER_INPUT')     OR define('EXIT_USER_INPUT', 7); // invalid user input
defined('EXIT_DATABASE')       OR define('EXIT_DATABASE', 8); // database error
defined('EXIT__AUTO_MIN')      OR define('EXIT__AUTO_MIN', 9); // lowest automatically-assigned error code
defined('EXIT__AUTO_MAX')      OR define('EXIT__AUTO_MAX', 125); // highest automatically-assigned error code
define('ASSET_FOLDER', 'http://localhost/dashboard/assets/'); //link to assets folder
define('ASPIRATIONS_TABLE', 'aspirations'); // Lưu nguyện vọng của sinh viên và yêu cầu tuyển dụng của doanh nghiệp
define('DIVISION_TABLE', 'division'); // Phân công thực tập
define('FILES_TABLE', 'files'); // Lưu thông tin về toàn bộ file trên hệ thống
define('INTERNSHIP_COURCE_TABLE', 'internship_cource'); // Khóa thực tập
define('INTERNSHIP_STATUS_TABLE', 'internship_status'); // Trạng thái khóa thực tập
define('MARK_TABLE', 'mark'); // Lưu điểm của sinh viên
define('RATING_TABLE', 'rating'); // Đánh giá khóa thực tập của sinh viên và của đại diện doanh nghiệp về sinh viên đó
define('ROLE_TABLE', 'role'); // Các kiểu user trên hệ thống và quyền hạn
define('TOPIC_TABLE', 'topic'); // Các đề tài thực tập
define('USER_TABLE', 'user'); // Thông tin người dùng cơ bản dùng cho login và phân loại người dùng
define('COMPANY_TABLE', 'companies'); // Thông tin về các công ty
define('USER_META_TABLE', 'user_meta'); // Lưu thông tin phụ của người dùng
define('NOTIFIATION_TABLE', 'notification'); // Lưu các thông báo mới 
define('MESSAGE_TABLE', 'message'); // Lưu tin nhắn giữa các user trên hệ thống


// ================ USER TYPE =====================
define('STUDENT_USER_TYPE', 'student');
define('ADMIN_USER_TYPE', 'admin');
define('BUSSINESS_USER_TYPE', 'bussiness');
define('BUSSINESS_STAFF_USER_TYPE', 'bussiness_staff');
define('INSTRUCTOR_TEACHER_USER_TYPE', 'instructor_teacher');
define('CURATOR_TEACHER_USER_TYPE', 'curator_teacher');

//================== Pagination ====================
define('PER_PAGE', 50);

// ================= Sant to scrypt =================

define('SALT', 'TrungLamThongDat');

