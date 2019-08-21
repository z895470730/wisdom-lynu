import {login,getJobCategory,getCallRecords,getWorkTasks,getWorkRecord,getEvaluation,logOut} from '../services/example'
export default {

  namespace: 'example',
  state: {
    jobCategory:[],
    callRecords:[],
    workTasks:[],
    workRecord:[],
    evaluation:[],
    flag:1,
    token:null,
    userState:false,
    user:{}
  },

  effects: {
    *login({payload}, {call, put}){
      const text = yield call(login,payload);
      yield put({type: 'changeLoginState', payload: text.list[0]});
      yield put({type: 'saveUser', payload: text.list[0]});
    },
    *logout(action,{call,put}){
      try {
        yield call(logOut);
        yield put({type: 'outUser'})
      } catch(e) {
        console.log(e.message);
      }
    },
    *getJobCategoryData({payload}, {call, put}){
      const JobCategory=yield call(getJobCategory);
      yield put({type: 'saveJobCategory', payload: JobCategory});
    },
    *getCallRecordsData({payload}, {call, put}){
      const CallRecords=yield call(getCallRecords);
      yield put({type: 'saveCallRecords', payload: CallRecords});
    },
    *getWorkTasksData({payload}, {call, put}){
      const WorkTasks=yield call(getWorkTasks);
      yield put({type: 'saveWorkTasks', payload: WorkTasks});
    },
    *getWorkRecordData({payload}, {call, put}){
      const WorkRecord=yield call(getWorkRecord);
      yield put({type: 'saveWorkRecord', payload: WorkRecord});
    },
    *getEvaluationData({payload}, {call, put}){
      const Evaluation=yield call(getEvaluation);
      yield put({type: 'saveEvaluation', payload: Evaluation});
    },
  },

  reducers: {
    saveFlag(state, action) {
      return { ...state, flag: action.payload};
    },
    changeLoginState(state,action){
      return { ...state,userState: true}
    },
    saveUser(state,action){
      return {...state,user:action.payload}
    },
    outUser(state){
      console.log('3');
      return {state:{jobCategory:[],
          callRecords:[],
          workTasks:[],
          workRecord:[],
          evaluation:[],
          flag:1,
          token:null,
          userState:false,
          user:{}}}
    },
    writeToken(state, action){
      return {...state, token: action.payload}
    },
    saveJobCategory(state, action){
      return { ...state, jobCategory:action.payload.list};
    },
    saveCallRecords(state, action){
      return { ...state, callRecords:action.payload.list};
    },
    saveWorkTasks(state, action){
      return { ...state, workTasks:action.payload.list};
    },
    saveWorkRecord(state, action){
      return { ...state, workRecord:action.payload.list};
    },
    saveEvaluation(state,action){
      return {...state, evaluation:action.payload.list}
    }
  }
};
