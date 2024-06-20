// const heading = React.createElement('h1', { id: 'heading', weight: '23kgs' }, 'Hello World');



const heading = React.createElement('div', { id: 'heading' },
    React.createElement("div", { id: "child" }, [
        React.createElement('h1', {}, 'I am an h1 tag'),
        React.createElement('h2', {}, 'I am an h2 tag'),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag and I exist in the second para"),
        React.createElement("h2", {}, "I am an h2 tag and I exist in the second para too"),
    ]),

);

// console.log();

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading2);

root.render(heading);
