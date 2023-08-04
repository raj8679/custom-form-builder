import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategorizeContext } from '../context/CategorizeContext';

const CategorizeBuilder = () => {
    const navigate = useNavigate();
    const { setData } = useContext(CategorizeContext)
    const [categories, setCategories] = useState([{ category: '', correctMatch: '' }]);

    const handleAddField = () => {
        setCategories([...categories, { category: '', correctMatch: '' }]);
    };

    const handleDeleteField = (index) => {
        const updatedCategories = categories.filter((_, i) => i !== index);
        setCategories(updatedCategories);
    };

    const handleChange = (index, field, value) => {
        const updatedCategories = [...categories];
        updatedCategories[index][field] = value;
        setCategories(updatedCategories);
    };

    const handlePreview = () => {
        setData(categories)
        navigate("/categorizebuilder")
    }
    return (
        <>
            <div className=' w-fit p-20 bg-slate-400 text-black rounded-md m-auto mt-5'>
                <h2 className='text-lg'>CATEGORIZE</h2>
                {categories.map((item, index) => (
                    <div key={index} className="flex gap-4 mt-3">
                        <input
                            className='mt-1 rounded-md'
                            type="text"
                            placeholder="Category"
                            value={item.category}
                            onChange={(e) => handleChange(index, 'category', e.target.value)}
                        />
                        <input
                            className='mt-1 rounded-md'
                            type="text"
                            placeholder="Correct Match"
                            value={item.correctMatch}
                            onChange={(e) => handleChange(index, 'correctMatch', e.target.value)}
                        />
                        <button onClick={() => handleDeleteField(index)} className='border-2 border-white rounded-md mt-1'>Delete</button>
                    </div>
                ))}
                <button onClick={handleAddField} className='border-2 border-white rounded-md mt-5'>Add</button>
            </div>
            <button className='w-fit p-2 m-auto rounded-md text-white bg-slate-700' onClick={handlePreview}>PREVIEW</button>
        </>
    );
};

export default CategorizeBuilder;
