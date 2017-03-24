<div class="main-content">
    <div class="main-content-inner">
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Danh Sách Người Dùng</li>
            </ul>
            <!-- /.breadcrumb -->

            <div class="nav-search" id="nav-search">
                <form class="form-search">
                    <span class="input-icon">
                        <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
                        <i class="ace-icon fa fa-search nav-search-icon"></i>
                    </span>
                </form>
            </div>
            <!-- /.nav-search -->
        </div>
        </div>
    
    <div class="col-xs-12">
        <h3 class="header smaller lighter blue">Danh Sách Người Dùng</h3>

        <div class="clearfix">
            <div class="pull-right tableTools-container"></div>
        </div>
        <div class="table-header">
            Bảng Danh Sách Người Dùng Hiện Tại
        </div>

        <!-- div.table-responsive -->

        <!-- div.dataTables_borderWrap -->
        <div>
            <table id="dynamic-table" class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th class="center">
                            <label class="pos-rel">
                                <input type="checkbox" class="ace" />
                                <span class="lbl"></span>
                            </label>
                        </th>
                        <th>Tên Đầy Đủ</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th class="hidden-480">Chức Vụ</th>

                        <th>
                            <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> Ngày Khởi Tạo
                        </th>
                        <th class="hidden-480">Trạng Thái</th>
                        <th class="hidden-480">Hành Động</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="center">
                            <label class="pos-rel">
                                <input type="checkbox" class="ace" />
                                <span class="lbl"></span>
                            </label>
                        </td>

                        <td>
                            <a href="#">app.com</a>
                        </td>
                        <td>$45</td>

                        <td class="hidden-480">3,330</td>
                        <td>Feb 12</td>

                        <td class="hidden-480">
                            <span class="label label-sm label-warning">Expiring</span>
                        </td>

                        <td>
                            <div class="hidden-sm hidden-xs action-buttons">
                                <a class="blue" href="#">
                                    <i class="ace-icon fa fa-search-plus bigger-130"></i>
                                </a>

                                <a class="green" href="#">
                                    <i class="ace-icon fa fa-pencil bigger-130"></i>
                                </a>

                                <a class="red" href="#">
                                    <i class="ace-icon fa fa-trash-o bigger-130"></i>
                                </a>
                            </div>

                            <div class="hidden-md hidden-lg">
                                <div class="inline pos-rel">
                                    <button class="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                        <i class="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                    </button>

                                    <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                        <li>
                                            <a href="#" class="tooltip-info" data-rel="tooltip" title="View">
                                                <span class="blue">
																						<i class="ace-icon fa fa-search-plus bigger-120"></i>
																					</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" class="tooltip-success" data-rel="tooltip" title="Edit">
                                                <span class="green">
																						<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>
																					</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" class="tooltip-error" data-rel="tooltip" title="Delete">
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
                </tbody>
            </table>
        </div>
    </div>
</div>

<div id="modal-table" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
           

            <div class="modal-footer no-margin-top">
                <button class="btn btn-sm btn-danger pull-left" data-dismiss="modal">
                    <i class="ace-icon fa fa-times"></i> Close
                </button>

                <ul class="pagination pull-right no-margin">
                    <li class="prev disabled">
                        <a href="#">
                            <i class="ace-icon fa fa-angle-double-left"></i>
                        </a>
                    </li>

                    <li class="active">
                        <a href="#">1</a>
                    </li>

                    <li>
                        <a href="#">2</a>
                    </li>

                    <li>
                        <a href="#">3</a>
                    </li>

                    <li class="next">
                        <a href="#">
                            <i class="ace-icon fa fa-angle-double-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->

</div>