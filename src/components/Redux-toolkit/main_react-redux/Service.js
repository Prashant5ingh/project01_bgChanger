import React, { useEffect, useState } from 'react'
import axios from 'axios';

export async function tasklist() {
    try {
        const res = await axios.get('http://localhost:5500/tasklist')
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
        return null;
    }
}