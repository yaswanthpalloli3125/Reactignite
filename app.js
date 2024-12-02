const parent = React.createElement("div", { id: 'parent' }, [React.createElement("h1", { id: '' }, 'iam h1'),React.createElement("h2", { id: '' }, 'iam h2')]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);