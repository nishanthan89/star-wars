import mockCharacterData from '../mockCharacterData'
class StarwarService {
async fetchCharacters() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCharacterData);
    }, 500);
  });
}
}

const starwarService = new StarwarService();
export default starwarService;