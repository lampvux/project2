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
            </div>
            <div class="vspace-12-sm"></div>
            <div class="space"></div>
			<!-- user-profile -->
            <div class="col-sm-offset-1 col-sm-10 user-profile well well-sm" id="user-profile">
                <div class="space"></div>

                <form class="form-horizontal" action="" method="POST" enctype="multipart/form-data">
                    <div class="tabbable">
                        <ul class="nav nav-tabs padding-16">
                            <li class="active">
                                <a data-toggle="tab" href="#edit-basic">
                                    <i class="green ace-icon fa fa-pencil-square-o bigger-125"></i>
                                    Thông tin cơ bản
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#edit-password">
                                    <i class="blue ace-icon fa fa-key bigger-125"></i>
                                    Mật khẩu
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content profile-edit-tab-content">
                            <div id="edit-basic" class="tab-pane in active">
                                <h4 class="header blue bolder smaller">Tổng quan</h4>

                                <div class="row">
                                    <div class="col-xs-12 col-sm-4 col-md-3">
										<input type="file" name="avatar">
									</div>

                                    <div class="vspace-12-sm"></div>

                                    <div class="col-xs-12 col-sm-8 col-md-9">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label no-padding-right" for="form-field-username">Họ và tên</label>

                                            <div class="col-sm-8">
                                                <input class="col-xs-12 col-sm-10 form-control" type="text" id="form-field-username" name="main[fullname]" placeholder="Luu Quang Trung" value="<?= $user['fullname'];?>" required />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-4 control-label no-padding-right" for="form-field-date">Ngày sinh</label>

                                            <div class="col-sm-4">
                                                <div class="input-group">
                                                    <input class="form-control date-picker" id="form-field-date" type="text" data-date-format="dd-mm-yyyy" name="meta[birth]" placeholder="dd-mm-yyyy" value="<?= isset($user_meta['birth']) ? $user_meta['birth'] : "" ?>" required/>
                                                    <span class="input-group-addon">
                                                        <i class="ace-icon fa fa-calendar"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-4 control-label no-padding-right">Giới tính</label>

                                            <div class="col-sm-8">
                                                <label class="inline">
                                                    <input name="meta[gender]" type="radio" class="ace" value="nam" <?= isset($user_meta['gender']) && $user_meta['gender'] == 'nam' ? 'checked' : ''; ?> required />
                                                    <span class="lbl middle"> Nam</span>
                                                </label>

                                                <label class="inline">
                                                    <input name="meta[gender]" type="radio" class="ace" value="nu" <?= isset($user_meta['gender']) && $user_meta['gender'] == 'nu' ? 'checked' : ''; ?> required />
                                                    <span class="lbl middle"> Nữ</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-4 control-label no-padding-right" for="form-field-comment">Giới thiệu ngắn </label>

                                            <div class="col-sm-8">
                                                <textarea class="form-control" name="meta[short_des]" id="form-field-comment" ><?= isset($user_meta['short_des']) ? $user_meta['short_des'] : "" ?></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                


                                

                                <div class="space"></div>
                                <h4 class="header blue bolder smaller">Liên hệ</h4>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-email">Email</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon input-icon-left">
                                            <input type="email" name="main[email]" required id="form-field-email" value="<?= $user['email'] ?>" />
                                            <i class="ace-icon fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="space-4"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-website">Website</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon input-icon-left">
                                            <input type="url" name="meta[website]" id="form-field-website" value="<?= isset($user_meta['website']) ? $user_meta['website'] : "" ?>" />
                                            <i class="ace-icon fa fa-globe"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="space-4"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-phone">Số điện thoại</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon input-icon-left">
                                            <input class="form-control input-mask-phone" type="text" id="form-field-phone" value="<?= isset($user_meta['phone']) ? $user_meta['phone'] : "" ?>" name="meta[phone]" />
                                            <i class="ace-icon fa fa-phone"></i>
                                        </span>
                                        <div class="space-4"></div>
                                        <span class="input-icon input-icon-left">
                                            <input class="form-control" value="<?= isset($user_meta['phone2']) ? $user_meta['phone2'] : "" ?>" type="text" id="form-field-phone-2" name="meta[phone2]" />
                                            <i class="ace-icon fa fa-phone"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="space"></div>
                                <h4 class="header blue bolder smaller">Mạng xã hội</h4>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-facebook">Facebook</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon">
                                            <input type="text" value="<?= isset($user_meta['facebook']) ? $user_meta['facebook'] : "" ?>" id="form-field-facebook" name="meta[facebook]" />
                                            <i class="ace-icon fa fa-facebook blue"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="space-4"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-twitter">Twitter</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon">
                                            <input type="text" value="<?= isset($user_meta['twitter']) ? $user_meta['twitter'] : "" ?>" id="form-field-twitter"  name="meta[twitter]"/>
                                            <i class="ace-icon fa fa-twitter light-blue"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="space-4"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-gplus">Google+</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon">
                                            <input type="text" value="<?= isset($user_meta['google']) ? $user_meta['google'] : "" ?>" id="form-field-gplus"  name="meta[google]"/>
                                            <i class="ace-icon fa fa-google-plus red"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="space-4"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-gplus">Youtube</label>

                                    <div class="col-sm-9">
                                        <span class="input-icon">
                                            <input type="text" value="<?= isset($user_meta['youtube']) ? $user_meta['youtube'] : "" ?>" id="form-field-youtube"  name="meta[youtube]"/>
                                            <i class="ace-icon fa fa-youtube red"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div id="edit-password" class="tab-pane">
                                <div class="space-10"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-pass1">Mật khẩu mới</label>

                                    <div class="col-sm-9">
                                        <input type="password" id="form-field-pass1" />
                                    </div>
                                </div>

                                <div class="space-4"></div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label no-padding-right" for="form-field-pass2">Nhập lại</label>

                                    <div class="col-sm-9">
                                        <input type="password" id="form-field-pass2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					
					<!-- ci_nonce -->
					<input type="hidden" name="ci_nonce" value="<?= $ci_nonce; ?>">

                    <div class="clearfix form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button class="btn btn-info" type="submit">
                                <i class="ace-icon fa fa-check bigger-110"></i>
                                Lưu thông tin
                            </button>

                            <button class="btn" type="reset">
                                <i class="ace-icon fa fa-undo bigger-110"></i>
                                Đặt lại
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.user-profile -->
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
