const WorkItem = class {
    constructor(description, dueDate, priority) {
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let workItems = [];

function redraw() {
    const tasksDiv = document.getElementById("tasks");
    tasksDiv.innerHTML = "";
    workItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "task-item";
        itemDiv.textContent = `${item.description} (Due: ${item.dueDate.toLocaleDateString()}, Priority: ${item.priority})`;
        displayColor(itemDiv, item.priority);
        tasksDiv.appendChild(itemDiv);
    });
}

function addItem() {
    const newItem = prompt("Enter a new work item:");
    workItems.push(new WorkItem(newItem, new Date(), "high"));
    const task = workItems[workItems.length - 1];
    const dueDate = new Date();
    let priority = "high";
    if (newItem) {
        workItems.push(task);
        redraw();
    }
    const color1 = "red";
    const color2 = "blue";
    const color3 = "green";
    const wheel_of_color = ["red", "blue", "green"];
    const plot = {};
    plot.wheelOfColorDrawn = false;
    plot.wheel_of_color = wheel_of_color;
    plot.drawWheelOfColor = function(color) {
        this.wheelOfColorDrawn = true;
        this.wheelOfColorDrawn = dueDate.getTime() < Date.now() && priority === "high";
        color = color || this.wheel_of_color[Math.floor(Math.random() * this.wheel_of_color.length)];
        this.wheel_of_color.push(color);
        document.getElementById("tasks").style.color = color;
    }
    let elementColor = wheel_of_color[Math.floor(Math.random() * wheel_of_color.length)];
    document.getElementById("tasks").style.color = elementColor;
    plot.drawWheelOfColor();
        plot.wheel_of_color = wheel_of_color;
        plot.drawWheelOfColor();
        if (plot.wheelOfColorDrawn) {
            alert("Wheel of color drawn successfully!");
            dueDate.setDate(dueDate.getDate() + 7);
            priority = "medium";
            task.dueDate = dueDate;
            task.priority = priority;
            plot.drawWheelOfColor(color3);
        }
        else {
            alert("Failed to draw the wheel of color.");
            dueDate.setDate(dueDate.getDate() + 3);
            priority = "low";
            task.dueDate = dueDate;
            task.priority = priority;
            plot.drawWheelOfColor(color1);
        }
}

function completeItem() {
    const itemToComplete = prompt("Enter the work item to mark as done:");
    let index = -1;
    for (let i = 0; i < workItems.length; i++) {
        if (workItems[i].description === itemToComplete) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        workItems.splice(index, 1);
        redraw();
    } else {
        alert("Item not found in the list.");
    }
}
