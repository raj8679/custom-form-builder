import React, { useContext, useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CategorizeContext } from '../context/CategorizeContext';

const TopDiv = ({ options }) => {
    console.log("topdiv", options)
    return (
        <div className="flex justify-around p-4 bg-gray-100 border border-gray-300 rounded text-black">
            {options.map((option) => (
                <Option key={option.id} option={option} />
            ))}
        </div>
    );
};

const LeftDiv = ({ categories }) => {
    return (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded mr-2 text-black" >
            <h2 className="mb-4 text-xl font-bold">Categories</h2>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
};

const RightDiv = ({ matchedOptions, handleDropOption }) => {
    const [, dropRef] = useDrop({
        accept: 'OPTION',
        drop: (item) => {
            handleDropOption(item.option);
        },
    });

    return (
        <div
            ref={dropRef}
            className="p-4 bg-gray-100 border border-gray-300 rounded ml-2"
        >
            <h2 className="mb-4 text-xl font-bold">Matched Options</h2>
            {matchedOptions.map((option) => (
                <Option key={option.id} option={option} />
            ))}
        </div>
    );
};

const Option = ({ option }) => {
    console.log("option", option)
    const [{ isDragging }, dragRef] = useDrag({
        type: 'OPTION',
        item: { option },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={dragRef}
            className="p-2 bg-white border border-gray-300 rounded mb-2"
            style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
        >
            {option}
        </div>
    );
};

const Category = ({ category }) => {
    const [, dropRef] = useDrop({
        accept: 'OPTION',
        drop: (item) => {
            item.option.matched = true;
        },
    });

    return (
        <div
            ref={dropRef}
            className="p-2 bg-white border border-gray-300 rounded mb-2 text-black"
        >
            {category}
        </div>
    );
};

const CategorizeRender = () => {
    const { data } = useContext(CategorizeContext)
    const [matchedOptions, setMatchedOptions] = useState([]);
    const [options, setOptions] = useState([]);
    const [categories, setCategories] = useState([])
    // const options = [
    //     { id: '1', text: 'Animal' },
    //     { id: '2', text: 'Country' },
    //     { id: '3', text: 'Continent' },
    // ];

    // data.map((el) => {
    //     setOptions((prevOptions) => [...prevOptions, el.category]);
    //     setCategories((prevCategories) => [...prevCategories, el.correctMatch]);
    // })

    useEffect(() => {
        // Update options and categories arrays once when the component mounts
        const newOptions = data.map((el) => el.category);
        const newCategories = data.map((el) => el.correctMatch);

        setOptions(newOptions);
        setCategories(newCategories);
    }, [data]); // This dependency array ensures the effect runs only when data changes

    console.log(options, categories)

    // const categories = [
    //     { id: '1', text: 'Cat' },
    //     { id: '2', text: 'India' },
    //     { id: '3', text: 'Asia' },
    // ];

    const handleDropOption = (option) => {
        setMatchedOptions((prevOptions) => [...prevOptions, option]);
    };

    const handleSubmit = () => {

    }

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="container mx-auto mt-10">
                    <TopDiv options={categories} />
                    <div className="flex mt-4">
                        <LeftDiv categories={options} />
                        <RightDiv matchedOptions={matchedOptions} handleDropOption={handleDropOption} />
                    </div>
                </div>
            </DndProvider>
            <button className='w-fit p-2 m-auto rounded-md text-white bg-slate-700' onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default CategorizeRender;



