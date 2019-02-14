//纯函数： 不改输入，输出可控，必输出
//reducer : 业务逻辑，拷贝并更新后的state+返回，负责获取state

const reducer = (state,action) => {

  console.log('reducer',state,action);

  let {type,payload}=action;

  switch (type) {
    case 'ADD_ITEM':
      //业务逻辑
      // return 拷贝 并 更新后的state
      /*return Object.assign({},state,{
        list:state.list.concat(payload)
      });*/

      return {
        ...state,
        list:state.list.concat(payload),
      };
    default:
      return state
  }
};

export default  reducer;