var people_list_1 = require('./people_list');
function main() {
    describe('PeopleList Service', function () {
        var nameList;
        beforeEach(function () {
            nameList = new people_list_1.PeopleList;
        });
        it('should return the list of people', function () {
            var people = nameList.get();
            people.forEach(function (p) {
                expect(p.name).toBeDefined();
                expect(p.image).toBeDefined();
            });
            expect(people).toEqual(jasmine.any(Array));
        });
    });
}
exports.main = main;
//# sourceMappingURL=people_list_spec.js.map