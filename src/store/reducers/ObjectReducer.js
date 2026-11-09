const initialState = {
    objectList: [],
};

function ObjectReducer(state = initialState, action) {
    switch (action.type) {
        case "OBJECT_FETCH":
            return { ...state, objectList: action.payload };
        case "OBJECT_ADD":
            return { ...state, objectList: [...state.objectList, action.payload] };
        case "OBJECT_DELETE":
            return { ...state, objectList: state.objectList.filter((o) => o.id !== action.payload) };
        default:
            return state;
    }
}

export default ObjectReducer;