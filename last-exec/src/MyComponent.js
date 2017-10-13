import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.images = [
            new ImageHolder({image: 'img/img1.jpg', text: 'img1 alt'}),
            new ImageHolder({image: 'img/img2.jpg', text: 'img2 alt'}),
            new ImageHolder({image: 'img/img3.jpg', text: 'img3 alt'})
        ]
        this.state = {
            currentImage: this.getRandomImage(),
            style: {background:this.getRandomColor()}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // render() {
    //     return (
    //         <div>
    //             {this.images.map(image => (
    //                 <img src={image} />
    //             ))}
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className="MyComponent">
                <img style={this.state.style} src={this.state.currentImage.image} alt={this.state.currentImage.text} onClick={this.handleClick}/>
            </div>
        );
    }

    handleClick(e) {
        this.setState({
            currentImage: this.getRandomImage(),
            style: {background: this.getRandomColor()}
        });
    }

    getRandomImage() {
        let randomIndex = Math.floor(Math.random() * this.images.length);
        return this.images[randomIndex];
    }

    getRandomColor() {
        let color = "";
        const possible = "1234567890ABCDEF";
        for (let i = 0; i < 6; i++)
            color += possible.charAt(Math.floor(Math.random() * possible.length));
        return "#"+color;
    }
}

function ImageHolder(props) {
    this.image = props.image;
    this.text = props.text;
}

export default MyComponent;