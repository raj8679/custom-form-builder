import React, { useState } from 'react';

const ClozeBuilder = () => {
    const [sentence, setSentence] = useState('');
    const [selectedWords, setSelectedWords] = useState([]);
    // const [transferSentence, setTransferSentence] = useState([])

    const handleSentenceChange = (event) => {
        setSentence(event.target.value);
    };

    const handleWordClick = (word, index) => () => {
        setSelectedWords((prevWords) => [...prevWords, { word, index }]);
        setSentence((prevSentence) => prevSentence.replace(word, '__'));
    };

    const handleCrossClick = (word, index) => () => {
        setSelectedWords((prevWords) =>
            prevWords.filter((w) => !(w.word === word && w.index === index))
        );
        const updatedSentence = sentence.split(' ');
        updatedSentence.splice(index, 0, word);
        setSentence(updatedSentence.join(' '));
    };

    const handlePreview = () => {
        // setTransferSentence(sentence.split(" ").join(","))
        console.log(sentence.split(" ").join(','))
        console.log(selectedWords)
    }

    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex mb-4">
                    <textarea
                        className="flex-1 p-2 mr-4 bg-gray-100 border border-gray-300 rounded"
                        rows="4"
                        value={sentence}
                        onChange={handleSentenceChange}
                    />
                </div>
                <div className="border border-gray-300 rounded p-4">
                    {sentence.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className="p-2 bg-white border border-gray-300 rounded m-1 cursor-pointer"
                            onClick={handleWordClick(word, index)}
                        >
                            {word}
                        </span>
                    ))}
                </div>
                <div className="mt-4">
                    {selectedWords.map((wordObj, index) => (
                        <span
                            key={index}
                            className="p-2 bg-green-200 border border-gray-300 rounded m-1 cursor-pointer"
                        >
                            {wordObj.word}
                            <span
                                className="ml-2 cursor-pointer"
                                onClick={handleCrossClick(wordObj.word, wordObj.index)}
                            >
                                &#10006;
                            </span>
                        </span>
                    ))}
                </div>
            </div>
            <button className='bg-green-300 text-red-600' onClick={handlePreview}>PREVIEW</button>
            <div className='border-2 border-cyan-900 '>
                <div className='w-50 border-black'>
                    {sentence.split(" ").map((el, i) => {
                        if (el == '__') {
                            return <button
                                className='bg-slate-500 w-20 h-0.5'></button>
                        } else {
                            return <button className='ml-2'>{el}</button>

                        }
                    })}
                </div>
                <div className='w-0.5 h-0.5 border-red-600'>
                    {selectedWords.map((el) => (
                        <button
                            className='border border-slate-950'>{el.word}</button>
                    ))}
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

export default ClozeBuilder;




