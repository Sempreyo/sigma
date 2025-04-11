document.addEventListener("DOMContentLoaded", () => {
	const slideshowCarousel = document.querySelectorAll(".carousel__slider");

	if (slideshowCarousel.length > 0) {
		slideshowCarousel.forEach(el => {
			const slideshowCarouselNext = el.nextElementSibling.querySelector(".swiper-btn-next");
			const slideshowCarouselPrev = el.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(el, {
				slidesPerView: 1,
				spaceBetween: 10,
				navigation: {
					nextEl: slideshowCarouselNext,
					prevEl: slideshowCarouselPrev,
				}
			});
		});
	}
});
