import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CandidatesController extends Controller {

    @action
    addNew() {
        //var candidate = this.get('modelNew');
       
        const name = this.get('name');
        const age = this.get('age');
        //create the records on the store by calling createRecord() method
        const newCandidate = this.store.createRecord('applicant', {name: name, age: age});
        newCandidate.save().then(alert('Success'));; //call the save() method to persist the record to the backend
       
    }

}
