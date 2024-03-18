import { Client } from 'appwrite';
import { create } from 'zustand'
import { getAfazerGroupedbyColumns } from '../lib/getAfazerGroupedbyColumns';

interface BoardState {
    board: Board;
    getBoard: ()=> void
  }

export const useBoardStore = create<BoardState>((set) => ({
  board:{
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async() =>{
         const board = await getAfazerGroupedbyColumns();
         set ({board});
  }
}))