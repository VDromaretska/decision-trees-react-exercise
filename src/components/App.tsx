import "./App.css";
import createTree from "../exampleTrees/animalsQuizTree";

export default function App() {
    const tree = createTree();
    return (
        <main className="App">
            Think of an animal from this list and I will try to guess it!
            <div>{tree.kind}</div>
            <button>Restart</button>
        </main>
    );
}
