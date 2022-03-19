import { Icontact } from "./employeeInterface";

export class LocalStorage {
    private value:Icontact[] = [];
    private key = "keyContacts";
    constructor() {
        this.value = JSON.parse(localStorage.getItem(this.key) || '[]');
    }

    addItem(conatact: Icontact) {
        this.value.push(conatact);
        this.SetItem()
    }

    deleteItem(id: number) {
        this.value.forEach((element,index)=>{
            if(element.e_Id === id){
                this.value.splice(index,1);
            }
        });
        this.SetItem();
    }

    updateItem(contact: Icontact) {
        for(let i=0;i<this.value.length;i++) {
            if(this.value[i].e_Id == contact.e_Id) {
                this.value[i] = contact;
            }
        }
        this.SetItem();
    }

    SetItem() {
        localStorage.setItem(this.key, JSON.stringify(this.value));
    }
    
    get AllContacts():Icontact[] {
        return this.value;
    }
}

export const ContactsStorage = new LocalStorage();