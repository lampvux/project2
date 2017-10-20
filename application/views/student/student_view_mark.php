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

            <div class="row" id="topics">
                <div class="col-xs-12 well">
                    <form class="" action="" method="POST" id="topic-filter-form" >

                        <div class="col-xs-4">
                            <label class="control-label col-xs-4 col-sm-3 no-padding-right" for="teacher-id">Giáo viên: </label>
                            <div class="col-xs-8 col-sm-9">
                                <select id="teacher-id" class="multiselect" multiple="">
                                    <?php foreach ($teachers as $teacher): ?>
                                        <option value="<?= $teacher['uid'] ?>"  <?= in_array($teacher['uid'], $teachers_id) ? 'selected' : "" ?> >
                                            <?= $teacher['fullname'] != '' ? $teacher['fullname'] : $teacher['username'] ?>
                                        </option>
                                    <?php endforeach ?>
                                </select>
                            </div>
                        </div>

                        <div class="col-xs-4">
                            <label class="control-label col-xs-4 col-sm-3 no-padding-right" for="company-id">Công ty: </label>
                            <div class="col-xs-8 col-sm-9">
                                <select id="company-id" class="multiselect" multiple="">
                                    <?php foreach ($companies as $company): ?>
                                        <option value="<?= $company['company_id'] ?>" <?= in_array($company['company_id'], $companies_id) ? 'selected' : "" ?> >
                                            <?= $company['company_name'] ?>
                                        </option>
                                    <?php endforeach ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label class="control-label col-xs-4 col-sm-3 no-padding-right" for="company-id">Kỹ năng: </label>
                            <div class="col-xs-8 col-sm-9">
                                <input type="text" id="skills_id" value="<?= $skills_name ?>" placeholder="Nhập kỹ năng ..."/>
                            </div>                            
                        </div>
                    </form>
                </div>
                <div id="topics_content">
                    <?php if (count($topics)): ?>
                        <?php foreach ($topics as $topic): ?>
                            <div class="media search-media">
                                <div class="media-left">
                                    <img class="media-object" src="assets/img/topic.png" />
                                </div>

                                <div class="media-body">
                                    <div>
                                        <h4 class="media-heading">
                                            <?= $topic['subject_name'] ?>
                                        </h4>
                                    </div>
                                    <p>
                                        <strong>Công ty: </strong><?= $topic['company_name'];?>
                                    </p>
                                    <p class="clearfix">
                                        <strong class="pull-left">Mô tả: </strong>
                                        <?php $des = $topic['description'];
                                        $first = implode(' ', array_slice(explode(' ', $des), 0, 20));
                                        $rest = str_replace($first, '', $des); ?>
                                        <span class="pull-left"><?= $first ?>  </span>
                                        <?php if ($rest != ''): ?>
                                            <span class="collapse pull-left" id="rest_of_<?= $topic['topic_id'] ?>">
                                                <?= $rest ?>
                                            </span>
                                            <button class="btn btn-white btn-minier btn-primary" type="button" data-toggle="collapse" data-target="#rest_of_<?= $topic['topic_id'] ?>" aria-expanded="false" aria-controls="rest_of_<?= $topic['topic_id'] ?>"></button>
                                        <?php endif ?>
                                    </p>
                                    <ul class="skill_list clearfix">
                                        <?php foreach ($topic['skills_required'] as $skill): ?>
                                            <li><?= $skill['skill_name'] ?></li>
                                        <?php endforeach ?>
                                    </ul>
                                    <div class="search-actions text-center">
                                        <img src="<?= @($topic['user_avatar']['avatar'] != '') ? $topic['user_avatar']['avatar'] : DEFAULT_AVATAR ?>" alt="Ảnh của <?= $topic['username'];?>" class="img-reponsive" with="70" height="70">
                                        <div class="space"></div>
                                        <span class="clearfix professor">
                                            <?= ($topic['fullname'] != '') ? $topic['fullname'] :$topic['username'] ?>
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="space"></div>
                        <?php endforeach ?>
                        <?= $pagination; ?>
                    <?php else: ?>
                        <h2>Không có kết quả nào!</h2>
                    <?php endif; ?>
                </div>
            </div>
        
            <!-- /.user-cv -->
            
            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
    </div><!-- /.page-content -->

</div><!-- /.main-content -->
