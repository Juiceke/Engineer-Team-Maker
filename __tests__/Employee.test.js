const Employee = require('../lib/Employee');

test('Check if data is being collected properly', () => {
    const employee = new Employee('Dave', 1, 'whoa');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('whoa')
}) 