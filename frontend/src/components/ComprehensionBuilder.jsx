import React, { useState } from 'react';

const ComprehensionBuilder = () => {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [questions, setQuestions] = useState([{ question: '', checkboxes: [] }]);

    const handleTextAreaChange = (e) => {
        setTextAreaValue(e.target.value);
    };

    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = value;
        setQuestions(updatedQuestions);
    };

    const handleCheckboxChange = (questionIndex, checkboxIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].checkboxes[checkboxIndex] = value;
        setQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', checkboxes: [] }]);
    };

    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="p-4 border border-gray-300 rounded mb-4">
                    <h2 className="text-xl font-bold mb-2">Paragraph</h2>
                    <textarea
                        className="border border-gray-300 rounded w-4/5 p-2 mb-2"
                        value={textAreaValue}
                        onChange={handleTextAreaChange}
                    ></textarea>
                </div>
                <div className="p-4 border border-gray-300 rounded">
                    <h2 className="text-xl font-bold mb-2">Questions</h2>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="mb-4">
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 mr-2 mb-2"
                                placeholder="Question"
                                value={question.question}
                                onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
                            />
                            {question.checkboxes.map((checkbox, checkboxIndex) => (
                                <div key={checkboxIndex} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 mr-2"
                                        checked={checkbox}
                                        onChange={(e) => handleCheckboxChange(questionIndex, checkboxIndex, e.target.checked)}
                                    />
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded p-2 mr-2"
                                        placeholder="Option"
                                        value={checkbox}
                                        onChange={(e) => handleCheckboxChange(questionIndex, checkboxIndex, e.target.value)}
                                    />
                                </div>
                            ))}
                            <button
                                onClick={() => {
                                    const updatedQuestions = [...questions];
                                    updatedQuestions[questionIndex].checkboxes.push('');
                                    setQuestions(updatedQuestions);
                                }}
                                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                            >
                                Add Checkbox
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleAddQuestion}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add Question
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5" >
                    PREVIEW
                </button>
            </div>
        </>
    );
};

export default ComprehensionBuilder;
