

export const createAccount = async (data) => {
//   const dto = accountDto(data); 

  const response = await fetch("http://localhost:5000/api/create-account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create the account");
  }

  return response.json();
};


// // dtos/AccountDto.js

// export const accountDto = (data) => {
//     return {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       email: data.email,
//       phone: data.phone,
//       password: data.password,
//       gender: data.gender,
//       terms: data.terms, // Assuming the terms is a boolean
//     };
//   };
  