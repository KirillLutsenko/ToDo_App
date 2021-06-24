**TASK MANAGER**

 [DEMO LINK](https://KirillLutsenko.github.io/ToDo_App/)

**Description**
- Tech stack: React, Redux, BEM, SASS.
- Responsive layout only laptops & high screens.
- All buttons and links are interactive
- Design you can find [here](https://lab.lectrum.io/todo)

**Installing**
- Fork and clone this repository
- Run npm install in your terminal
- Run npm start

**Troubleshooting**
Any advise for common problems or issues. For any contributing or problem solving you could find me [here](https://www.linkedin.com/in/kirill-lutsenko-1ab7621bb/) and [here](https://join.skype.com/invite/pmxOlX8nMhpq)

 

The Task:

1. Create a react app from 4 pages and style them as close as possible to the design:
  - Login page with 2 fields login password
  - Current Deals https://prnt.sc/xawp86
  - Deal https://prnt.sc/xawzb1 (Add slider)
  - Account (by clicking on the user icon) https://prnt.sc/xawxam

2. All elements of the lists should be drawn according to the given data array (rows of tables / product cards).

3. The data format is determined independently based on the layout.

4. Execute Header & Footer as separate components.

5. The Show More button should load an additional 5 cards in 2 clicks.

6. Provide layout compression to 768px

7. Upload to GIT

**Main functionality:**
1. Support for working with tasks:
 - Creature
 - Deleting
 - Editing
2. When creating a new task, the following must be set:
 - Todo title **(required)**
 - Tag element **(required)**
 - Deadline for the task **(required)**
3. The deadline cannot be earlier than today
(you can't make a deadline for yesterday)
4. Description of the Todo **(optically)**
5. Checklist field **(required)**
 - You must add at least one sub-task
 - After editing the Add more field inside the Checklist
   you need to automatically add a new subtask and
   switch cursor to edit new sub-
   tasks
6. Tasks must be editable:
 - Editing mode is activated by clicking on the task
 - Deleting a task is done by clicking on the red cross
7. **All application state needs to be stored in REDUX**