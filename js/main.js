var     move = document.getElementById('move'),
       span1 = document.getElementById('individual'),
       span2 = document.getElementById('company'),
    plan_r_1 = document.getElementById('plan-r-1'),
    plan_r_2 = document.getElementById('plan-r-2');

span1.onclick = function() {
    move.style.transform = '';


    plan_r_2.style.opacity = '0';
    setTimeout(function() {
        plan_r_2.style.display = 'none';
    },200);


    setTimeout(function() {
        plan_r_1.style.display = 'block';
    },400);
    plan_r_1.style.opacity = '1';


    setTimeout(function() {
        span1.style.color = '';
        span2.style.color = '';
    }, 300);
}
span2.onclick = function() {
    move.style.transform = 'translateX(127px)';
    
    plan_r_1.style.opacity = '0';
    setTimeout(function() {
        plan_r_1.style.display = 'none';
    },200);
    
    
    setTimeout(function() {
        plan_r_2.style.display = 'block';
    },400);
    plan_r_2.style.opacity = '1';
    

    setTimeout(function() {
        span1.style.color = '#b5b5b7';
        span2.style.color = '#000';
    }, 300);
}

/*<----------------------------------------->*/


var  nav = document.getElementById('nav'),
    navs = nav.getBoundingClientRect().bottom + window.pageYOffset,
     h1 = document.getElementById('h1'),
    ul_1 = document.getElementById('ul_1'),
    ul_2 = document.getElementById('ul_2');



window.onscroll = function() {
    if(nav.classList.contains('sticky') && window.pageYOffset < 1) {
        nav.classList.remove('sticky');
        h1.style.marginTop = '';
        nav.style.height = '';
        ul_1.style.marginLeft = '';
        ul_2.style.marginRight = '';
        burger.style.marginLeft = '';
    } else if(window.pageYOffset > 1) {
        nav.classList.add('sticky');
        h1.style.marginTop = '160px';
        nav.style.height = '120px';
        ul_1.style.marginLeft = '220px';
        ul_2.style.marginRight = '220px';
        burger.style.marginLeft = '14.5%';
    }
}


/*<------------------------------------------->*/


var  btn1 = document.getElementById('btn-1'),
    close = document.getElementById('btn-close'),
    fixed = document.getElementById('fixed'),
    video = document.getElementById('video-frame');

btn1.onclick = function() {
    fixed.style.display = 'block';
    video.src = 'https://www.youtube.com/embed/ZDUm_r7ikkE';
    document.body.style.overflow = 'hidden';
}

close.onclick = function() {
    fixed.style.display = 'none';
    video.src = 'not.found/404';
    document.body.style.overflow = 'visible';
}

window.onclick = function(event) {
    if (event.target == fixed) {
        fixed.style.display = 'none';
        video.src = 'not.found/404';
        document.body.style.overflow = 'visible';
    }
}

/*<--------------------------------------------->*/

var      burger = document.getElementById('burger'),
       left_nav = document.getElementById('nav-burger'),
      close_nav = document.getElementById('close-nav');

burger.onclick = function() {
    left_nav.style.left = '0px';
}

close_nav.onclick = function() {
    left_nav.style.left = '';
}

/*<----------------------------------------------->*/

window.onresize = function() {
    if (document.body.clientWidth > 1180) {
        left_nav.style.left = '';
    }
}

/*<----------------------------------------------->*/

var preloader = document.getElementById('preloader');

document.body.onload = function() {
    setTimeout(function() {
        preloader.style.display = 'none';
        document.body.style.overflow = 'visible';
    }, 1000);
}