class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "blue-boy.png",
                "leaf-boy.png",
                "wheelchair-girl.png",
                "blue-girl.png",
                "yellow-girl.png",
                "twirling-girl.png",
                "blue-sweater-girl.png",
                "stethoscope-girl.png",
                "tablet-girl.png",
                "baby.png",
                "dandelion.png",
            ],
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            Array.from(document.getElementsByClassName("slide")).forEach(
                (element) => {
                    element.classList.add("sliding");
                }
            );
            setTimeout(() => {
                Array.from(document.getElementsByClassName("slide")).forEach(
                    (element) => {
                        element.className = "slide-2";
                    }
                );

                this.slideRight();

                Array.from(document.getElementsByClassName("slide-2")).forEach(
                    (element) => {
                        element.className = "slide";
                    }
                );
            }, 500);
        }, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    renderSlides() {
        const images = this.state.images;
        return (
            <div id="slider-items">
                {images.map((image, index) => {
                    return <Slide image={image} key={index} />;
                })}
            </div>
        );
    }

    slideRight() {
        let first = this.state.images.slice(0, 1);

        let rest = this.state.images.slice(1);

        let images = [...rest, first];
        this.setState({ images: images });
    }

    render() {
        return <div className="slider">{this.renderSlides()}</div>;
    }
}

const Slide = ({ image }) => {
    const size = document.documentElement.clientWidth / 5;
    const imgPath = `assets/img/${image}`;
    return <img className="slide" src={imgPath} />;
};

ReactDOM.render(<Slider />, document.getElementById("slider-container"));