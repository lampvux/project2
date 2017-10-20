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
			<!-- user-cv -->

            <div class="row">
                <?php foreach ($marks as $mark): ?>
                    <div class="col-xs-6 col-md-2 col-lg-2 col-sm-3 infobox infobox-green2 infobox-dark ">
                        <img class="infobox-icon" src="assets/img/<?php echo $mark['type']; ?>.png" alt="<?php echo $mark['type']; ?>" style="opacity: 0.5">
                        <div class="infobox-data">
                            <span class="infobox-data-number"><?php echo $mark['value']; ?></span>
                            <div class="infobox-content">
                                <?php switch ($mark['type']) {
                                    case 'mark':
                                        echo "Total";
                                        break;
                                    case 'markmid':
                                        echo "Middle exam";
                                        break;
                                    case 'markend':
                                        echo "Final exam";
                                        break;
                                } ?>
                            </div>
                        </div>  
                    </div>
                <?php endforeach ?>
            </div>
        
            <!-- /.user-cv -->
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
