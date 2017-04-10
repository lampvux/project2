<div class="main-content">
    <div class="page-content">

        <div class="page-header">
            <h1>
                Xin chào <?= $user['fullname'] == '' ? $user['username'] : $user['fullname'] ?>!
            </h1>
        </div><!-- /.page-header -->

        
        <div class="col-xs-12">
            <!-- PAGE CONTENT BEGINS -->
            <div class="clearfix">
            	<?php if ($this->session->flashdata('type')): ?>
                    <div class="alert alert-<?php echo $this->session->flashdata('type');?> no-margin alert-dismissable" style="float: none; margin: 0 auto;">
                        <button type="button" class="close" data-dismiss="alert">
                            <i class="ace-icon fa fa-times"></i>
                        </button>
                        <?php echo $this->session->flashdata('msg'); ?>
                    </div>
            	<?php endif ?>
                <div class="alert alert-info no-margin alert-dismissable" style="float: none; margin: 0 auto;">
                    <button type="button" class="close" data-dismiss="alert">
                        <i class="ace-icon fa fa-times"></i>
                    </button>
                    <strong>Click vào thông tin để chỉnh sửa</strong>
                </div>
            </div>
            <div class="vspace-12-sm"></div>
            <div class="space"></div>
			<!-- user-cv -->

            <div id="main_container" class="row">
                <!-- HEADER -->
                <div id="header_cv">
                    <!-- LOGOTYPE/NAME -->
                    <div class="header_logotype_container col-md-4 col-xs-12 col-sm-4">
                        <h1 id="fullname">
                            <?= $user['fullname'] !== '' ? $user['fullname'] : $user['username'] ?>
                        </h1>
                        <h2 class="logotype_occupation" id="cv_major"><?= isset($user_meta['major']) ? $user_meta['major'] : "Fullstack Web Developer!" ?></h2>
                    </div>
                    <!-- MAIN MENU -->
                    <div class="header_menu_container col-sm-8 col-xs-12">
                        <div class="clear"></div>
                        <ul class="header_menu horizontal_list">
                            <li><span class="no_border" href="#Profile">Hồ sơ</span></li>
                            <li><span href="#Education">Học bạ / Chứng chỉ</span></li>
                            <li><span href="#Skills">Kỹ năng và kinh nghiệm</span></li>
                        </ul>
                    </div>
                </div>
                <!-- LEFT COL -->
                <div id="left_col" class="col-md-4 col-xs-12 col-sm-4">
                    <div class="profile_frame">
                        <div class="profile_picture" style="background-image: url(<?= isset($user_meta['avatar']) ? $user_meta['avatar'] : DEFAULT_AVATAR ?>);"></div>
                    </div>
                    <div class="hello_content">
                        <h2>Xin chào!</h2>
                        <p id="cv_short_intro"><?= isset($user_meta['cv_short_intro']) ? $user_meta['cv_short_intro'] : "Giới thiệu ngắn về bản thân ở đây!" ?></p>
                    </div>
                    <div class="contact_details_content">
                        <h2>Thông tin liên hệ: </h2>
                        <h4>Số điện thoại:</h4>
                        <p id="phone_1"><?= isset($user_meta['phone']) ? $user_meta['phone'] : 'Chưa có' ?></p>
                        <div class="vspace-12-sm"></div>
                        <div class="space"></div>
                        <p id="phone_2"><?= isset($user_meta['phone2']) ? $user_meta['phone2'] : 'Chưa có' ?></p>
                        <h4>Email:</h4>
                        <p id="cv_email"><?= $user['email'] ?></p>
                        <h4>Adress:</h4>
                        <p id="cv_address"><?= isset($user_meta['address']) ? $user_meta['address'] : 'Chưa có' ?></p>
                    </div>
                    <a href="mailto:<?= $user['email'] ?>" class="send_message_button">
                        <span class="cut1"></span>
                        <span class="cut2"></span>
                        <span class="content">Email cho tôi<span class="fontawesome-double-angle-right"></span></span>
                    </a>
                    <div class="get_social_content">
                        <h2>Mạng xã hội</h2>
                        <ul class="social_icons horizontal_list">
                            <li><a class="facebook" href="https://www.facebook.com/jlalovi"><span class="entypo-facebook-circled"></span><span class="invisible">Facebook</span></a></li>
                            <li><a class="twitter" href="https://twitter.com/jlalovi"><span class="entypo-twitter-circled"></span><span class="invisible">Twitter</span></a></li>
                            <li><a class="linkedin" href="https://www.linkedin.com/in/jlalovi/en"><span class="entypo-linkedin-circled"></span><span class="invisible">LinkedIn</span></a></li>
                        </ul>
                    </div>
                </div>
                <!-- PROFILE CONTENT -->
                <div id="content_container" class="col-sm-8 col-xs-12">
                    <!-- Profile -->
                    <div id="Profile" class="cv_content">
                        <div class="block">
                            <h1>Triết lý sống</h1>
                            <blockquote class="profile_quote">
                                <p id="cv_quote">
                                    "<?= isset($user_meta['quote']) ? $user_meta['quote'] : 'There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.' ?>"
                                </p>
                                <span class="entypo-quote"></span>
                            </blockquote>
                        </div>
                        <div class="horizontal_line">
                            <div class="line_left"></div>
                            <div class="left_circle"></div>
                            <div class="central_circle"></div>
                            <div class="right_circle"></div>
                            <div class="line_right"></div>
                        </div>
                        <div class="block">
                            <h2>Tính cách</h2>
                            <div class="philosophy_content">
                                <p id="philosophy_intro">
                                    <?= isset($user_meta['philosophy_intro']) ? $user_meta['philosophy_intro'] : 'I believe life is made from different shades of grey, not from black and white. Furthermore, as a human being with rationality, I think it is our duty to take care of the world and treat others as one would like others to treat oneself. This way of perceiving reality affects my beliefs and my way of behaving. Summarizing on several points:' ?>
                                </p>
                                <ul id="philosophies">
                                    <?php if (isset($user_meta['philosophies']) && is_array($user_meta['philosophies'])): ?>
                                        <?php foreach ($user_meta['philosophies'] as $hobbie): ?>
                                            <li class="single_philosophy">
                                                <?= $hobbie ?>
                                                <span class="badge badge-important hide " style="cursor: pointer;">x</span>
                                            </li>
                                        <?php endforeach ?>
                                    <?php elseif(isset($user_meta['philosophies']) && !is_array($user_meta['philosophies'])):  ?>
                                        <li><?= $user_meta['philosophies'] ?><span class="badge badge-important hide " style="cursor: pointer;">x</span></li>
                                    <?php endif ?>   
                                </ul>
                                <div class="clear"></div>
                                <div class="space"></div>
                                <button class="btn btn-info" id="add_new_philosophy">Thêm tính cách mới</button>
                            </div>
                        </div>
                        <div class="horizontal_line">
                            <div class="line_left"></div>
                            <div class="left_circle"></div>
                            <div class="central_circle"></div>
                            <div class="right_circle"></div>
                            <div class="line_right"></div>
                        </div>
                        <div class="last block">
                            <h2>Sở thích</h2>
                            <p id="hobbies_intro"><?= isset($user_meta['quote']) ? $user_meta['quote'] : 'I\'m passionate about technology and human behavior, both determine almost all my interests and hobbies:' ?></p>
                            <ul id="hobbies">
                                <?php if (isset($user_meta['hobbies']) && is_array($user_meta['hobbies'])): ?>
                                    <?php foreach ($user_meta['hobbies'] as $hobbie): ?>
                                        <li class="single_hobbie">
                                            <?= $hobbie ?>
                                            <span class="badge badge-important hide " style="cursor: pointer;">x</span>
                                        </li>
                                    <?php endforeach ?>
                                <?php elseif(isset($user_meta['hobbies']) && !is_array($user_meta['hobbies'])):  ?>
                                    <?= $user_meta['hobbies'] ?>
                                <?php endif ?>                            
                            </ul>
                            <span id="add_new_hobbie">Thêm sở thích mới nào!</span>
                        </div>
                    </div>
                    <!-- /Profile -->


                    <!-- Education -->
                    <div id="Education" class="cv_content hide">
                        <div class="block">
                            <h2>Quá trình học tập</h2>
                            <div class="timeline-container">
                                <?php if (isset($user_meta['school_profiles']) && is_array($user_meta['school_profiles'])): ?>
                                    <?php foreach ($user_meta['school_profiles'] as $school): ?>
                                        <?php $school = explode('_', $school); ?>
                                        <div class="timeline-items">
                                            <div class="timeline-item clearfix">
                                                <div class="timeline-info">
                                                    <i class="timeline-indicator ace-icon fa fa-graduation-cap btn btn-primary no-hover green"></i>
                                                </div>

                                                <div class="widget-box transparent">
                                                    <div class="widget-header widget-header-small">
                                                        <h5 class="widget-title smaller"><?= $school[0] ?></h5>
                                                        <span class="widget-toolbar">
                                                            <a data-school="<?= $school[0] ?>_<?= $school[1] ?>">
                                                                <i class="ace-icon fa fa-times"></i>
                                                            </a>     
                                                        </span>
                                                    </div>

                                                    <div class="widget-body">
                                                        <div class="widget-main">
                                                            <?= $school[1] ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.timeline-items -->
                                    <?php endforeach ?>
                                <?php elseif (isset($user_meta['school_profiles']) && !is_array($user_meta['school_profiles'])): ?>
                                    <?php $school = explode('_', $user_meta['school_profiles']); ?>
                                    <div class="timeline-items">
                                        <div class="timeline-item clearfix">
                                            <div class="timeline-info">
                                                <i class="timeline-indicator ace-icon fa fa-graduation-cap btn btn-primary no-hover green"></i>
                                            </div>
                                        
                                            <div class="widget-box transparent">
                                                <div class="widget-header widget-header-small">
                                                    <h5 class="widget-title smaller"><?= $school[0] ?></h5>
                                                    <span class="widget-toolbar">
                                                        <a data-school="<?= $user_meta['school_profiles'] ?>">
                                                            <i class="ace-icon fa fa-times"></i>
                                                        </a>     
                                                    </span>
                                                </div>

                                                <div class="widget-body">
                                                    <div class="widget-main">
                                                        <?= $school[1] ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /.timeline-items -->
                                <?php endif ?>
                            </div><!-- /.timeline-container -->

                            <button class="btn btn-info btn-sm" type="button" data-text-default="Thêm học bạ" data-toggle="collapse" data-target="#add_school_profile" aria-expanded="false" aria-controls="add_school_profile">Thêm học bạ</button>
                            <div class="collapse" id="add_school_profile">
                                <div class="clear"></div>
                                <div class="space"></div>
                                <form action="" id="add_school_profile_form" class="form-inline">
                                    
                                    <input type="text" class="grid3" name="school_name" placeholder="Đại học bách khoa hà nội" required>
                                
                                    <input class="date-picker grid3" name="school_date" type="text" placeholder="15-05-2017" required>
                                    
                                    <button class="btn btn-info btn-sm" type="submit">Thêm</button>    
                                </form>
                            </div>
                        </div>
                        <div class="horizontal_line">
                            <div class="line_left"></div>
                            <div class="left_circle"></div>
                            <div class="central_circle"></div>
                            <div class="right_circle"></div>
                            <div class="line_right"></div>
                        </div>
                        <div class="block">
                            <h2>Chứng chỉ</h2>
                            <div class="row" id="diplomaes">
                                <?php if (isset($user_meta['diplomaes']) && is_array($user_meta['diplomaes'])): ?>
                                    <?php foreach ($user_meta['diplomaes'] as $diploma): ?>
                                        <div class="col-xs-6 col-sm-4 col-md-3">
                                            <div class="thumbnail search-thumbnail">
                                                <span class="search-promotion label label-danger arrowed-in arrowed-in-right" data-diploma="<?= $diploma ?>">Xóa chứng chỉ</span>
                                                <img class="media-object" src="assets/img/diploma_2.png" />
                                                <div class="caption">
                                                    <div class="clearfix">
                                                        <p>
                                                            <?= $diploma ?>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endforeach ?>
                                <?php elseif (isset($user_meta['diplomaes']) && !is_array($user_meta['diplomaes'])): ?>
                                    <div class="col-xs-6 col-sm-4 col-md-3">
                                        <div class="thumbnail search-thumbnail">
                                            <span class="search-promotion label label-danger arrowed-in arrowed-in-right" data-diploma="$user_meta['diplomaes']">Xóa chứng chỉ</span>
                                            <img class="media-object" src="assets/img/diploma_2.png" />
                                            <div class="caption">
                                                <div class="clearfix">
                                                    <p>
                                                        <?= $user_meta['diplomaes'] ?>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                <?php endif ?>
                                
                            </div>
                            <div class="clear">
                                <span id="add_new_diploma">Thêm chứng chỉ mới!</span>
                            </div>

                        </div>
                    </div>
                    <!-- /Education -->
                    

                    <!-- Skills -->
                    <div id="Skills" class="cv_content hide">
                        <div class="block">
                            <h2>Kỹ năng</h2>
                            <div class="clearfix" id="list_skills">
                                <?php if (isset($user_meta['skills']) && is_array($user_meta['skills'])): ?>
                                    <?php foreach ($user_meta['skills'] as $skill): ?>
                                        <?php $skill = explode('_', $skill); ?>
                                        <div class="grid4 center">
                                            <div class="easy-pie-chart percentage" data-percent="<?= $skill[1] ?>" data-color="<?= $skill[2] ?>">
                                                <span class="percent"><?= $skill[1] ?></span>%
                                            </div>

                                            <div class="space-2"></div>
                                            <?= $skill[0] ?>
                                        </div>
                                    <?php endforeach ?>
                                <?php elseif (isset($user_meta['skills']) && !is_array($user_meta['skills'])): ?>
                                     <?php $skill = explode('_', $user_meta['skills']); ?>
                                    <div class="grid4 center">
                                        <div class="easy-pie-chart percentage" data-percent="<?= $skill[1] ?>" data-color="<?= $skill[2] ?>">
                                            <span class="percent"><?= $skill[1] ?></span>%
                                        </div>

                                        <div class="space-2"></div>
                                        <?= $skill[0] ?>
                                    </div>
                                <?php endif ?>
                            </div>
                            <div class="clearfix">
                                <div class="space"></div>
                                <button class="btn btn-info btn-sm" type="button" data-text-default="Thêm kỹ năng" data-toggle="collapse" data-target="#add_new_skill" aria-expanded="false" aria-controls="add_new_skill">Thêm kỹ năng</button>
                                <div class="collapse col-xs-12" id="add_new_skill">
                                    <div class="clear"></div>
                                    <div class="space"></div>
                                    <form action="" id="add_new_skill_form" class="form-horizontal">
                                        <div class="form-group">
                                            <label for="skill_name">Chọn kỹ năng(*)</label>
                                            <input type="text" name="skill_name" id="skill_name" placeholder="" class="form-control" required>
                                        </div>
                                        <div class="form-group" id="slider-eq">
                                            <label for="percent">Mức độ thành thạo(*)</label>
                                            <input type="hidden" name="percent" id="percent" required>
                                            <span class="ui-slider-green ui-slider-small"></span>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="simple-colorpicker-1">Chọn màu hiển thị</label>
                                            <select id="simple-colorpicker-1" name="display_color" class="hide">
                                                <option value="#ac725e">#ac725e</option>
                                                <option value="#d06b64">#d06b64</option>
                                                <option value="#f83a22">#f83a22</option>
                                                <option value="#fa573c">#fa573c</option>
                                                <option value="#ff7537">#ff7537</option>
                                                <option value="#ffad46" selected="">#ffad46</option>
                                                <option value="#42d692">#42d692</option>
                                                <option value="#16a765">#16a765</option>
                                                <option value="#7bd148">#7bd148</option>
                                                <option value="#b3dc6c">#b3dc6c</option>
                                                <option value="#fbe983">#fbe983</option>
                                                <option value="#fad165">#fad165</option>
                                                <option value="#92e1c0">#92e1c0</option>
                                                <option value="#9fe1e7">#9fe1e7</option>
                                                <option value="#9fc6e7">#9fc6e7</option>
                                                <option value="#4986e7">#4986e7</option>
                                                <option value="#9a9cff">#9a9cff</option>
                                                <option value="#b99aff">#b99aff</option>
                                                <option value="#c2c2c2">#c2c2c2</option>
                                                <option value="#cabdbf">#cabdbf</option>
                                                <option value="#cca6ac">#cca6ac</option>
                                                <option value="#f691b2">#f691b2</option>
                                                <option value="#cd74e6">#cd74e6</option>
                                                <option value="#a47ae2">#a47ae2</option>
                                                <option value="#555">#555</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <button class="btn btn-info btn-sm" type="submit">
                                                Thêm
                                            </button>    
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="horizontal_line">
                            <div class="line_left"></div>
                            <div class="left_circle"></div>
                            <div class="central_circle"></div>
                            <div class="right_circle"></div>
                            <div class="line_right"></div>
                        </div>

                        <div class="block" id="expers">
                            <h2>Kinh nghiệm làm việc</h2>
                            <div class="timeline-container">
                                <?php if (isset($user_meta['expers']) && is_array($user_meta['expers'])): ?>
                                    <?php foreach ($user_meta['expers'] as $exper): ?>
                                        <?php $exper = explode('_', $exper); ?>
                                        <div class="timeline-items">
                                            <div class="timeline-item clearfix">
                                                <div class="timeline-info">
                                                    <i class="timeline-indicator ace-icon fa fa-bar-chart btn no-hover green"></i>
                                                </div>

                                                <div class="widget-box transparent">
                                                    <div class="widget-header widget-header-small">
                                                        <h5 class="widget-title smaller"><?= $exper[0] ?></h5>
                                                        <span class="widget-toolbar">
                                                            <a data-exper="<?= $exper[0] ?>_<?= $exper[1] ?>">
                                                                <i class="ace-icon fa fa-times"></i>
                                                            </a>     
                                                        </span>
                                                    </div>

                                                    <div class="widget-body">
                                                        <div class="widget-main">
                                                            <?= $exper[1] ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.timeline-items -->
                                    <?php endforeach ?>
                                <?php elseif (isset($user_meta['expers']) && !is_array($user_meta['expers'])): ?>
                                    <?php $exper = explode('_', $user_meta['expers']); ?>
                                    <div class="timeline-items">
                                        <div class="timeline-item clearfix">
                                            <div class="timeline-info">
                                                <i class="timeline-indicator ace-icon fa fa-bar-chart btn no-hover green"></i>
                                            </div>
                                        
                                            <div class="widget-box transparent">
                                                <div class="widget-header widget-header-small">
                                                    <h5 class="widget-title smaller"><?= $exper[0] ?></h5>
                                                    <span class="widget-toolbar">
                                                        <a data-exper="<?= $user_meta['expers'] ?>">
                                                            <i class="ace-icon fa fa-times"></i>
                                                        </a>     
                                                    </span>
                                                </div>

                                                <div class="widget-body">
                                                    <div class="widget-main">
                                                        <?= $exper[1] ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /.timeline-items -->
                                <?php endif ?>
                            </div><!-- /.timeline-container -->
                            <div class="clearfix">
                                <div class="space"></div>
                                <button class="btn btn-info btn-sm" type="button" data-text-default="Thêm kinh nghiệm" data-toggle="collapse" data-target="#add_new_exper" aria-expanded="false" aria-controls="add_new_exper">Thêm kinh nghiệm</button>
                                <div class="collapse col-xs-12" id="add_new_exper">
                                    <div class="clear"></div>
                                    <div class="space"></div>
                                    <form action="" class="form-horizontal" id="add_new_exper_form">
                                        <div class="form-group">
                                            <label for="id-date-range-picker-1">
                                                Chọn khoảng thời gian
                                            </label>
                                            <input class="form-control date-range-picker" type="text" name="time-period" />
                                        </div>
                                        <div class="form-group">
                                            <label for="company">
                                                Tên công ty/cơ sở làm việc
                                            </label>
                                            <input type="text" name="company" id="company" class="form-control" >
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-primary" type="submit">Thêm</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Skills -->
                    

                </div>
            </div>
        
            <!-- /.user-cv -->
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
