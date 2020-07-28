export class Model {
    user;
    items;

    constructor() {
        this.user = 'Ochieng',
        this.items = [
            new ToDoItem('Buy Flowers', false),
            new ToDoItem('Get mashakura', false),
            new ToDoItem('Meetup with the team', false),
            new ToDoItem('Clean the garage', false)
        ];
    }
}

export class ToDoItem {
    action;
    done;

    constructor(action, done){
        this.action = action;
        this.done = done;
    }
}
