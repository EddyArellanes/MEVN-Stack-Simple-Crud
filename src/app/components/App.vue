<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">MEVN Stack</a>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="sendTask">
                                <div class="form-group">
                                    <input type="text" v-model="task.title" placeholder="Insert a Task" class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea v-model="task.description" cols="30" rows="10" class="form-control" placeholder="Insert a Description"></textarea>
                                </div>
                                <template v-if="edit === false">
                                    <button class="btn btn-primary btn-block">Send</button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-primary btn-block">Update</button>
                                </template>
                            </form>
                        </div>
                    </div>
                </div>                
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(index, task) of tasks" v-bind:key="index">
                                <td>{{task.title}}</td>
                                <td>{{task.description}}</td>
                                <td>
                                    <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                                    <button @click="editTask(task._id)" class="btn btn-secondary">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
class Task{
    constructor(title, description){
        this.title = title
        this.description = description
    }
    
}
export default {    
    data(){
        return {
            task: new Task(),
            tasks: [],
            taskToEdit: '',
            edit: false
        }
    },
    created(){
        this.getTasks()
    },
    methods: {
        getTasks(){
            fetch('api/tasks')
                .then(res => res.json()) 
                .then(data => {
                    this.tasks = data
                })
        },
        sendTask(){
            if(this.edit === false){
                fetch('api/tasks', {
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                //Convert Promise format to Json
                .then(res => res.json())
                //Get data from json
                .then(data => {
                this.task = new Task()
                this.getTasks()
                })

            
            }else{
                fetch('api/tasks/' + this.taskToEdit, {
                    method: 'PUT',
                    body: JSON.stringify(this.task),
                    headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.task = new Task()
                    this.getTasks()
                    this.edit = false
                })
            }
            
           
        },
        deleteTask(id){
            fetch('/api/tasks/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.getTasks()
            })
        },
        editTask(id){
            fetch('/api/tasks/' + id)
                .then(res => res.json())
                .then(data => {
                    this.task = new Task(data.title, data.description)
                    this.taskToEdit = data._id
                    this.edit = true
                })
        }
    }
}
</script>
