describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });
    describe('adding a note', function() {
        it("should be able to add a new note", function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
        it("should ignore blank notes", function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should ignore notes containing only whitespace', function() {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should require a string parameter', function() {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });
    describe('deleting a note', function() {
        it('should be able to delete the first index', function () {
            expect(notes.remove(0)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should be able to delete the last index', function() {
            expect(notes.remove(4)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should return false if index is out of range', function () {
            expect(notes.remove(5)).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should return false if the parameter is missing', function () {
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });
    describe('finding a note', function () {
        let noteArrayOne = ['first note'];
        let noteArrayTwo = ['first note', 'fifth note'];
        let noteArrayFive = ['first note', 'second note',
                             'third note', 'fourth note', 'fifth note'];
        it('should be able to find first note', function () {
            expect(notes.find('first note')).toEqual(noteArrayOne);
        });
        it('should be able to find first note and fifth note with "fi"', function () {
            expect(notes.find('fi')).toEqual(noteArrayTwo);
        });
        it('should be able to find everything with "note"', function () {
            expect(notes.find('note')).toEqual(noteArrayFive);
        });
        it('should not be able to find anything', function () {
            expect(notes.find('sixth note')).toBe(false);
        });
        it('should not be case sensitive', function () {
            expect(notes.find('FirsT nOtE')).toEqual(noteArrayOne);
        });
    });
});