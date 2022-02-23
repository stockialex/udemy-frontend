import PropTypes from 'prop-types';
import './AddCategory.css'

const AddCategory = ({value, handleChange, handleAdd}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form 
            className='add-category__form'
            onSubmit={handleSubmit}
        >
            <input 
                className='add-category__input'
                type='text' 
                onChange={handleChange}
                value={value} 
            />
            <button 
                className='add-category__btn button-50' 
                onClick={handleAdd}
            >
                Agregar
            </button>
        </form>
    );
}
 
AddCategory.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired
} 

export default AddCategory;
