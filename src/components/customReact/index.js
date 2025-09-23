function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
   
    // Set attributes for the anchor element
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target);
    
    // better way to set attributes
    for ( const key in reactElement.props){
        if (key === "children") continue; // skip children as it is already set as innerHTML
        domElement.setAttribute(key, reactElement.props[key])
    }
    container.appendChild(domElement);
}


// anchor element
// <a href="https://google.com" target="_blank">Click me to visit Google</a>
// customRender function takes a reactElement and a container to render the element into the DOM

// React bundler converts JSX to a JavaScript object or DOM tree structure
const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
        
    },
    children: 'Click me to visit Google'
}  

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer); // injecting the reactElement into the mainContainer 