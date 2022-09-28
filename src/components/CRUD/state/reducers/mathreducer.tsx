import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EngService from '../../services/servicesenglish';
import { IQues } from '../../../../interface';


interface retrieveQuestions{
    type:string
    payload:any

}

interface retrieveQuestion{
    type:string,
    payload:any

}

interface updateQuestion{
    type:string,
    payload:any

}

type Action = retrieveQuestions | retrieveQuestion | updateQuestion

const initialState:IQues[]= [];

export const retrieveQuestions = createAsyncThunk('cust/retrieve', async () => {
  const res = await EngService.EnggetAll();
  console.log('resp', res.data);
  return res.data;
});

export const retrieveQuestion = createAsyncThunk('cust/retrieve', async (id) => {
  const res = await EngService.Engget(id);
  console.log('resp', res.data);
  return res.data;
});

export const updateQuestion = createAsyncThunk('cust/update', async ({ id, data }) => {
  const res = await EngService.Engupdate(id, data);
  return res.data;
});


const Mathslice = createSlice({
name:"mathsquiz"
initialState,
extraReducers:{
    [retrieveQuestions.fulfilled]:(state:IQues,action:Action) =>{

        return [...action.payload];
    }


}


})