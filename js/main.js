(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    $('[data-bg]').each(function() {
        // Extract the image URL from the data-bg attribute
        const imageUrl = $(this).data('bg');
    
        // Set the background-image style property
        $(this).css('background', `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${imageUrl}) center center no-repeat`);
        $(this).css('background-size', `cover`);
      });

    $('.responsive_table').DataTable( {
        responsive: true,
        lengthMenu: [5, 10, 15, { label: 'Toàn bộ', value: -1 }],
        order: [],
        language: {
        "decimal":        "",
        "emptyTable":     "Không có dữ liệu",
        "info":           "Hiển thị từ dòng _START_ tới dòng _END_ của _TOTAL_ dòng",
        "infoEmpty":      "Hiển thị từ dòng 0 tới dòng 0 của 0 dòng",
        "infoFiltered":   "(Dữ liệu lọc từ _MAX_ dòng)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Hiển thị _MENU_ dòng",
        "loadingRecords": "Đang tải...",
        "processing":     "",
        "search":         "Tìm kiếm  ",
        "zeroRecords":    "Dữ liệu không tìm thấy",
        "paginate": {
            "first":      "Đầu tiên",
            "last":       "Cuối cùng",
            "next":       "Sau",
            "previous":   "Trước"
        },
        "aria": {
            "orderable":  " sắp xếp tăng dần theo cột này",
            "orderableReverse": "sắp xếp giảm dần theo cột này"
        }
        }
    } );
})(jQuery);


