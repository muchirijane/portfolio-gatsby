---
title: "React questions to help you learn"
description: "Useful React questions to ask yourself as you learn. Get to know the basic questions used in interviews to help you land that job."
---

<!-- ![React image](./react-resources.png) -->

Learning React can be challenging in the first few weeks. Getting to know how to use props when to use class or functional components. I am still on this journey of learning React and I found it helpful to use some basic beginner questions that I can be asking myself every week. This is a good way to help me understand the fundamentals plus repetition will make recall easier. I used some of my favourite resources I came across this week. I will post the question and answers plus the source link that I got them from. I will not be diving into redux or hooks, just basic common React questions for now. As I advance, I will definitely write a part two with more complex questions.
If you are learning React too, you can use these questions to ask yourself every Friday and with time it will be easier to recall the answers. Don't wait to rush through them when you are getting ready for the interview.

![learning gif](https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif)

### React Questions

#### 1) What is React

- Front end Javascript library
- Developed by Facebook in 2011
- Follows component-based approach
- It allows you to create reusable UI components
- Used to develop complex, interactive web as well as mobile UI
- Open-Sourced in 2015 and has a strong foundation and large community.

✨ [Source link](https://www.edureka.co/blog/what-is-react/)

#### 2) Feature of React

- Uses Virtual Dom
- Does Server-side rendering
- Follow Unidirectional data flow ie one-way data binding. React’s data flow between components is uni-directional (from parent to child only).
- Uses reusable/composable UI components to develop the view.

✨ [Source link - Edureka](https://www.edureka.co/blog/what-is-react/)

#### 3) Advantages and disadvantages of React

Advantages

- Easy to know how a component is rendered, you just look at the render function.
- JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined with each other.
- You can render React on the server-side.
- It is easy to test, and you can also integrate some tools like jest.
- It ensures readability and makes maintainability easier.
- You can use React with any framework (Backbone.js, Angular.js) as it is only a view layer.

Disadvantages

- It is only a view layer, you have still to plug your code for Ajax requests, events, etc.
- The library itself is pretty large.
- The learning curve can be steep.

✨ [Source link - Stackoverflow](https://stackoverflow.com/questions/28442239/advantages-and-disadvantages-of-using-reactjs)

#### 4) What is JSX

- JSX stands for Javascript XML- eXtensible Markup Language.
- Utilizes the expressiveness of Javascript with an HTML - like templates syntax.
- Makes HTML easy to understand.
- It is Robust
- Boosts up the JS performance.
- JSX expression must have only the outermost element.

✨ [Source link - Edureka](https://www.edureka.co/blog/what-is-react/)

#### 5) What is the Virtual DOM

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

✨ [Source - React Docs](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)

#### 6) How does virtual Dom work?

- Whenever any underlying data changes, the entire UI is re-rendered in Virtual Dom representation.
- Then the difference between the previous DOM representation and the new one is calculated.
- Once the calculation is done, the real DOM will be updated with only the things that have actually changed.

✨ [Source link - Edureka](https://www.edureka.co/blog/what-is-react/)

#### 7) Difference between the Virtual DOM and the Real DOM

| Virtual DOM                    |                                   Real DOM |
| :----------------------------- | -----------------------------------------: |
| Updates faster                 |                             Updates slower |
| Can't directly update HTML     |                   Can directly update HTML |
| Updates if JSX element renders | If elements updates it creates a new a DOM |
| No DOM manipulation expense    |         DOM manipulation is very expensive |
| No memory wastage              |                 Too much of memory wastage |

✨ [Source link - Edureka](https://www.edureka.co/blog/what-is-react/)

#### 8) Why can't the browser not read JSX

- JSX is not a regular Javascript
- Browsers can read Javascript objects only.
- JSX file is converted to JS object by JSX Transformer link Babel that converts it before reaching the browser.

✨ [Source link - Edureka](https://www.edureka.co/blog/what-is-react/)

#### 9) How React is different from Angular?

| Topic           |         React          |               Angular |
| :-------------- | :--------------------: | --------------------: |
| 1) Architecture |     Only view MVC      |          Complete MVC |
| 2) Rendering    | Server-side rendering  | Client-side rendering |
| 3) DOM          |    Uses virtual DOM    |         Uses real DOM |
| 4) Data Binding |  One-way data binding  |  Two-way data binding |
| 5) Debbuging    | Compile time debugging |    Run time debugging |
| 6) Author       |        Facebook        |                Google |

✨ [Source link - Edureka](https://www.edureka.co/)

#### 10) 'In React everything is a component', Explain?

- First, components are the building blocks of React User Interface.
- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

✨ [Source - React Docs](https://reactjs.org/docs/components-and-props.html)

#### 11) Explain the purpose of render function

- The render function is used to update the user interface
- It returns a single React element which is the representation of the native DOM component.
- To render a React element into a root DOM node, pass both to ReactDOM.render()

```js
const title = <h1>Hello, world</h1>
ReactDOM.render(title, document.getElementById("root"))
```

✨ [Source link - React Docs](https://reactjs.org/docs/rendering-elements.html)

##### 12) What are props in React

- Props stand for properties of a component.
- Are pure ie immutable.
- Always passed down from parent to child component.
- Used to render dynamic data

✨ [Source link - Edureka](https://www.edureka.co/)

#### 13) What is state in React

- State is an in-built object in React that helps the components to create and manage their data.
- Determines components rendering and behavior.
- Creates dynamic and interactive components
- It is accessed via this.state()
- Can update the state using this.setState()

✨ [Source link - Edureka](https://www.edureka.co/)

#### 14) What is an event in React

- An event is a result of a triggered reaction from specific action like a mouse click, mouse hover, keypress, etc.
- Events in React are similar to vanilla Javascript events.

#### 15) Modularize code in React

- This simply means putting your code in independent modules or files.
- You can use the import and export method and use components from different components.

#### 16) Difference between controlled and uncontrolled components

| Controlled Components                                                    |       Uncontrolled Components |
| :----------------------------------------------------------------------- | ----------------------------: |
| Do not maintain their own state                                          |     Maintain their own state. |
| {Data is controlled by the parent component                              | Data is controlled by the DOM |
| Takes in current values through props and notifies changes via callbacks | Refs get their current value. |

✨ [Source link - Edureka](https://www.edureka.co/)

#### 17) What are the higher-order components?

- Custom components that wrap other components.
- They accept dynamically provided child components.
- Are pure functions.

✨ [Source link - Edureka](https://www.edureka.co/)

#### 18) What is the significance of keys in React?

- Used to identify unique virtual DOM Elements with their corresponding data driving the UI.
- Helps React to optimize rendering by recycling existing DOM elements.
- Keys must be a unique number or string.
- Application's performance increases.

✨ [Source link - Edureka](https://www.edureka.co/)

#### 19) How to use React label element

Instead of using `for=""` like in HTML, you use `htmlFor=""` attribute.

```js
<label htmlFor = {'name'}> </label>
<input type={'text} id={'name'}/>
```

#### 20) Why are arrow function used in React

- Arrow functions are useful when you want this to refer to the parent component.
- Arrow function don't it's own `this`.
- `this` will be inherited from its enclosing scope.

### In conclusion

I have linked the resources where I got the questions and answers. You can use them to go them deeper into the question you didn't understand or couldn't answer on the first go. Keep asking yourself 3 questions a day and see how you are progressing in your journey. The more you can explain them in detail without googling the more you are getting better at it.

![relaxing girl gif](https://media.giphy.com/media/XDvUfcks9P0obZbXoK/giphy.gif)

If you find this post useful share it with your peers or beginners who learning React JS and might find these questions useful to their journey. You can also buy me coffee. 🙂

<a href="https://www.buymeacoffee.com/janetracy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" height="41" width="174" loading="lazy"></a>
