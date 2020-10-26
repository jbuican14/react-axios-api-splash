

https://stephengrider.github.io/playgrounds/ 
unsplash.com/developer and create an account
https://unsplash.com/documentation#search-photos


use js to to make the grid-row-end for each image using 
this.imageRef = React.createRef();
then call load in componentDidMount
this.imageRef.current.addEventListener('load', this.setSpan)  
    ==> this.imageRef.current.clientHeight