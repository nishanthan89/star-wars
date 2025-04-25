// class StarwarService{
//   async fetchCharacters (){
//     // try{
//     //   const response = await fetch('https://swapi.dev/api');
//     //   if (!response.ok) {
//     //     throw new Error(`HTTP error! status: ${response.status}`);
//     //   }
//     //   const data = await response.json();
//     //   return data;
//     // }
//     // catch
//     // {
//     //   console.error("Error fetching users:", error);
//     //   throw error;
//     // }
//   }

// }

// const starwarService = new StarwarService();

// export default starwarService;
  

// app/services/starwarService.js

const mockCharacterData = [
  {
      "name": "Luke Skywalker",
      "homeWorld": "Tatooine",
      "birthYear": "19BBY",
      "gender": "Male",
      "hairColor": "blond",
      "height": 172,
      "mass": 77
  },
  {
      "name": "C-3PO",
      "homeWorld": "Tatooine",
      "birthYear": "112BBY",
      "gender": "N/A",
      "hairColor": "n/a",
      "height": 167,
      "mass": 75
  },
  {
      "name": "R2-D2",
      "homeWorld": "Naboo",
      "birthYear": "33BBY",
      "gender": "N/A",
      "hairColor": "n/a",
      "height": 96,
      "mass": 32
  },
  {
      "name": "Darth Vader",
      "homeWorld": "Tatooine",
      "birthYear": "41.9BBY",
      "gender": "Male",
      "hairColor": "none",
      "height": 202,
      "mass": 136
  },
  {
      "name": "Leia Organa",
      "homeWorld": "Alderaan",
      "birthYear": "19BBY",
      "gender": "Female",
      "hairColor": "brown",
      "height": 150,
      "mass": 49
  },
  {
      "name": "Owen Lars",
      "homeWorld": "Tatooine",
      "birthYear": "52BBY",
      "gender": "Male",
      "hairColor": "brown, grey",
      "height": 178,
      "mass": 120
  }
];


class StarwarService {
async fetchCharacters() {
  // Simulate an API call with a Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCharacterData);
    }, 500); // Simulate a 500ms delay
  });
}
}

const starwarService = new StarwarService();
export default starwarService;