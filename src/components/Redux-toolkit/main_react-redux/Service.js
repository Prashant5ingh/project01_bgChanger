import React, { useEffect, useState } from 'react'
import axios from 'axios';

export async function tasklist() {
    console.log("tasklist backend service calls")
    try {
        const res = await axios.get('https://prime17.pythonanywhere.com/tasklist')
        return res.data;
    }
    catch (error) {
        console.error("tasklist service calls err", error);
        return null;
    }
}

export async function addTask(task) {
    console.log("addtask backend service calls")

    try {
        const res = await axios.post('http://localhost:5500/addtask', task)
        // console.log(res.data)
        return res.data;
    }
    catch (error) {
        console.error("addtask service calls err", error);
        return null;
    }
}

export async function deleteTask(taskid) {
    console.log("deletetask backend service calls")
    try {
        const res = await axios.delete(`http://localhost:5500/deletetask/${taskid}`)
        return res.data;
    }
    catch (error) {
        console.error("deletetask service calls err", error);
        return null;
    }
}

export async function updateTask(taskid, updatedTask, toggleComplete) {
    console.log("updateTask backend service calls")
    try {
        const res = await axios.put(`http://localhost:5500/updatetask/${taskid}`,{content: updatedTask, completed: toggleComplete})
        return res.data;
    }
    catch (error) {
        console.error("updatetask service calls err", error);
        return null;
    }
}