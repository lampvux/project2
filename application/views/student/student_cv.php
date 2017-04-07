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
                            <li><span class="no_border" href="#Profile">Profile</span></li>
                            <li><span href="#Education">Education</span></li>
                            <li><span href="#Skills">Skills</span></li>
                            <li><span href="#Work_Experience">Work Experience</span></li>
                            <li><span href="#Featured_Projects">Featured Projects</span></li>
                            <li><span href="#Awards">Awards</span></li>
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

                            <button class="btn btn-info btn-sm" type="button" data-toggle="collapse" data-target="#add_school_profile" aria-expanded="false" aria-controls="add_school_profile">Thêm học bạ</button>
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
                            <div class="clearfix">
                                <div class="grid4 center">
                                    <div class="easy-pie-chart percentage" data-percent="45" data-color="#CA5952">
                                        <span class="percent">45</span>%
                                    </div>

                                    <div class="space-2"></div>
                                    Graphic Design
                                </div>

                                <div class="grid4 center">
                                    <div class="center easy-pie-chart percentage" data-percent="90" data-color="#59A84B">
                                        <span class="percent">90</span>%
                                    </div>

                                    <div class="space-2"></div>
                                    HTML5 & CSS3
                                </div>

                                <div class="grid4 center">
                                    <div class="center easy-pie-chart percentage" data-percent="80" data-color="#9585BF">
                                        <span class="percent">80</span>%
                                    </div>

                                    <div class="space-2"></div>
                                    Javascript/jQuery
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /Skills -->
                    

                    <!-- Work_Experience -->
                    <div id="Work_Experience" class="cv_content hide">
                        <h1>Work_Experience</h1>
                    </div>
                    <!-- /Work_Experience -->
                    

                    <!-- Featured_Projects -->
                    <div id="Featured_Projects" class="cv_content hide">
                        <h1>Featured_Projects</h1>
                    </div>
                    <!-- /Featured_Projects -->
                    

                    <!-- Awards -->
                    <div id="Awards" class="cv_content hide">
                        <h1>Awards</h1>
                    </div>
                    <!-- /Awards -->
                </div>
            </div>
        
            <!-- /.user-cv -->
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
