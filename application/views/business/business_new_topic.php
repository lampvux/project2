<div class="row">
	<div class="col-xs-12">
		<form class="form-horizontal" role="form" method="POST" action="<?=base_url()?>business/Business/add_topic">
			<div class="form-group">
				<label class="col-sm-3 control-label no-padding-right" for="form-field-1"> Subject name </label>
				<div class="col-sm-9">
					<input type="text" id="form-field-1" placeholder="Subject name" class="col-xs-10 col-sm-5" />
				</div>
			</div>

			<div class="space-4"></div>

			<div class="form-group">
				<label class="col-sm-3 control-label no-padding-right" for="form-field-2"> Description </label>
				<div class="col-sm-9">
					<input type="text" id="form-field-2" placeholder="Description" class="col-xs-10 col-sm-5" />
				</div>
			</div>

			<div class="space-4"></div>

			<div class="form-group">
				<label class="col-sm-3 control-label no-padding-right" for="form-field-2">Skills required</label>
				<div class="col-sm-9">
					<input type="text" id="form-field-3" placeholder="Skills required" class="col-xs-10 col-sm-5" />
				</div>
			</div>

			<div class="space-4"></div>

			<div class="form-group">
				<label for="form-field-select-3" class="col-sm-3 control-label no-padding-right">Professor</label>
				<div class="col-sm-9">
					<select class="chosen-select col-xs-10 col-sm-5" id="form-field-select-3">
						<option value=""> </option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
					</select>
				</div>
			</div>


			<div class="clearfix form-actions">
				<div class="col-md-offset-3 col-md-9">
					<button class="btn btn-info" type="button">
						<i class="ace-icon fa fa-check bigger-110"></i>
						Submit
					</button>

					&nbsp; &nbsp; &nbsp;
					<button class="btn" type="reset">
						<i class="ace-icon fa fa-undo bigger-110"></i>
						Reset
					</button>
				</div>
			</div>
		</form>
	</div><!-- /.col -->
</div><!-- /.row -->