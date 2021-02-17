// Filtered algo search...
interface Filter {
  data: any[];
  filter: string;
  query: string;
  firestore: boolean;
}

const filtered = ({ data, filter, query, firestore = false }: Filter) => {
  // Check if firestore...
  const db: any[] = [];
  // Destructure firestore doc....
  firestore ? data.forEach((doc) => db.push(doc.data())) : null;
  const toQuery = firestore ? db : data;
  if (data.length > 0) {
    const found = toQuery.filter((item: any) => {
      let isFound = false;
      const filter_value = item[`${filter}`];
      if (filter_value) {
        if (filter_value.toLowerCase().indexOf(query) !== -1) {
          isFound = true;
        }
        if (filter_value.indexOf(query) !== -1) {
          isFound = true;
        }
      }
      return isFound;
    });
    return found;
  }
};

export { filtered };
