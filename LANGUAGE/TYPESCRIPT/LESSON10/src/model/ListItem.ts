export interface Item {
    id: string,
    item: string,
    checked: boolean,
}
//Note - The id,item and checked refers to the getters and setters 
// When yu actually have the state of these class it will it will be with the underscore for each one of these and they will be passed into the constructor as private

export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) { }

    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}