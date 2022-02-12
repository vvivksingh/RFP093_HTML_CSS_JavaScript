class EmployeePayrollData {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}([ ][A-Z]{1}[a-z]{2,})?$");
        if (NAME_REGEX.test(name)) {
            this._name = name;
        } else throw "Name is Incorrect!";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get profilePicture() {
        return this._profilePicture;
    }
    set profilePicture(profilePicture) {
        this._profilePicture = profilePicture;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date()) {
            this._startDate = startDate;
        } else throw "Start Date is Incorrect!";
    }

    get departments() {
        return this._departments;
    }
    set departments(departments) {
        if (departments.length != 0) {
            this._departments = departments;
        } else throw "No Department Entered!";
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "[ id: " + this.id + ", name: " + this.name + ", gender: " + this.gender + ", profilePicture: " + this._profilePicture +
            ", salary: " + this.salary + ", startDate: " + employeeDate + ", departments: " + this.departments + ", note: " + this._note + " ]" + "\n";
    }
}

window.addEventListener("DOMContentLoaded", () => {

    const name = document.querySelector("#name");
    const nameError = document.querySelector(".name-error");
    const validName = document.querySelector(".valid-name");
    name.addEventListener("input", function() {
        if (name.value.length == 0) {
            nameError.textContent = "";
            validName.textContent = "";
        } else {
            try {
                (new EmployeePayrollData).name = name.value;
                nameError.textContent = "";
                validName.textContent = '✓';
                document.querySelector(".submitButton").disabled = false;
            } catch (error) {
                nameError.textContent = error;
                validName.textContent = "";
                document.querySelector(".submitButton").disabled = true;
            }
        }
    });

    const startDate = document.querySelector("#startDate");
    const startDateError = document.querySelector(".startDate-error");
    const validStartDate = document.querySelector(".valid-startDate");
    startDate.addEventListener("input", function() {
        try {
            let dateString = document.querySelector("#month").value + " " + document.querySelector("#day").value + ", " + document.querySelector("#year").value;
            (new EmployeePayrollData).startDate = new Date(dateString);
            startDateError.textContent = "";
            validStartDate.textContent = '✓';
            document.querySelector(".submitButton").disabled = false;
        } catch (error) {
            startDateError.textContent = error;
            validStartDate.textContent = "";
            document.querySelector(".submitButton").disabled = true;
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    salary.oninput = function() {
        output.textContent = salary.value;
    };
});

const save = () => {
    try {
        let employeePayrollData = createEmployeePayrollObject();
    } catch (submitError) {
        alert(submitError);
        return;
    }
};

const createEmployeePayrollObject = () => {
    let employeePayrollData = new EmployeePayrollData();

    employeePayrollData.name = getValue("#name");
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.profilePicture = getSelectedValues("[name=profile]").pop();
    employeePayrollData.salary = getValue("#salary");
    dateString = document.querySelector("#month").value + " " + document.querySelector("#day").value + ", " + document.querySelector("#year").value;
    employeePayrollData.startDate = new Date(dateString);
    employeePayrollData.note = getValue("#notes");
    try {
        employeePayrollData.departments = getSelectedValues("[name=department]");
    } catch (error) {
        alert(error);
        return;
    }
    alert("Employee Added Successfully!\n" + employeePayrollData.toString());
    return employeePayrollData;
};

const getSelectedValues = (propertyName) => {
    let allValues = document.querySelectorAll(propertyName);
    let selectedValues = [];
    allValues.forEach(input => {
        if (input.checked) selectedValues.push(input.value);
    });
    return selectedValues;
};

const getValue = (propertyId) => {
    let value = document.querySelector(propertyId).value;
    return value;
};