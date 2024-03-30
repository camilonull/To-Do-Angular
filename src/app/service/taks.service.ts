import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  TaskModel  from '../model/TaskModel';
import { formatDate } from '@angular/common';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc,updateDoc,DocumentData } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class TaksService {
  constructor(private firestore: Firestore) {}

  addTask(task: TaskModel){
    const taskRef = collection(this.firestore, 'taks');
    return addDoc(taskRef, task);
  }

  getTask(): Observable<TaskModel[]>{
    const taskRef = collection(this.firestore, 'taks');
    return collectionData(taskRef, {idField: 'id'}) as Observable<TaskModel[]>
  }

  deleteTaks(taks: TaskModel){
    const taskRef = doc(this.firestore, `taks/${taks.id}`);
    return deleteDoc(taskRef);
  }

  updateTask(task: TaskModel): Promise<void> {
    const dataCurrent = new Date();
    const taskRef = doc(this.firestore, `taks/${task.id}`);
    const taskData: DocumentData = {
      title: task.title,
      description: task.description,
      status: task.status,
      dueDate: task.dueDate,
      updateTask: dataCurrent.toISOString(),
      
    };
    return updateDoc(taskRef, taskData);
  }

  
}
