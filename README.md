# React Lifecycle Methods

![React Life Cycle Methods](/ReactLifecycleMethods.png?raw=true "React Life Cycle Methods")

---
1. __Exercise FilmsList Component__ 

    Create a new class component.
    1. Create a new file called filmsList.jsx in your components/ folder
    1. Import and destructure the Component from the react package
    1. Add a class called `FilmsList` that renders an empty unordered list.
    4. You should have:
```
        class FilmsList {
            render() {
            return <ul></ul>;
            }
        }
```
---
2. Exercise 2: Films State
    
    Create state to manage the list of Studio Ghibli films.
    1. Create a constructor for the `FilmsList` class
    1. Define a `list` property on `this.state` that is assigned an empty array.
---
3. Exercise 3: Method to Get Films

    Create a method to retrieve the list of films.
    1. Create a method called `getFilms` on the `FilmsList` class
    1. The method should call the fetch function with the following url parameter: https://ghibliapi.herokuapp.com/films
    1. Call the `then` method on the returned promise
        *   The first then call should receive a callback function that returns the result parsed to json
    1. Make another then call on the returned promise
        * The second then call should receive a callback function that uses `this.setState()` to set `this.state.list` equal to the result.
    1. Lastly add a catch method call that should receive a callback function that will handle an error if one occurs
---
4. Exercise 4: Fetch Films
    
    Call getFilms() once the component mounts.
    1. Create a `componentDidMount` method on the `FilmsList` class.
    1. Call `getFilms` within the method body.
---
4.  Exercise 4: Render the Films List

    Render the list to the DOM.
    1. In the render method, update the content of the `ul` element to be a JSX expression that calls the map method on `this.state.list`.
    1. Pass a callback function to the map method that returns a `li` element for each film in `this.state.list`.
    1. Add the film's title as the text content of the `li`
    1. Add a key prop to the `li` that is set to the film's id

    
    Feel free to add more content from each film to the list item's inner html.
---
5. Exercise 5: Render FilmsList Component

    Render the `FilmsList` component in App.
    1. Import the `FilmsList` component from `./components/FilmsList`
    1. In the `render` method of the `App` class, render the `FilmsList` component below the `ul` from the previous lesson.

