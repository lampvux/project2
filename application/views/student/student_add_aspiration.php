<div class="main-content">
	<div class="main-content-inner">
		<div class="breadcrumbs ace-save-state" id="breadcrumbs">
			<ul class="breadcrumb">
				<li>
					<i class="ace-icon fa fa-home home-icon"></i>
					<a href="profile">Home</a>
				</li>
				<li class="active">Đăng Kí Nguyện Vọng </li>
			</ul><!-- /.breadcrumb -->

		</div>
		<div class="col-xs-12">
			
			<div class="widget-box">
				
				<div class="widget-header">
					<h4>Sinh Viên Đăng Kí Nguyện Vọng Thực Tập</h4>
				</div><!-- /.page-header -->
			
				<div class="widget-body">
					<div class="space"></div>
					
				   	<form class="form-horizontal" id="validation-form" method="POST" action="">
				   		<div class="col-xs-12 col-md-6">
							<div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="fullname">Họ Tên:</label>

					            <div class="col-xs-12 col-sm-9">
				                    <input type="text" name="fullname" id="fullname" class="form-control" value="<?= $user['fullname'] ?>" />
					            </div>
					        </div>		        

					        <div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="class">Lớp:</label>

					            <div class="col-xs-12 col-sm-9">
				                    <input type="text" name="class" id="class" class="form-control" />
					            </div>
					        </div>	

					        <div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="mssv">MSSV:</label>

					            <div class="col-xs-12 col-sm-9">
				                    <input type="text" name="mssv" id="mssv" value="<?= $user_meta['student_id'] ?>" class="form-control" />
					            </div>
					        </div>	

					        <div class="space-2"></div>		
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="platform">Hệ Đh Sử Dụng</label>

					            <div class="col-xs-12 col-sm-9">
				                    <select class="form-control" id="platform" name="platform">
				                        <option value="windows">Windows</option>
				                        <option value="linux">Linux</option>		                   
				                        <option value="mac">Mac OS</option>
				                        <option value="ios">iOS</option>
				                        <option value="android">Android</option>
				                    </select>
					            </div>
					        </div>

					        <div class="space-2"></div>
					        <div class="form-group">
								<label class="col-sm-3 control-label no-padding-right" for="form-field-tags">Chứng Chỉ Đã Có</label>

								<div class="col-sm-9">
									<input type="text" name="diploma" id="diploma" class="form-control" placeholder="MBA tại Bắc Cực" />
								</div>
							</div>
							<div class="space-2"></div>
					        <div class="form-group">
								<label class="col-sm-3 control-label no-padding-right" for="form-field-tags">Chọn Chủ Đề</label>

								<div class="col-sm-9">
									<select id="recruitment_id" name="recruitment_id" class="form-control" data-placeholder="Chọn một chủ đề thực tập...">
					                    <?php foreach ($recruitments as $recruitment): ?>
					                    	<option value="<?= $recruitment['recruitment_id']; ?>">
					                    		<?= $recruitment['requirement']?>
					                    	</option>		                    	
					                    <?php endforeach ?>			                    
					                </select>
								</div>
							</div>
						</div>

						<div class="col-xs-12 col-md-6">
							<div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="address">Địa Chỉ:</label>

					            <div class="col-xs-12 col-sm-9">
				                    <input type="text" name="address" id="address" class="form-control" value="<?= $user_meta['address'] ?>" />
					            </div>
					        </div>        

					        <div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="email">Email:</label>

					            <div class="col-xs-12 col-sm-9">
				                    <input type="email" name="email" id="email" class="form-control" />
					            </div>
					        </div>	

					        <div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="phone">Số Điện Thoại:</label>

					            <div class="col-xs-12 col-sm-9">
					                <div class="input-group">
					                    <span class="input-group-addon">
										<i class="ace-icon fa fa-phone"></i>
										</span>

					                    <input type="tel" id="phone" name="phone" class="form-control" />
					                </div>
					            </div>
					        </div>

					        <div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right">Giới Tính</label>

					            <div class="col-xs-12 col-sm-9">
					            	<div class="space-2"></div>
					            	<div class="space-2"></div>
				                    <label class="blue">
				                        <input name="gender" value="1" type="radio" class="ace" />
				                        <span class="lbl"> Nam</span>
				                    </label>

				                    <label class="blue">
				                        <input name="gender" value="2" type="radio" class="ace" />
				                        <span class="lbl"> Nữ</span>
				                    </label>
					            </div>
					        </div>

					        <div class="space-2"></div>
					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="topic_id">Chọn Đề Tài: </label>

					            <div class="col-xs-12 col-sm-9">
					                <select id="topic_id" name="topic_id" class="form-control" data-placeholder="Chọn một đề tài...">
					                    <?php foreach ($topics as $topic): ?>
					                    	<option value="<?= $topic['topic_id']; ?>">
					                    		<?= $topic['subject_name']?>
					                    	</option>		                    	
					                    <?php endforeach ?>			                    
					                </select>
					            </div>
					        </div>

					        <div class="space-2"></div>

					        <div class="form-group">
					            <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="des">Nguyện vọng</label>

					            <div class="col-xs-12 col-sm-9">
					                <textarea class="form-control" name="des" id="des"></textarea>
					            </div>
					        </div>
						</div>
						<div class="clearfix"></div>
				        <div id="accordion" class="accordion-style1 col-xs-12 panel-group">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
											<i class="ace-icon fa fa-angle-down bigger-110" data-icon-hide="ace-icon fa fa-angle-down" data-icon-show="ace-icon fa fa-angle-right"></i>
											&nbsp; Dành Cho Sinh Viên Đã Có Chỗ Thực Tập
										</a>
									</h4>
								</div>

								<div class="panel-collapse collapse" id="collapseOne">
									<div class="panel-body">
										<div class="form-group col-sm-6">
							        	    <label class="control-label col-sm-3 col-xs-12" for="coquan">Tên Công Ty:</label>
		
							        	    <div class="col-xs-12 col-sm-9">
						        	            <input type="text" name="coquan" id="coquan" class="form-control" />
							        	    </div>
							        	</div>		        
			
							        	<div  class="form-group col-sm-6">
							        	    <label class="control-label col-xs-12 col-sm-3" for="diachi">Địa Chỉ:</label>
							        	    <div class="col-xs-12 col-sm-9">
						        	            <input type="text" name="diachi" id="diachi" class="form-control" />
							        	    </div>
							        	</div>	

								        <div class="form-group col-sm-6">
							        	    <label class="control-label no-padding-right col-xs-12 col-sm-3" for="phutrach">Người Phụ Trách:</label>
		
							        	    <div class="col-sm-9 col-xs-12">
						        	            <input type="text" name="phutrach" id="phutrach" class="form-control"  />
							        	    </div>
						        	    </div>
			
							        	<div class="form-group col-sm-6">
							        	    <label class="control-label col-sm-3 col-xs-12 no-padding-right" for="dienthoai">Điện Thoại:</label>
							        	    <div class="col-sm-9 col-xs-12">
							        	         <div class="input-group">
								                    <span class="input-group-addon">
														<i class="ace-icon fa fa-phone"></i>
													</span>
								                    <input type="tel" id="dienthoai" class="form-control" name="dienthoai" />
								                </div>
							        	    </div>
							        	</div>	

								        <div class="form-group col-sm-6">
							        	    <label class="control-label col-sm-3 col-xs-12 no-padding-right" for="mail">Email:</label>
			
							        	    <div class="col-sm-9 col-xs-12">
						        	            <input type="email" class="form-control" name="mail" id="mail"  />
							        	    </div>
							        	</div>		        
			
							        	<div  class="form-group col-sm-6">
							        	    <label class="control-label col-sm-3 col-xs-12 no-padding-right" for="time">Thời Gian:</label>
							        	    <div class="col-md-12 col-md-9">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="fa fa-calendar bigger-110"></i>
													</span>
													<input class="form-control" type="text" name="date-range-picker" id="id-date-range-picker-1" />
												</div>
							        	    </div>
							        	</div>		        
									</div>
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
				        <div class="clearfix form-actions">
							<div class="col-md-12 text-right">
								<input type="submit" class="btn btn-white btn-info" value="Gửi Đăng Ký">						
							</div>
						</div>		        
				    </form>
				</div>
			</div>
		</div>

	</div>
</div>



