export class Model {
    user;
    items;

    constructor(){
        this.user = "Doğukan";
        this.items = [
            new todoItem("Spor",true),
            new todoItem("Kahvaltı",false),
            new todoItem("Sinema",false),
            new todoItem("Kitap Okuma",false)
      ];

    }
}

export class todoItem {
    description;
    action;

    constructor(description,action){
        this.description = description;
        this.action = action;
    }
}

