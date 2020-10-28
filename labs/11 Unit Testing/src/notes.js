
notes = {

    notes: [],

    add: function (note) {
        try{
            if (note.value <= 0 || !note.length || !note.trim().length) {
                return false;
            } else {
                let today = new Date();
                note.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                this.notes.push(note);
                return true;
            }
        }catch(err){
            return false;
        }
    },

    remove: function (index) {
        if (index > -1 && index < notes.count()) {
            this.notes.splice(index, 1);
            return true;
        }else{
            return false;
        }
    },

    count: function () {
        return this.notes.length;
    },

    list: function () {
        return this.notes;
    },

    find: function (string) {
        let found = [];
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].includes(string.toString().toLowerCase())) {
                found.push(this.notes[i]);
            }
        }
        if (found.length > 0) {
            return found;
        } else {
            return false;
        }
    },

    clear: function () {
        this.notes = [];
    },

    console: function () {
        console.log(notes.list());
    }
}
