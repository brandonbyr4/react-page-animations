# react-page-animations

React-page-animations is a lightweight, elegant way to add page transitions to your create-react-app, built on Framer motion.  react-page-animations comes with customizable props that you can use to alter the transition animation styles, and works with any react app using react-router, or react-router-dom.  Get started with the installation and quickstart guide below.

## Installing

```shell
npm install react-page-animations
```

## Quickstart

```shell
import { Link } from 'react-router-dom';
import { AnimatedPage } from 'react-page-animations';

export default function HomePage () {
    return <AnimatedPage initialOpacity="0" finalOpacity="1">
        <h1>home page</h1>
        <Link to="/page1">Page 1</Link>
        <Link to="/page1">Page 2</Link>
    </AnimatedPage>
}
```

Here, we are wrapping our home page which the AnimatedPage component, which provides page transition animations.  Then, we are adding the props initialOpacity="0", and finalOpacity="1", which is the simplest way to add a fade transition.

## Customization

| Prop           | Description                          |
| -------------- | ------------------------------------ |
| initialOpacity | opacity on first page load           |
| finalOpacity   | opacity once page is done loading    |
| exitOpacity    | opacity as you click off page        |
| initialX       | X movement on first page load        |
| finalX         | X movement once page is done loading |
| exitX          | X movement as you click off page     |


To customize the transition animation style, pass props to the AnimatedPage component wrapping your page.  "Inital" refers the state of the page when you first load to it, "final" refers to the state once the page has been loaded, and "exit" means the state as you click off of a page.
- Tip: to create the smoothest fade transition, add initialOpacity="0", finalOpacity="100", and exitOpacity="0" to all your AnimatedPages.
- Tip: to create a horizontal jiggle transition, add initialX="100", finalX="0", and exitX="-100" to all your AnimatedPages.

## Contributing

Everyone is welcome to make a contribution to react-page-animations. If you are interested in contributing to this project, start with the [Contributing Guide](https://github.com/ThePlugJumbo/react-page-animations/blob/main/CONTRIBUTING.md).

## License

ISC - [License](https://github.com/ThePlugJumbo/react-page-animations/blob/main/LICENSE)
