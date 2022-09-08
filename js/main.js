
// loading to init...........

$(document).ready(function(){
    $('#ready').fadeOut(2000, function(){
        $('body').css('overflow','visible');
        $('#topBtn').css('display' , 'none')
    })
})


// when click event on topbtn & toggle 

$('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$('#btnTopFooter').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$(window).scroll(function(){

    let featuresOffset = $('#features').offset().top;
    let aboutOffset = $('#about').offset().top;

    if($(window).scrollTop() > featuresOffset && $(window).scrollTop() < aboutOffset)
    {
        $('#topBtn').fadeIn(500);
    }
    else
    {
        $('#topBtn').fadeOut(250);
    }
})

// change toggle navbar style

$('.navbar .navbar-toggler').click(()=>{
    $('.navbar .navbar-toggler').toggleClass('convert');
})


// add class active to an active link and smooth move.....

$('.navbar-nav .nav-item a').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('href');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({scrollTop : currentOffset}, 500);
})


let sel = document.querySelector('select');
    sel.addEventListener('change', function() {
        if (this.options[sel.selectedIndex].text == 'English' || this.options[sel.selectedIndex].text == 'الإنجليزية') {
            $('body').css('fontFamily','Roboto');

            // .............................

            $('nav').attr('dir' , 'ltr');
            $('.collapse .navbar-nav').addClass('me-auto');
            $('.collapse .navbar-nav').removeClass('ms-auto');
            $('.custome').removeClass('me-auto');

            $('a[href = "#home"]').text('Home');
            $('a[href = "#features"]').text('Features');
            $('a[href = "#screenshots"]').text('Screenshots');
            $('a[href = "#about"]').text('About Us');
            $('a[href = "#get"]').text('Get Our App');

            $('.custome option[value = English]').text('English');
            $('.custome option[value = Arabic]').text('العربية'); 

            // ...............................

            $('header').attr('dir' , 'ltr');
            $('.caption h1').text('Save Your Time With One Click')
            $('.caption p').text('Your time is so important to that our job is to save your time and help you get an appointment without waiting. ');
            $('.home .vectors .vector').css('marginTop','0px');
            $('.home .buttons .special-m').html(`<i
            class="fa-solid fa-download me-1"></i> Get App`); 
            $('.home .buttons .special-m i').addClass('me-1'); 
            $('.home .buttons .special-m').removeClass('ms-3'); 
            $('.home .buttons .special-m').addClass('me-3'); 
            $('.home .buttons .special-m i').removeClass('ms-1'); 
            $('.home .buttons a').css('fontSize','18px'); 
            $('.home .buttons .second-btn').html(`<i
            class="fa-solid fa-circle-play me-1"></i> Watch Video`);
            $('.home .buttons .second-btn i').addClass('me-1');
            $('.home .buttons .second-btn i').removeClass('ms-1');

            // .................................................

            $('.features').attr('dir','ltr');
            $('.special').css({'marginRight':'0px' , 'marginLeft' : 'auto'});
            $('.special-second').css({'marginLeft':'0px' , 'marginRight' : 'auto'});
            $('.feature span').css({'marginLeft':'0px' , 'marginRight' : '14px'})
            $('.features .main-title h5').text('What We Serve?');
            $('.features .main-title h2').text('Our Features');
            $('.feature .one').text('Book your queue and appointment from anywhere.');
            $('.feature .two').html(`Looking for fun? Zari on Time let you know best places to have fun.`);
            $('.feature .three').text('Book nearest events around you.');
            $('.feature .four').text('Get all kinds of offers from one app.');
            $('.feature .five').text('Know the expected arrival time and service level.');
            $('.feature .six').text('Order you coffee or meal from any cafe or restaurant thru the app.');
            $('.feature .seven').text('Get the latest discount coupons through the app.');
            $('.feature .eight').text('Services');

            // ................................................

            $('.screenshots h5').text('Need to see our app?');
            $('.screenshots h2').text('Screen Shots');

            // ................................................

            $('.about').attr('dir','ltr');
            $('.about h5').text('Do you Know us?');
            $('.about h2').text('About Zari On Time');
            $('.about p').text(`Zari on Time let you make a reservation at any Doctors, Salons,
            Banks....etc
            Zari on Time is used when you don’t like to wait in Banks or outside using two apps one for
            Client and the other for the banks.`);

            // .................................................

            $('.get').attr('dir','ltr');
            $('.get .main-title h5').text('Do you have our app?');
            $('.get .main-title h2').text('Get Our Applications');
            $('.get .main-title p').text('Our applications are available now on App store & Play store..');
            $('.parag p').css('textAlign','start');
            $('.client h4').text('Zari on Time (Client App)');
            $('.client i').removeClass('ms-3');
            $('.client i').addClass('me-3');
            $('.client .parag .available').text('Available on the');
            $('.client .parag .get-on').text('Get On');
            $('.manager h4').text('Zari on Time (Manager App)');
            $('.manager i').removeClass('ms-3');
            $('.manager i').addClass('me-3');
            $('.manager .available').text('Available on the');
            $('.manager .get-on').text('Get On');

            // ...................................................

            $('.footer').attr('dir','ltr')
            $('.logo-footer p').text(`Zari On Time it’s an application for booking appointments with service and product providers
            to preserve the time of the customer and the facility.`);
            $('.logo-footer h5').text('Follow us ');
            $('.navigate .first-navigate').text('navigate');
            $('.navigate .contact').text('Contact us'); 
            $('.navigate div span').removeClass('ms-3');
            $('.navigate div span').addClass('me-3');
            $('.navigate div .ksa').text('7865 King Abdullah Bin - Abdulaziz Road - Jasham - AL-Madina - KSA.');
            $('.navigate div .egy').text('9 Street Saeed Zakaria - Nasr City - Cairo - Egypt.');
            $('.phone a').attr('dir','ltr');
            $('.phone .first').removeClass('ms-2');
            $('.phone .first').addClass('me-2');
            $('.phone .second').removeClass('me-2');
            $('.phone .second').addClass('ms-2');
        }
        else if (this.options[sel.selectedIndex].text == 'Arabic' || this.options[sel.selectedIndex].text == 'العربية') {
            $('body').css('fontFamily','Tajawal')

            // .............................

            $('nav').attr('dir' , 'rtl');
            $('.collapse .navbar-nav').addClass('ms-auto');
            $('.collapse .navbar-nav').removeClass('me-auto');
            $('.custome').addClass('me-auto');

            $('a[href = "#home"]').text('الرئيسية');
            $('a[href = "#features"]').text('المميزات');
            $('a[href = "#screenshots"]').text('اللقطات');
            $('a[href = "#about"]').text('تعرف علينا');
            $('a[href = "#get"]').text('الحصول علي تطبيقنا');

            $('.custome option[value = English]').text('English');
            $('.custome option[value = Arabic]').text('العربية'); 

            // ...............................

            $('header').attr('dir' , 'rtl');
            $('.caption h1').text('وفر وقتك بضغطة زر واحدة')
            $('.caption p').text('التطبيق الاسهل والاسرع في حجز موعدك وتوفير وقتك دون انتظار..');
            $('.home .vectors .vector').css('marginTop','30px');
            $('.home .buttons .special-m').html(`<i
            class="fa-solid fa-download me-1"></i> الحصول علي التطبيق`);
            $('.home .buttons .special-m i').removeClass('me-1');
            $('.home .buttons .special-m').addClass('ms-3');
            $('.home .buttons .special-m i').addClass('ms-1');
            $('.home .buttons a').css('fontSize','16px');
            $('.home .buttons .second-btn').html(`<i
            class="fa-solid fa-circle-play me-1"></i> شاهد الفيديو`);
            $('.home .buttons .second-btn i').removeClass('me-1');
            $('.home .buttons .second-btn i').addClass('ms-1');

            // .................................................

            $('.features').attr('dir','rtl');
            $('.special').css({'marginLeft':'0px' , 'marginRight' : 'auto'});
            $('.special-second').css({'marginRight':'0px' , 'marginLeft' : 'auto'});
            $('.feature span').css({'marginRight':'0px' , 'marginLeft' : '14px'})
            $('.features .main-title h5').text('ماذا نخدم ؟');
            $('.features .main-title h2').text('أبرز ميزات تطبيق Zari on time.');
            $('.feature .one').text('احجز دورك وموعدك من أي مكان.');
            $('.feature .two').html(`تبحث عن المتعة ؟ <br> Zari on Time تتيح لك معرفة أفضل الأماكن للإستمتاع.`);
            $('.feature .three').text('احجز أقرب الأحداث من حولك.');
            $('.feature .four').text('احصل علي جميع أنواع العروض من تطبيق واحد.');
            $('.feature .five').text('معرفة وقت الوصول المتوقع ومستوي الخدمة.');
            $('.feature .six').text('اطلب قهوتك أو وجبتك من أي كافية أو مطعم من خلال التطبيق.');
            $('.feature .seven').text('احصل علي أحدث كوبونات الخصم من خلال التطبيق.');
            $('.feature .eight').text('خدمات.');

            // ................................................

            $('.screenshots h5').text('بحاجة لرؤية تطبيقنا ؟');
            $('.screenshots h2').text('لقطات');

            // ................................................

            $('.about').attr('dir','rtl');
            $('.about h5').text('هل تعرفنا ؟');
            $('.about h2').text('حول Zari On Time');
            $('.about p').text('في تطبيق Zari on time نهتم بتوفير الوقت من خلال خدمات الحجز المتنوعة مستشفيات، صالونات، بنوك أو غيرها…');

            // .................................................

            $('.get').attr('dir','rtl');
            $('.get .main-title h5').text('هل لديك تطبيقنا ؟');
            $('.get .main-title h2').text('احصل علي تطبيقاتنا');
            $('.get .main-title p').text('تطبيقاتنا متاحة الآن علي App store & Play store..');
            $('.parag p').css('textAlign','start');
            $('.client h4').text('Zari on Time (تطبيق العميل)');
            $('.client i').removeClass('me-3');
            $('.client i').addClass('ms-3');
            $('.client .parag .available').text('متاح علي');
            $('.client .parag .get-on').text('الذهاب لــ');
            $('.manager h4').text('Zari on Time (تطبيق المدير)');
            $('.manager i').removeClass('me-3');
            $('.manager i').addClass('ms-3');
            $('.manager .available').text('متاح علي');
            $('.manager .get-on').text('الذهاب لــ');

            // ...................................................

            $('.footer').attr('dir','rtl')
            $('.logo-footer p').text('هو تطبيق لحجز المواعيد مع مزودي الخدمة والمنتجات للحفاظ علي وقت العميل والمنشأة.');
            $('.logo-footer h5').text('تابعنــــا');
            $('.navigate .first-navigate').text('التنقل');
            $('.navigate .contact').text('تواصل معنــا'); 
            $('.navigate div span').removeClass('me-3'); 
            $('.navigate div span').addClass('ms-3');
            $('.navigate div .ksa').text('7865 الملك عبدالله بن عبدالعزيز - جاسم - المدينة المنورة - المملكة العربية السعودية.');
            $('.navigate div .egy').text('9 شارع سعيد زكريا - مدينة نصر - القاهرة - جمهورية مصر العربية.');
            $('.phone a').attr('dir','ltr');
            $('.phone .first').removeClass('me-2');
            $('.phone .first').addClass('ms-2');
            $('.phone .second').removeClass('ms-2');
            $('.phone .second').addClass('me-2');
        }
    });