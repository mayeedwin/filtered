// Filtered algo search...
interface Filter {
  data: any[];
  filter: string;
  query: string;
  firestore: boolean;
}

const filtered = ({ data, filter, query, firestore = false }: Filter) => {
  // Destructure irestore doc....
  if (data.length > 0) {
    const found = firestore
      ? data.filter((item: any) => {
          let isFound = false;
          const doc = item.data();
          const filter_value = doc[`${filter}`];
          if (filter_value) {
            if (filter_value.toLowerCase().indexOf(query) !== -1) {
              isFound = true;
            }
            if (filter_value.indexOf(query) !== -1) {
              isFound = true;
            }
          }
          return isFound;
        })
      : data.filter((item: any) => {
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
