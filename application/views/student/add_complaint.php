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
            <div class="user-profile well well-sm" id="user-profile">
                <div class="space"></div>
                <div class="tabbable">
                    <ul class="nav nav-tabs padding-16">
                        <li class="active">
                            <a data-toggle="tab" href="#all_complaints">
                                <i class="green ace-icon fa fa-share-square-o bigger-125"></i>
                                Các khiếu nại đã gửi
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#add_new_complaint">
                                <i class="blue ace-icon fa fa-cloud-upload bigger-125"></i>
                                Gửi mới
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content profile-edit-tab-content">
                        <div id="all_complaints" class="tab-pane in active">

                            <div class="row">
                                <table id="simple-table" class="table  table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th class="detail-col">Details</th>
                                            <th>Domain</th>
                                            <th>Price</th>
                                            <th class="hidden-480">Clicks</th>

                                            <th>
                                                <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> Update
                                            </th>
                                            <th class="hidden-480">Status</th>

                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td class="center">
                                                <div class="action-buttons">
                                                    <a href="#" class="green bigger-140 show-details-btn" title="Show Details">
                                                        <i class="ace-icon fa fa-angle-double-down"></i>
                                                        <span class="sr-only">Details</span>
                                                    </a>
                                                </div>
                                            </td>

                                            <td>
                                                <a href="#">ace.com</a>
                                            </td>
                                            <td>$45</td>
                                            <td class="hidden-480">3,330</td>
                                            <td>Feb 12</td>

                                            <td class="hidden-480">
                                                <span class="label label-sm label-warning">Expiring</span>
                                            </td>

                                            <td>
                                                <div class="hidden-sm hidden-xs btn-group">
                                                    <button class="btn btn-xs btn-success">
                                                        <i class="ace-icon fa fa-check bigger-120"></i>
                                                    </button>

                                                    <button class="btn btn-xs btn-info">
                                                        <i class="ace-icon fa fa-pencil bigger-120"></i>
                                                    </button>

                                                    <button class="btn btn-xs btn-danger">
                                                        <i class="ace-icon fa fa-trash-o bigger-120"></i>
                                                    </button>

                                                    <button class="btn btn-xs btn-warning">
                                                        <i class="ace-icon fa fa-flag bigger-120"></i>
                                                    </button>
                                                </div>

                                                <div class="hidden-md hidden-lg">
                                                    <div class="inline pos-rel">
                                                        <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                            <i class="ace-icon fa fa-cog icon-only bigger-110"></i>
                                                        </button>

                                                        <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                            <li>
                                                                <a href="#" class="tooltip-info" data-rel="tooltip" title="" data-original-title="View">
                                                                    <span class="blue">
                                                                        <i class="ace-icon fa fa-search-plus bigger-120"></i>
                                                                    </span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#" class="tooltip-success" data-rel="tooltip" title="" data-original-title="Edit">
                                                                    <span class="green">
                                                                        <i class="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                                    </span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#" class="tooltip-error" data-rel="tooltip" title="" data-original-title="Delete">
                                                                    <span class="red">
                                                                        <i class="ace-icon fa fa-trash-o bigger-120"></i>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td colspan="8">
                                                <div class="table-detail">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-2">
                                                            <div class="text-center">
                                                                <img class="thumbnail inline no-margin-bottom" alt="Domain Owner's Avatar" src="assets/images/avatars/profile-pic.jpg" height="150">
                                                                <br>
                                                                <div class="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                                                                    <div class="inline position-relative">
                                                                        <a class="user-title-label" href="#">
                                                                            <i class="ace-icon fa fa-circle light-green"></i> &nbsp;
                                                                            <span class="white">Alex M. Doe</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-xs-12 col-sm-10">
                                                            <div class="space visible-xs"></div>

                                                            <div class="profile-user-info profile-user-info-striped">
                                                                <div class="profile-info-row">
                                                                    <div class="profile-info-name"> Username </div>

                                                                    <div class="profile-info-value">
                                                                        <span>alexdoe</span>
                                                                    </div>
                                                                </div>

                                                                <div class="profile-info-row">
                                                                    <div class="profile-info-name"> Location </div>

                                                                    <div class="profile-info-value">
                                                                        <i class="fa fa-map-marker light-orange bigger-110"></i>
                                                                        <span>Netherlands, Amsterdam</span>
                                                                    </div>
                                                                </div>

                                                                <div class="profile-info-row">
                                                                    <div class="profile-info-name"> Age </div>

                                                                    <div class="profile-info-value">
                                                                        <span>38</span>
                                                                    </div>
                                                                </div>

                                                                <div class="profile-info-row">
                                                                    <div class="profile-info-name"> Joined </div>

                                                                    <div class="profile-info-value">
                                                                        <span>2010/06/20</span>
                                                                    </div>
                                                                </div>

                                                                <div class="profile-info-row">
                                                                    <div class="profile-info-name"> Last Online </div>

                                                                    <div class="profile-info-value">
                                                                        <span>3 hours ago</span>
                                                                    </div>
                                                                </div>

                                                                <div class="profile-info-row">
                                                                    <div class="profile-info-name"> About Me </div>

                                                                    <div class="profile-info-value">
                                                                        <span>Bio</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div id="add_new_complaint" class="tab-pane">
                            <form class="form-horizontal" id="add_new_complaint_form" action="" method="POST" enctype="multipart/form-data">
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
                                <div class="wysiwyg-editor" id="editor1"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
