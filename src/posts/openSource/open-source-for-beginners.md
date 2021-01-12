---
title: "Open Source Contribution for beginners "
description: "Open-source software is a software that contains source code (code in general like HTML,CSS, js, python, etc) which is publicly available or accessible for people to read, change, improve/enhance and share."
---

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
