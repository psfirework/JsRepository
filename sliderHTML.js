class Slider {
    constructor(
        {autoplay, autoplayDelay, rootElement, cssClass, imagesContainerElement},
    ) {

        this.SLIDER_WIDTH = 600;
        this.cssClass = cssClass;
        this.rootElement = rootElement;
        this.CONTAINER_WIDTH = 6000;
        this.autoplay = autoplay;
        this.autoplayDelay = autoplayDelay;
        this.imagesContainerElement = imagesContainerElement;
        this.loading = false;
        this.imageArr = null;

        this.leftArrow = document.querySelector('.left');
        this.rightArrow = document.querySelector('.right');
        this.containerSlides = document.querySelector('.container');

        this._offset = 0;

        this._intervalID = undefined;

        this.appendStyles();
        this.serverImage();
        this.appendImagesToDOM(this.imageArr)
    }


    attachEventListener() {
        if (!this.autoplay) {
            this.leftArrow.addEventListener('click', this.decrement);
            this.rightArrow.addEventListener('click', this.increment);
        }
    }


    decrement = () => {

        const newOffset = this._offset - this.SLIDER_WIDTH;
        if (newOffset <= 0) {
            this._offset = 0;
            return
        }


        this._offset -= this.SLIDER_WIDTH;
        this.imagesContainerElement.style.marginLeft = `-${this._offset}px`;
    };

    increment = () => {

        const newOffset = this._offset + this.SLIDER_WIDTH;
        if (newOffset >= this.CONTAINER_WIDTH) {
            this._offset = 0;
            return
        }


        this._offset += this.SLIDER_WIDTH;
        this.imagesContainerElement.style.marginLeft = `-${this._offset}px`;
    };


    serverImage() {
        const imagesURL = [];
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://jsonplaceholder.typicode.com/photos');
        xhr.responseType = 'json';
        xhr.onprogress = (event) => {
            this.loading = true;
        };
        xhr.onload = () => {
            this.loading = false;
            if (xhr.status >= 400) {
                documentFile.innerHTML = `Ошибка: ${xhr.status}`;
            }
            Object.values(xhr.response).forEach(item => {
                imagesURL.push(item['url']);

            });
        };

        xhr.onerror = () => {
            documentFile.innerHTML = 'Ошибка запроса'
        };
        this.imageArr = imagesURL;
        xhr.send();

    }


    appendImagesToDOM(images) {
        images.forEach(imageUrl => {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            this.imagesContainerElement.append(imageElement);
        });

    }

    appendStyles() {
        if (!this.loading) {
            document.body.classList.add('loaded');
        }
        if (!this.cssClass) {
            return;
        }
        this.rootElement.classList.add(this.cssClass);
    }

    start() {
        console.log(this.imageArr);
        if (this.autoplay) {
            this._intervalID = setInterval(this.increment, this.autoplayDelay * 1000);
            return
        }
        this.attachEventListener()
    }

    stop() {
        clearInterval(this._intervalID)
    }

}

const config = {
    autoplay: false,
    autoplayDelay: 1,
    cssClass: null,
    rootElement: document.getElementById('slider-root'),
    imagesContainerElement: document.getElementById('images-container'),
};


const firstSlider = new Slider(config);
firstSlider.start();