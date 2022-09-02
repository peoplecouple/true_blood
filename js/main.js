window.addEventListener('DOMContentLoaded', () => {
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['main', 'cast', 'episode', 'gallery', 'clip', 'footer'],
    afterLoad: function (origin, destination) {
      const gnb_list = document.querySelectorAll('.Gnb li')
      gnb_list.forEach((el, idx) => {
        // const text = el.getAttribute('text');
        // document.documentElement.style.setProperty('--list_text', text);
        idx == destination.index
          ? el.classList.add('on')
          : el.classList.remove('on')
        el.addEventListener('click', () => {
          gnb_list.forEach(el => el.classList.remove('on'))
          el.classList.add('on')
        })
      })
      destination.index == 0
        ? document.querySelector('.Top').classList.add('on')
        : document.querySelector('.Top').classList.remove('on')

      destination.index == 2
        ? document.querySelector('.Episode').classList.add('on')
        : document.querySelector('.Episode').classList.remove('on')


      destination.index >= 4
        ? document.querySelector('.Clip').classList.add('on')
        : document.querySelector('.Clip').classList.remove('on')
    }
  })

  let swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.Top .slide_control i:nth-child(2)',
    //   prevEl: '.Top .slide_control i:nth-child(1)',
    // },

    on: {
      slideChange: function () {
        const idx = this.realIndex + 1;
        document.getElementById("current").innerHTML = idx;
        const total = this.slides.length - 2;
        document.getElementById("total").innerHTML = total;
      }
    }
  });

  let swiper_epi = new Swiper('.swiper_epi', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    on: {
      slideChange: function () {
        const idx = this.realIndex + 1;
        document.getElementById("current_epi").innerHTML = idx;
        const total = this.slides.length - 2;
        document.getElementById("total_epi").innerHTML = total;
      }
    }
  });

  let swiper_epi_02 = new Swiper('.swiper_epi_02', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    on: {
      slideChangeTransitionEnd: function () {
        const idx = this.realIndex + 1;
        document.getElementById("current_epi_02").innerHTML = idx;
        const total = this.slides.length - 2;
        document.getElementById("total_epi_02").innerHTML = total;
      }
    }
  });

  let swiper_3d = new Swiper('.swiper_3d', {
    loop: true,
    centeredSlides: true,
    slidesPerView: '3',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 40,
      depth: 100,
      slideShadows: true,
      stretch: 50
    },

    on: {
      slideChangeTransitionEnd: function () {
        const idx = this.realIndex + 1;
        document.getElementById("current_g").innerHTML = idx;
        const total = this.slides.length - 6;
        document.getElementById("total_g").innerHTML = total;
      }
    }

  });

  //각 슬라이드 네비버튼
  const cast_left = document.querySelector('.Cast .slide_control i:nth-child(1)');
  cast_left.addEventListener('click', function () {
    swiper.slidePrev();
  })
  const cast_right = document.querySelector('.Cast .slide_control i:nth-child(2)');
  cast_right.addEventListener('click', function () {
    swiper.slideNext();
  })

  const epi_left = document.querySelector('.Episode .swiper_epi .slide_control i:nth-child(1)');
  epi_left.addEventListener('click', function () {
    swiper_epi.slidePrev();
  })
  const epi_right = document.querySelector('.Episode .swiper_epi .slide_control i:nth-child(2)');
  epi_right.addEventListener('click', function () {
    swiper_epi.slideNext();
  })

  const epi_left_02 = document.querySelector('.Episode .swiper_epi_02 .slide_control i:nth-child(1)');
  epi_left_02.addEventListener('click', function () {
    swiper_epi_02.slidePrev();
  })
  const epi_right_02 = document.querySelector('.Episode .swiper_epi_02 .slide_control i:nth-child(2)');
  epi_right_02.addEventListener('click', function () {
    swiper_epi_02.slideNext();
  })

  const g_left = document.querySelector('.Gallery .slide_control i:nth-child(1)');
  g_left.addEventListener('click', function () {
    swiper_3d.slidePrev();
  })
  const g_right = document.querySelector('.Gallery .slide_control i:nth-child(2)');
  g_right.addEventListener('click', function () {
    swiper_3d.slideNext();
  })


  // clip div 펼치기
  // const clip_div = document.querySelectorAll('.Clip .flexbox>div')
  // clip_div.forEach(el => {
  //   el.addEventListener('click', e => {
  //     e.preventDefault()
  //     clip_div.forEach(el => el.classList.remove('on'))
  //     el.classList.add('on')
  //   })
  // })
  // addEventListener callback함수의 파람은 event!

  document.querySelector('.Icons').addEventListener('click', function () {
    document.querySelector('.cover').classList.add('on')
  })

  document.querySelector('.cover .c_btn').addEventListener('click', function () {
    document.querySelector('.cover').classList.remove('on')
  })



  const cover_li = document.querySelectorAll('.cover ul li');
  cover_li.forEach(el => {
    el.addEventListener('click', function () {
      document.querySelector('.cover').classList.remove('on')
    })
  })

  const SELECT = document.querySelector('.Episode select');
  const epi_slides = document.querySelectorAll('.Episode .container>div')
  const OPTIONS = SELECT.options
  SELECT.addEventListener('change', function () {
    epi_slides.forEach(el => el.classList.remove('on'))
    epi_slides[OPTIONS.selectedIndex].classList.add('on')
  })
})

