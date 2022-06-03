
export const resolvers = {
  Query: {
    async getAlbums() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await response.json();
        return data;
      } catch (error:any) {
        throw new Error(error)
      }
    },
    async getAlbum(_:unknown,args:any) {
      try {        
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${args.id}`);
        const data = await response.json();
        return data;
      } catch (error:any) {
        throw new Error(error)
      }
    }
  },
};