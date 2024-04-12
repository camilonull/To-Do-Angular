import { Component, OnInit } from '@angular/core';
import TaskModel from '../../model/TaskModel';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { TaksService } from '../../service/taks.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit{

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: []
  };

  handleDateClick(arg: { dateStr: string, dayEl: HTMLElement }) {
    alert('date click! ' + arg.dateStr);
  }

  tasks: TaskModel[] = []; // Suponiendo que ya tienes las tareas cargadas en esta propiedad

  constructor( private taskService: TaksService) { }
  isCollapsed: boolean = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks: TaskModel[]) => {
      // Suponiendo que tasks contiene un array de objetos TaskModel con propiedades date y title
      const events = tasks.map(task => ({
        title: task.title,
        date: new Date(task.dueDate).toISOString().split('T')[0] 
      }));
      this.calendarOptions.events = events;
    });
  }
  }



 

