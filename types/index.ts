export interface INote {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface IState {
  notes: INote[];
  isEdit: boolean;
}
