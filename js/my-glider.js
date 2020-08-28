const elem = `<figure>
<img src="" alt="random" />
<figcaption>Random Image</figcaption>
</figure>`;

const numFrames = 10;
const items = Array(numFrames).fill(elem).join('');
document.querySelector('.glider').innerHTML = items;

document.addEventListener('DOMContentLoaded', (e) => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach(
    (img, i) => (img.src = `https://picsum.photos/150/100?random=${i}`)
  );

  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});
