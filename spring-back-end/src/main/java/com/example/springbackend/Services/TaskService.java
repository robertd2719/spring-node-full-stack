package com.example.springbackend.Services;

import com.example.springbackend.entities.Task;
import com.example.springbackend.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Read all tasks
    public List<Task> readAllTasks(){
        return taskRepository.findAll();
    }

    // Add exactly one task
    public void createTask(Task task){
        taskRepository.save(task);
    }

    // Read exactly one task
    public Optional<Task> readOneTask(int id){
        return taskRepository.findById(id);
    }

    // Delete exactly one task
    public void deleteOneTask(int id){
        taskRepository.deleteById(id);
    }
}
