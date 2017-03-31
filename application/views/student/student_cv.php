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
                        <h1>
                            <?= $user['fullname'] !== '' ? $user['fullname'] : $user['username'] ?>
                        </h1>
                        <h2 class="logotype_occupation">Frontend Web Developer</h2>
                    </div>
                    <!-- MAIN MENU -->
                    <div class="header_menu_container col-sm-8 col-xs-12">
                        <div class="clear"></div>
                        <ul class="header_menu horizontal_list">
                            <li><a class="no_border" href="#">Profile</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Work Experience</a></li>
                            <li><a href="#">Featured Projects</a></li>
                            <li><a href="#">Awards</a></li>
                        </ul>
                    </div>
                </div>
                <!-- LEFT COL -->
                <div id="left_col" class="col-md-4 col-xs-12 col-sm-4">
                    <div class="profile_frame">
                        <div class="profile_picture" style="background-image: url(<?= isset($user_meta['avatar']) ? $user_meta['avatar'] : DEFAULT_AVATAR ?>);"></div>
                    </div>
                    <div class="hello_content">
                        <h2>Hello!</h2>
                        <p>I'm passionate about technology and human behavior, hardworker and a fast-learner with experience in around 10 different countries studying, working and volunteering.</p>
                    </div>
                    <div class="contact_details_content">
                        <h2>Thông tin liên hệ: </h2>
                        <h4>Số điện thoại:</h4>
                        <p><?= isset($user_meta['phone']) ? $user_meta['phone'] : 'Chưa có' ?></p>
                        <p><?= isset($user_meta['phone2']) ? $user_meta['phone2'] : 'Chưa có' ?></p>
                        <h4>Email:</h4>
                        <p><?= $user['email'] ?></p>
                        <h4>Adress:</h4>
                        <p><?= isset($user_meta['address']) ? $user_meta['address'] : 'Chưa có' ?></p>
                    </div>
                    <a href="mailto:jlalovi@gmail.com" class="send_message_button">
                        <span class="cut1"></span>
                        <span class="cut2"></span>
                        <span class="content">Send me a message <span class="fontawesome-double-angle-right"></span></span>
                    </a>
                    <div class="get_social_content">
                        <h2>Get social</h2>
                        <ul class="social_icons horizontal_list">
                            <li><a class="facebook" href="https://www.facebook.com/jlalovi"><span class="entypo-facebook-circled"></span><span class="invisible">Facebook</span></a></li>
                            <li><a class="twitter" href="https://twitter.com/jlalovi"><span class="entypo-twitter-circled"></span><span class="invisible">Twitter</span></a></li>
                            <li><a class="linkedin" href="https://www.linkedin.com/in/jlalovi/en"><span class="entypo-linkedin-circled"></span><span class="invisible">LinkedIn</span></a></li>
                        </ul>
                    </div>
                </div>
                <!-- PROFILE CONTENT -->
                <div id="content_container" class="col-sm-8 col-xs-12">
                    <div class="block">
                        <h1>Profile</h1>
                        <blockquote class="profile_quote">
                            <p>"There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning."</p>
                            <p>Jiddu Krishnamurti.</p>
                            <span class="entypo-quote"></span>
                        </blockquote>
                    </div>
                    <div class="block">
                        <h2>A few words about me</h2>
                        <p>Until now, in my life, I change from active moments with a lot of variety, challenges and improvisations, to moments of tranquility and stability, being difficult to stay in a place during a long time. I consider myself a tolerant and respectful person with open mind and quite honest. I really like to listen people stories and backgrounds and their different experiences around the world.</p>
                    </div>
                    <div class="horizontal_line">
                        <div class="line_left"></div>
                        <div class="left_circle"></div>
                        <div class="central_circle"></div>
                        <div class="right_circle"></div>
                        <div class="line_right"></div>
                    </div>
                    <div class="block">
                        <h2>Philosophy</h2>
                        <p>I belive in ethic and moral not in imposed rules that you "have to" do or follow.</p>
                        <div class="philosophy_content">
                            <p>I believe life is made from different shades of grey, not from black and white. Furthermore, as a human being with rationality, I think it is our duty to take care of the world and treat others as one would like others to treat oneself. This way of perceiving reality affects my beliefs and my way of behaving. Summarizing on several points:</p>
                            <ul>
                                <li>Pragmatic</li>
                                <li>Honest</li>
                                <li>Respectful</li>
                                <li>Open-minded</li>
                                <li>Coherent</li>
                            </ul>
                            <div class="clear"></div>
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
                        <h2>Interests & Hobbies</h2>
                        <p>I'm passionate about technology and human behavior, both determine almost all my interests and hobbies:</p>
                        <ul>
                            <li>Visiting new places</li>
                            <li>Meeting people</li>
                            <li>Having new experiences</li>
                            <li>Hiking and Biking</li>
                            <li>Web Developing</li>
                            <li>Computer Gamming</li>
                            <li>Manga and Anime</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <!-- /.user-cv -->
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
