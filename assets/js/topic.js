jQuery(document).ready(function($) {

    $('.multiselect').multiselect({
        enableFiltering: true,
        enableHTML: true,
        nonSelectedText: "Chưa chọn gì cả",
        buttonClass: 'btn btn-white btn-primary',
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> &nbsp;<b class="fa fa-caret-down"></b></button>',
            ul: '<ul class="multiselect-container dropdown-menu"></ul>',
            filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="fa fa-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default btn-white btn-grey multiselect-clear-filter" type="button"><i class="fa fa-times-circle red2"></i></button></span>',
            li: '<li><a tabindex="0"><label></label></a></li>',
            divider: '<li class="multiselect-item divider"></li>',
            liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
        },
        onChange: function(option, checked, select) {
            search_topics();
            if (!checked) {
                console.log('run');

                if (option.context.parentElement.id == 'teacher-id') {
                    remove_session('teachers_id');
                }
                if (option.context.parentElement.id == 'company-id') {
                    remove_session('companies_id');
                }
            }
        }
    });

    // $("#teacher-id").on('change', function() {
            //     search_topics();
            //     if ($(this).val() == null) {
            //         remove_session('teachers_id');
            //     }

            // });

            // $("#company-id").on('change', function() {
            //     search_topics();
            //     if ($(this).val() == null) {
            //         remove_session('companies_id');
            //     }

            // });


    // tag input cho phần tìm kiếm
    var search_tags = $('#skills_id');
    try {
        search_tags.tag({
            placeholder: search_tags.attr('placeholder'),
            source: function(query, process) {
                $.ajax({
                        url: $('base').attr('href') + "student/get_skills/" + encodeURIComponent(query),
                    })
                    .done(function(result) {
                        result = JSON.parse(result);
                        process(result);
                    });
            }
        });
        var $tag_obj = $('#skills_id').data('tag');
        var inter_keys = $('#skills_id').val();
        inter_keys = inter_keys.split(",");
        for (var i = 0; i < inter_keys.length; i++) {
            var key = inter_keys[i].replace(/ /g, '');
            if (key != '' && key != ' ') {
                $tag_obj.add(key);
            }
        }
    } catch (e) {
        //display a textarea for old IE, because it doesn't support this plugin or another one I tried!
        search_tags.after('<textarea id="' + search_tags.attr('id') + '" name="' + search_tags.attr('name') + '" rows="3">' + search_tags.val() + '</textarea>').remove();
        // autosize($('#skills_id'));
    }


    // Tìm kiếm theo từ khóa
    $("#skills_id").on('added', function() {
        if ($(this).val() == '') {
            remove_session('skills_id');
            remove_session('skills_name');
        }
        search_topics();
    });


    $("#skills_id").on('removed', function() {
        if ($(this).val() == '') {
            remove_session('skills_id');
            remove_session('skills_name');
        }
        search_topics();
    });

    var remove_session = function(session_name) {
        $.post(
            $('base').attr('href') + "student/remove_session", {
                action: session_name
            },
            function() {}
        );
    };



    var search_topics = function() {
        var $teachers = $("#teacher-id").val() == null ? "" : $("#teacher-id").val().join(),
            $companies = $("#company-id").val() == null ? "" : $("#company-id").val().join();
        console.log('searched');
        $.post(
            $('base').attr('href') + "student/search_topics", {
                action: 'search_topics',
                teachers: $teachers,
                companies: $companies,
                skills: $("#skills_id").val()
            },
            function(data) {
                $("#topics_content").html(data);
            }
        );
    };


});
