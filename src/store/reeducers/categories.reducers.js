import { CATEGORIAS } from "../../data/categories";
import { SELECTED_CATEGORY } from "../action/category.action";

const initialState = {
    vehiculos: CATEGORIAS,
    selected: null
};

const CategoryReducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECTED_CATEGORY:
        const IndexCategory = state.vehiculos.findIndex(
            cat => cat.id === action.categoryId
        )
        return {...state, selected: state.vehiculos[IndexCategory]};
        default:
            return state

    }
};

export default CategoryReducer