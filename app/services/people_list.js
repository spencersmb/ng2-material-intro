var PeopleList = (function () {
    function PeopleList() {
        this.people = [
            { name: 'Dijkstra', image: 'avatar2' },
            { name: 'Knuth', image: 'avatar3' },
            { name: 'Turing', image: 'avatar4' },
            { name: 'Hopper', image: 'avatar5' }
        ];
    }
    PeopleList.prototype.get = function () {
        return this.people;
    };
    PeopleList.prototype.add = function (value) {
        this.people.push({
            name: value,
            image: "avatar" + Math.ceil(Math.random() * 12)
        });
    };
    return PeopleList;
})();
exports.PeopleList = PeopleList;
//# sourceMappingURL=people_list.js.map