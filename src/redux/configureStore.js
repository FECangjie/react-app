import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

// 模块引入
import toDoApp from './modules/toDoApp';

// actions日志
const loggerMiddleware = createLogger();
// 创建中间件
const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);
// 组合模块
const reducer = combineReducers({
  toDoApp
});
