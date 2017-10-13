# exec1 questions

* What is a functional component?
    * Component declared as a plain javascript function that accept props as argument and returns JSX.
* What is a Class Component 
    * ES6 class that extends React.Component and implements render() method that returns JSX.
    * It get's the props argument in it's constructor.
* What is the idea with props
    * Props is an object of values that can be passed to a component.
* Provide a simple example in how you write a Component that accepts props
    
    
    function MyComponent(props) {
        return <div>{props.text}</div>
    }
* Provide a simple example (could be a line from the exercise above) that demonstrates how you pass props into a Component


    ReactDOM.render(<MyComponent text="some text"/>,document.getElementById('root');


# exec 2 questions
* Would it be possible to rewrite the Clock component into a functional component (provide arguments for your answer)?
    * No, because functional components can't have state, which is used for the time.
* How do you set new values for state: In the constructor, and all other places?
    * In the constructor we pass plain Javascript object to a state.
    * Everywhere else we need to use the setState method.
* How is it possible to "tell" React that you want the UI to be updated (re-rendered)?
    * When the state is changed is using setState method,
* What is the difference(s) between state and props
    * Props are simple values passed from outside of the component.
    * State holds the state sensitive values and when those are changed react re-renders the component,
* How do you pass in prop values to a Component
    
    
    <Clock label="Not hello world" sleepTime="1000" />
* What is the purpose of React Components Life Cycle Methods?
    * So we can execute code when some specific events are about to happen or just happened, like componentWillMount() and componentDidMount()
    
# exec 3 output explanations

* ComponentDidMount - prints immediately after render
* ComponentWIllUnmount - never prints, the method is called on reload of the page, but the reload it self happens too fast

# exec 4 questions

* What is the purpose of this line in the constructor: this.handleClick = this.handleClick.bind(this);
    * enabled the handleClick method use 'this' for example for setting a state
* How can we disable the default behavior of an event handler (for example prevent a submit handler to submit?)
    * by explicitly calling e.preventDefault();
* What is the benefit(s) you get from using arrow-functions in a ES6 class?
    * That we don't have to bind this
