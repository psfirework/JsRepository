class Slider {
  constructor(
    { imagesURL, autoplay, autoplayDelay, rootElement, cssClass, imagesContainerElement },
  ) {

    this.SLIDER_WIDTH = 100;
    this.cssClass = cssClass;
    this.rootElement = rootElement;
    this.CONTAINER_WIDTH = 1000;
    this.imagesURL = imagesURL;
    this.autoplay = autoplay;
    this.autoplayDelay = autoplayDelay;
    this.imagesContainerElement = imagesContainerElement;

    this._offset = 0;

    this._intervalID = undefined;

    this.appendImagesToDOM();
    this.appendStyles();
  }

  increment = () => {
    // Arrow function there
    // you are calling this method wia SetInterval function
    // window.setInterval
    // this means that this === Window(global) in this case

    const newOffset = this._offset + this.SLIDER_WIDTH;
    if (newOffset >= this.CONTAINER_WIDTH) {
      this._offset = 0;
      return
    }


    this._offset += this.SLIDER_WIDTH;
    this.imagesContainerElement.style.marginLeft = `-${this._offset}px`;
  };


  start() {
    return this._intervalID = setInterval(this.increment, this.autoplayDelay * 1000)
  }

  stop() {
    clearInterval(this._intervalID)
  }

  appendImagesToDOM() {
    this.imagesURL.forEach(imageUrl => {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;

      this.imagesContainerElement.append(imageElement)
    });

  }

  appendStyles() {
    if (!this.cssClass) {
      return;
    }

    this.rootElement.classList.add(this.cssClass);
  }

}

const config = {
  imagesURL: [
    'http://aniavatars.com/data/avatars/1/299.png',
    'http://aniavatars.com/data/avatars/292/250.gif',
    'http://aniavatars.com/data/avatars/292/241.gif',
    'http://aniavatars.com/data/avatars/283/218.png',
    'http://aniavatars.com/data/avatars/286/570.gif',
    'http://aniavatars.com/data/avatars/277/891.gif',
    'http://aniavatars.com/data/avatars/232/911.gif',
    'http://aniavatars.com/data/avatars/260/207.png',
    'http://aniavatars.com/data/avatars/215/633.gif'
  ],
  autoplay: true,
  autoplayDelay: 1,
  cssClass: null,
  rootElement: document.getElementById('slider-root'),
  imagesContainerElement: document.getElementById('images-container'),
};


const firstSlider = new Slider(config);

firstSlider.start();
