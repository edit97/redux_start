const initialState={
    list:[]
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                list: action.payload
            };
        case 'EDIT':
            let arr = state.list.map((item) => {
                if(item.id === action.payload.id)
                    item.name = action.payload.value;
                return item
            });
            console.log('STATE_2',state);
            return {
                list: arr
            };
        default:
            return state;
    }
}
