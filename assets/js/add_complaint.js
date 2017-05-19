jQuery(function($) {
    // //initiate dataTables plugin
    // var myTable =
    //     $('#dynamic-table')
    //     //.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
    //     .DataTable({
    //         bAutoWidth: false,
    //         "aoColumns": [
    //             { "bSortable": false },
    //             null, null, null, null, null,
    //             { "bSortable": false }
    //         ],
    //         "aaSorting": [],


    //         //"bProcessing": true,
    //         //"bServerSide": true,
    //         //"sAjaxSource": "http://127.0.0.1/table.php"	,

    //         //,
    //         //"sScrollY": "200px",
    //         //"bPaginate": false,

    //         //"sScrollX": "100%",
    //         //"sScrollXInner": "120%",
    //         //"bScrollCollapse": true,
    //         //Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
    //         //you may want to wrap the table inside a "div.dataTables_borderWrap" element

    //         //"iDisplayLength": 50


    //         select: {
    //             style: 'multi'
    //         }
    //     });



    // $.fn.dataTable.Buttons.defaults.dom.container.className = 'dt-buttons btn-overlap btn-group btn-overlap';

    // new $.fn.dataTable.Buttons(myTable, {
    //     buttons: [{
    //         "extend": "colvis",
    //         "text": "<i class='fa fa-search bigger-110 blue'></i> <span class='hidden'>Show/hide columns</span>",
    //         "className": "btn btn-white btn-primary btn-bold",
    //         columns: ':not(:first):not(:last)'
    //     }, {
    //         "extend": "copy",
    //         "text": "<i class='fa fa-copy bigger-110 pink'></i> <span class='hidden'>Copy to clipboard</span>",
    //         "className": "btn btn-white btn-primary btn-bold"
    //     }, {
    //         "extend": "csv",
    //         "text": "<i class='fa fa-database bigger-110 orange'></i> <span class='hidden'>Export to CSV</span>",
    //         "className": "btn btn-white btn-primary btn-bold"
    //     }, {
    //         "extend": "excel",
    //         "text": "<i class='fa fa-file-excel-o bigger-110 green'></i> <span class='hidden'>Export to Excel</span>",
    //         "className": "btn btn-white btn-primary btn-bold"
    //     }, {
    //         "extend": "pdf",
    //         "text": "<i class='fa fa-file-pdf-o bigger-110 red'></i> <span class='hidden'>Export to PDF</span>",
    //         "className": "btn btn-white btn-primary btn-bold"
    //     }, {
    //         "extend": "print",
    //         "text": "<i class='fa fa-print bigger-110 grey'></i> <span class='hidden'>Print</span>",
    //         "className": "btn btn-white btn-primary btn-bold",
    //         autoPrint: false,
    //         message: 'This print was produced using the Print button for DataTables'
    //     }]
    // });
    // myTable.buttons().container().appendTo($('.tableTools-container'));

    // //style the message box
    // var defaultCopyAction = myTable.button(1).action();
    // myTable.button(1).action(function(e, dt, button, config) {
    //     defaultCopyAction(e, dt, button, config);
    //     $('.dt-button-info').addClass('gritter-item-wrapper gritter-info gritter-center white');
    // });


    // var defaultColvisAction = myTable.button(0).action();
    // myTable.button(0).action(function(e, dt, button, config) {

    //     defaultColvisAction(e, dt, button, config);


    //     if ($('.dt-button-collection > .dropdown-menu').length == 0) {
    //         $('.dt-button-collection')
    //             .wrapInner('<ul class="dropdown-menu dropdown-light dropdown-caret dropdown-caret" />')
    //             .find('a').attr('href', '#').wrap("<li />")
    //     }
    //     $('.dt-button-collection').appendTo('.tableTools-container .dt-buttons')
    // });

    // ////

    // setTimeout(function() {
    //     $($('.tableTools-container')).find('a.dt-button').each(function() {
    //         var div = $(this).find(' > div').first();
    //         if (div.length == 1) div.tooltip({ container: 'body', title: div.parent().text() });
    //         else $(this).tooltip({ container: 'body', title: $(this).text() });
    //     });
    // }, 500);





    // myTable.on('select', function(e, dt, type, index) {
    //     if (type === 'row') {
    //         $(myTable.row(index).node()).find('input:checkbox').prop('checked', true);
    //     }
    // });
    // myTable.on('deselect', function(e, dt, type, index) {
    //     if (type === 'row') {
    //         $(myTable.row(index).node()).find('input:checkbox').prop('checked', false);
    //     }
    // });




    // /////////////////////////////////
    // //table checkboxes
    // $('th input[type=checkbox], td input[type=checkbox]').prop('checked', false);

    // //select/deselect all rows according to table header checkbox
    // $('#dynamic-table > thead > tr > th input[type=checkbox], #dynamic-table_wrapper input[type=checkbox]').eq(0).on('click', function() {
    //     var th_checked = this.checked; //checkbox inside "TH" table header

    //     $('#dynamic-table').find('tbody > tr').each(function() {
    //         var row = this;
    //         if (th_checked) myTable.row(row).select();
    //         else myTable.row(row).deselect();
    //     });
    // });

    // //select/deselect a row when the checkbox is checked/unchecked
    // $('#dynamic-table').on('click', 'td input[type=checkbox]', function() {
    //     var row = $(this).closest('tr').get(0);
    //     if (this.checked) myTable.row(row).deselect();
    //     else myTable.row(row).select();
    // });



    // $(document).on('click', '#dynamic-table .dropdown-toggle', function(e) {
    //     e.stopImmediatePropagation();
    //     e.stopPropagation();
    //     e.preventDefault();
    // });


    //And for the first simple table, which doesn't have TableTools or dataTables
    //select/deselect all rows according to table header checkbox
    var active_class = 'active';
    $('#simple-table > thead > tr > th input[type=checkbox]').eq(0).on('click', function() {
        var th_checked = this.checked; //checkbox inside "TH" table header

        $(this).closest('table').find('tbody > tr').each(function() {
            var row = this;
            if (th_checked) $(row).addClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', true);
            else $(row).removeClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', false);
        });
    });

    //select/deselect a row when the checkbox is checked/unchecked
    $('#simple-table').on('click', 'td input[type=checkbox]', function() {
        var $row = $(this).closest('tr');
        if ($row.is('.detail-row ')) return;
        if (this.checked) $row.addClass(active_class);
        else $row.removeClass(active_class);
    });



    /********************************/
    //add tooltip for small view action buttons in dropdown menu
    $('[data-rel="tooltip"]').tooltip({ placement: tooltip_placement });

    //tooltip placement on right or left
    function tooltip_placement(context, source) {
        var $source = $(source);
        var $parent = $source.closest('table')
        var off1 = $parent.offset();
        var w1 = $parent.width();

        var off2 = $source.offset();
        //var w2 = $source.width();

        if (parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2)) return 'right';
        return 'left';
    }




    /***************/
    $('.show-details-btn').on('click', function(e) {
        e.preventDefault();
        $(this).closest('tr').next().toggleClass('open');
        $(this).find(ace.vars['.icon']).toggleClass('fa-angle-double-down').toggleClass('fa-angle-double-up');
    });
    /***************/





    /**
    //add horizontal scrollbars to a simple table
    $('#simple-table').css({'width':'2000px', 'max-width': 'none'}).wrap('<div style="width: 1000px;" />').parent().ace_scroll(
      {
    	horizontal: true,
    	styleClass: 'scroll-top scroll-dark scroll-visible',//show the scrollbars on top(default is bottom)
    	size: 2000,
    	mouseWheelLock: true
      }
    ).css('padding-top', '12px');
    */

    $('#editor1').ace_wysiwyg({
        toolbar: [
            'font',
            null,
            'fontSize',
            null,
            { name: 'bold', className: 'btn-info' },
            { name: 'italic', className: 'btn-info' },
            { name: 'strikethrough', className: 'btn-info' },
            { name: 'underline', className: 'btn-info' },
            null,
            { name: 'insertunorderedlist', className: 'btn-success' },
            { name: 'insertorderedlist', className: 'btn-success' },
            { name: 'outdent', className: 'btn-purple' },
            { name: 'indent', className: 'btn-purple' },
            null,
            { name: 'justifyleft', className: 'btn-primary' },
            { name: 'justifycenter', className: 'btn-primary' },
            { name: 'justifyright', className: 'btn-primary' },
            { name: 'justifyfull', className: 'btn-inverse' },
            null,
            { name: 'createLink', className: 'btn-pink' },
            { name: 'unlink', className: 'btn-pink' },
            null,
            { name: 'insertImage', className: 'btn-success' },
            null,
            'foreColor',
            null,
            { name: 'undo', className: 'btn-grey' },
            { name: 'redo', className: 'btn-grey' }
        ],
        'wysiwyg': {
            fileUploadError: showErrorAlert
        }
    }).prev().addClass('wysiwyg-style2');

    function showErrorAlert(reason, detail) {
        var msg = '';
        if (reason === 'unsupported-file-type') { msg = "Unsupported format " + detail; } else {
            //console.log("error uploading file", reason, detail);
        }
        $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
            '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
    }


    //RESIZE IMAGE

    //Add Image Resize Functionality to Chrome and Safari
    //webkit browsers don't have image resize functionality when content is editable
    //so let's add something using jQuery UI resizable
    //another option would be opening a dialog for user to enter dimensions.
    if (typeof jQuery.ui !== 'undefined' && ace.vars['webkit']) {

        var lastResizableImg = null;

        function destroyResizable() {
            if (lastResizableImg == null) return;
            lastResizableImg.resizable("destroy");
            lastResizableImg.removeData('resizable');
            lastResizableImg = null;
        }

        var enableImageResize = function() {
            $('.wysiwyg-editor')
                .on('mousedown', function(e) {
                    var target = $(e.target);
                    if (e.target instanceof HTMLImageElement) {
                        if (!target.data('resizable')) {
                            target.resizable({
                                aspectRatio: e.target.width / e.target.height,
                            });
                            target.data('resizable', true);

                            if (lastResizableImg != null) {
                                //disable previous resizable image
                                lastResizableImg.resizable("destroy");
                                lastResizableImg.removeData('resizable');
                            }
                            lastResizableImg = target;
                        }
                    }
                })
                .on('click', function(e) {
                    if (lastResizableImg != null && !(e.target instanceof HTMLImageElement)) {
                        destroyResizable();
                    }
                })
                .on('keydown', function() {
                    destroyResizable();
                });
        }

        enableImageResize();

        /**
        //or we can load the jQuery UI dynamically only if needed
        if (typeof jQuery.ui !== 'undefined') enableImageResize();
        else {//load jQuery UI if not loaded
        	//in Ace demo ./components will be replaced by correct components path
        	$.getScript("assets/js/jquery-ui.custom.min.js", function(data, textStatus, jqxhr) {
        		enableImageResize()
        	});
        }
        */
    }
})
