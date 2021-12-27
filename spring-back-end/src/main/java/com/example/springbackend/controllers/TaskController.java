package com.example.springbackend.controllers;

import com.example.springbackend.Services.TaskService;
import com.example.springbackend.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/test")
    public String getTest() {
        return "Default Route up and working";
    }

    @GetMapping
    public List<Task> readAllTasks() {
        return taskService.readAllTasks();
    }

    @GetMapping("/{id}")
    public Optional<Task> readOneTask(@PathVariable int id) {
        return taskService.readOneTask(id);
    }

    @PostMapping
    public void createOneTask(@RequestBody Task task) {
        taskService.createTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteOneTask(@PathVariable int id){
        taskService.deleteOneTask(id);
    }


}
