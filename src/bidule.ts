export class Bidule {
    constructor(private name?: String) {
        console.log("a new Bidule has just been created" + (name ? " with name " + name : ""));
    }

    public getName(): String {
        return this.name;
    }
}