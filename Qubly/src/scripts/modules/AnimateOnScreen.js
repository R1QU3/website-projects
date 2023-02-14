export default class AnimateItem {
  constructor(dataName, margin = 0.25) {
    this.animateItems = document.querySelectorAll(`[${dataName}]`);
    this.observer = new IntersectionObserver(this.handleIntersection,{ 
      rootMargin: `${margin * -100}% 0%` ,
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animate(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  };

  animate(item) {
    const animationOptions = {
      name: item.dataset.animation|| 'class-default',
      duration: `${item.dataset.animationDuration}s` || '1s',
    };
    item.style.visibility = "visible";
    item.style.animationDuration = animationOptions.duration;
    item.classList.add(animationOptions.name);
  }

  init() {
    this.animateItems.forEach((item) => {
      this.observer.observe(item);
      item.style.visibility = "hidden";
    });
  }
}