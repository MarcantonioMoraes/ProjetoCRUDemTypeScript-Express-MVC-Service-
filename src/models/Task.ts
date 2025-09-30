export class Task {
    id: number;
    title: string;
    done: boolean;
    constructor (id:number, title:string, done = false){
        this.id = id;
        this.title = title;
        this.done = done;
    }
}