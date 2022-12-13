/* Question 1  - Start  */

//TODO:Write your code here

/* Question 1  -  End  */
const getTotalStudents = (pUsers) => {
  return pUsers.filter((user) => user.jobType === "Student").length;
};

const getTotalTeachers = (pUsers) => {
  return pUsers.filter((user) => user.jobType === "Teacher").length;
};
const getTotalManagers = (pUsers) =>
  pUsers.filter((user) => user.jobType === "Administration").length;

//-------------------------------------------------

/* Question 2  - Start  */

const getTotalnameOfPeopleinSwitzerland = (pUsers) =>
  pUsers.reduce((names, user) => {
    if (user.country === "Switzerland") {
      names.push(user.fullname);
    }
    return names;
  }, []);

//TODO:Write your code here

/* Question 2  -  End  */

//-------------------------------------------------

/* Question 3  - Start  */

//TODO:Write your code here
const getfullnamejobTypeAgeDateOfEntryCountry = (pUsers) => {
  return pUsers.map((user) => {
    return {
      fullname: user.fullname,
      jobType: user.jobType,
      age: user.age,
      dateOfEntry: user.dateOfEntry,
      country: user.country,
    };
  });
};

/* Question 3  -  End  */

//-------------------------------------------------

/* Question 4  - Start  */

//TODO:Write your code here
const over25YearsOldinSwitzerland = (pUsers) => {
  return pUsers.filter(
    (user) => user.country === "Switzerland" && user.age > 25
  );
};

/* Question 4  -  End  */

//-------------------------------------------------

/* Question 5  - Start  */

//TODO:Write your code here
const getfulNameundAge = (pUsers) => {
  let newArray = [];
  fullname: fullname.split("");
  age: user.age;
};

newArray.push(user);

/* Question  5 -  End  */

//-------------------------------------------------

/* Question 6  - Start  */

//TODO:Write your code here
const newemail = [
  {
    fullname: "John Doe",
  },
  {
    fullname: "David Anderson",
  },
];

users.forEach((user) => {
  const [firstname, lastname] = user.fullname.split(" ");

  const email = `${lastname}.${firstname}@hicoders.ch`;
  user.email = email;
});

/* Question 6  -  End  */

//-------------------------------------------------

/* Question 7  - Start  */

//TODO:Write your code here
const soruYedi = [
    {
      
      parents: {
        address: {
          city: "Zurich"
        },
        income: 40000
      }
    },
  ];
  
  const studentsInZurich = users.filter((user) => {
    return user.jobType === "Student" && user.parents.address.city === "Zurich";
  });
  
  const studentsWithParentsIncomeOver20000 = studentsInZurich.filter((student) => {
    return student.parents.income > 20000;
  });
  
  
  
/* Question 7  -  End  */

//-------------------------------------------------

/* Question 8  - Start  */

//TODO:Write your code here
const getJohnfullname = (pUsers) => {
  return pUsers.filter((user) => user.fullname.includes("John"));
};

/* Question 8  -  End  */

//-------------------------------------------------

/* Question 9  - Start  */

//TODO:Write your code here

/* Question  9 -  End  */

//-------------------------------------------------

/* Question 10  - Start  */

//TODO:Write your code here

/* Question 10  -  End  */

export {
  getTotalStudents,
  getTotalTeachers,
  getTotalManagers,
  getTotalnameOfPeopleinSwitzerland,
  getfullnamejobTypeAgeDateOfEntryCountry,
  over25YearsOldinSwitzerland,
  getfulNameundAge,
  getJohnfullname,
  studentsWithParentsIncomeOver20000,
};
