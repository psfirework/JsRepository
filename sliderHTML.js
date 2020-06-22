class Slider {
    constructor(
                    imagesURL,
                    autoplay,
                    autoplayDelay,
                    root,
                ) {
        // this.cssClass = cssClass;
        this.imagesURL = imagesURL;
        this.autoplay = autoplay;
        this.autoplayDelay = autoplayDelay;
        this.root = root;

        this._offset = 0;
        this.SLIDER_WIDTH = 100;
        this._intervalID = undefined;
    }

    increment() {
        const newOffset = this._offset + this.SLIDER_WIDTH;
        if (newOffset >= 1000) {
            this._offset = 0;
            return
        }
        this._offset += this.SLIDER_WIDTH

    }


    start() {
     return this._intervalID = setInterval(this.increment, this.autoplayDelay)
    }

    stop() {
        clearInterval(this._intervalID)
    }

}

const htmlElement = document.querySelector('.slider');

const imageURL = ['http://aniavatars.com/data/avatars/1/299.png', 'http://aniavatars.com/data/avatars/292/250.gif', 'http://aniavatars.com/data/avatars/292/241.gif', 'http://aniavatars.com/data/avatars/283/218.png', 'http://aniavatars.com/data/avatars/286/570.gif', 'http://aniavatars.com/data/avatars/277/891.gif', 'http://aniavatars.com/data/avatars/232/911.gif', 'http://aniavatars.com/data/avatars/260/207.png', 'http://aniavatars.com/data/avatars/215/633.gif'];

imageURL.forEach(item => {
    let image = document.createElement('img');
    image.src = item;
    htmlElement.append(image)
});

const firstSlider = new Slider(
    imageURL,
    true,
    1000,
    htmlElement,
);
htmlElement.append(firstSlider.start())
console.log(firstSlider.start())
console.log(firstSlider.start())
console.log(firstSlider.start())

