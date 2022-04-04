export class Ingredient {
    public name: string;
    public amount: number;
    public description: string;

    constructor(name: string, desc: string, amount: number){
        this.name = name;
        this.description = desc;
        this.amount = amount;
    }
}

/**
 * A shorter way to create a class is removing declaration and remove content on constructor
 * Simply add an accessor in front of the argument names
 * 
 * export class Ingredient {
 *      constructor(public name: string, public description: string, public amount: number) {}
 * }
 * 
 */