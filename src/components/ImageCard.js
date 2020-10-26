import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(' componentDidMount ');
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/ 20);
        this.setState({spans}); //shorten when they are the same this.setState({spans: spans})
    }

    render() {
        const {description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}
export default ImageCard;