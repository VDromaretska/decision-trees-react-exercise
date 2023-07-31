import "./App.css";
import createTree from "../exampleTrees/animalsQuizTree";
import { QuestionNode } from "../tree";
import { useState, useEffect } from "react";

export default function App() {
    const [currentTree, setCurrentTree] = useState(createTree());
    const [currentQuestion, setCurrentQuestion] = useState<string>("question");

    useEffect(() => {
        if (currentTree.kind === "question") {
            setCurrentQuestion(currentTree.question);
        }
    }, [currentTree]);

    const handleClickYes = (currentTree: QuestionNode) => {
        setCurrentTree(currentTree.yesSubtree);
    };
    const handleClickNo = (currentTree: QuestionNode) => {
        setCurrentTree(currentTree.noSubtree);
    };

    return (
        <main className="App">
            Think of an animal from this list and I will try to guess it!
            <p>sea otter, grizzly bear, bald eagle, penguin, snake</p>
            {currentTree.kind === "question" && (
                <div>
                    <p>{currentQuestion}</p>
                    <button onClick={() => handleClickYes(currentTree)}>
                        Yes
                    </button>
                    <button onClick={() => handleClickNo(currentTree)}>
                        No
                    </button>
                </div>
            )}
            {currentTree.kind === "leaf" && <p>{currentTree.result}</p>}
            <button onClick={() => setCurrentTree(createTree())}>
                Restart
            </button>
        </main>
    );
}
