import { Component, OnInit } from '@angular/core';
import { TaksService } from '../../service/taks.service';
import TaskModel from '../../model/TaskModel';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  tasks: TaskModel[] = [];

  title: string = '';
  selectedTask: any;
  showModal: boolean = false;
  dropdownOpen: boolean = false;
  showModalEdit: boolean = false;
  dataLoaded = false;

  updatedTitle: string = '';
  updatedDueDate: string = '';
  updatedStatus: number = 0;
  updatedDescription: string = '';

  usernameF: string = 'Cata 😬';

  constructor(
    private taskService: TaksService,
    private authService: AuthService
  ) {
    this.updateList();
  }

  ngOnInit(): void {
    //this.updateList();
  }

  createTask(): TaskModel {
    const dataCurrent = new Date();
    return {
      title: this.title,
      description: 'Añade texto aquii !!',
      status: 0,
      dueDate: dataCurrent.toISOString(),
      createdAt:  dataCurrent.toISOString(),
    }
  }
  async addTask() {
    if (this.title != '') {
      const newTask: TaskModel = this.createTask();
      console.log(newTask); // Añadido para verificar el nuevo objeto TaskModel
      const response = await this.taskService.addTask(newTask);
      console.log(response);
      this.title = '';
      this.updateList();
    }
  }

  toggleTaskStatus(task: TaskModel) {
    // Cambiar el estado de la tarea (de 0 a 1 o de 1 a 0)
    task.status = task.status === 0 ? 1 : 0;

    // Actualizar la tarea en la base de datos
    this.taskService.updateTask(task)
      .then(() => console.log('Estado de la tarea actualizado con éxito'))
      .catch(error => console.error('Error al actualizar el estado de la tarea:', error));
      this.updateList();
  }

  async updateTask() {
    const updatedTask: TaskModel = {
      id: this.selectedTask.id,
      title: this.updatedTitle,
      description: this.updatedDescription,
      status: this.updatedStatus,
      dueDate: this.updatedDueDate,
    };
  
    try {
      console.log(updatedTask.dueDate)
      await this.taskService.updateTask(updatedTask);
      console.log('Tarea actualizada correctamente');
      this.updateList();
      this.closeModalEdit();
      this.closeModal();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  }


  updateList() {
    this.taskService.getTask().subscribe((resp) => {
      if (resp) {
        console.log(resp);
        this.tasks = resp.sort((a, b) => a.status - b.status);
        this.dataLoaded = true;
      }
    });
  }

  deleteTask(){
    console.log(this.taskService.deleteTaks(this.selectedTask));
    this.updateList();
    this.closeModalDeleteOk();
    this.closeModal();
  }

  setAtri() {
    if (this.selectedTask) {
      this.updatedTitle = this.selectedTask?.title ?? '';
      this.updatedDueDate = this.selectedTask
        ? new Date(this.selectedTask.dueDate).toISOString().slice(0, 10)
        : new Date().toISOString().slice(0, 10);
      this.updatedStatus = this.selectedTask?.status ?? 0;
      this.updatedDescription = this.selectedTask?.description ?? '';
    }
  }

  openModalEdit() {
    this.showModalEdit = true;
  }

  closeModalEdit() {
    this.showModalEdit = false;
  }

  closeSesion() {
    this.authService.closeSesion();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openModal(task: any): void {
    this.selectedTask = task;
    // Lógica para abrir el modal aquí
  }

  openModalDeleteOk() {
    this.showModal = true;
  }

  closeModalDeleteOk() {
    this.showModal = false;
  }

  closeModal(): void {
    this.selectedTask = null;
    // Lógica para cerrar el modal aquí
  }

 
}
